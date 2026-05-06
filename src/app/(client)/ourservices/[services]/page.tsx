"use server";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import Imagecom from "./imagecom";
import SubCat from "./SubCat";
import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { Service } from "@/types/type";
import { PostgrestResponse } from "@supabase/supabase-js";
import { generateSlug } from "@/lib/utils";

type tParams = Promise<{ services: string }>;

export async function generateMetadata({ params }: { params: tParams }) {
  const paramService = decodeURIComponent((await params)?.services || "");

  // Resolve actual service name from slug
  const { data: allServices } = await supabase.from("services").select("service_name");
  const matchedService = allServices?.find(
    (s) => generateSlug(s.service_name) === paramService || s.service_name === paramService
  );

  if (!matchedService) return notFound();
  const serviceName = matchedService.service_name;

  // Special case for MEP Drawings
  if (serviceName.toLowerCase().includes("mep") || serviceName.toLowerCase() === "mep drawings") {
    return {
      title: "Top MEP Companies in Dubai | Design & Drawings in UAE",
      description:
        "Arkiwood is one of the top MEP companies in Dubai offering professional MEP drawings in UAE with high-quality design, engineering, and project management services.",
    };
  }

  const { data, error } = await supabase
    .from("services")
    .select("*")
    .eq("service_name", serviceName)
    .single();

  if (error || !data) return notFound();

  const imageUrl = data.cover_image?.image_url || "/default-og.jpg";

  return {
    title: `${data.service_name} – Arkiwood UAE`,
    description:
      data.description ||
      `Explore ${data.service_name} services by Arkiwood in the UAE.`,
    openGraph: {
      title: `${data.service_name} – Arkiwood UAE`,
      description: data.description,
      url: `https://arkiwooduae.com/services/${serviceName}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: data.service_name,
        },
      ],
    },
  };
}
export default async function page({ params }: { params: tParams }) {
  const paramService = decodeURIComponent((await params)?.services || "");

  const { data: allServicesList } = await supabase.from("services").select("service_name");
  const matchedServiceObj = allServicesList?.find(
    (s) => generateSlug(s.service_name) === paramService || s.service_name === paramService
  );

  if (!matchedServiceObj) notFound();
  const services = matchedServiceObj.service_name;

  const { data, error } = (await supabase
    .from("services")
    .select("*,sub_services(*),reviews(*)")
    .eq("service_name", services)
    .eq("reviews.showOnLanding", true)) as PostgrestResponse<Service>;

  if (error || !data || data.length === 0) {
    notFound();
  }
  const serviceData = data[0];
  return (
    <>
      <div className=" text-[#7F6456] ml-4 mt-4">
        <Breadcrumb className="">
          <BreadcrumbList className="text-xl">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/ourservices">Our services</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{serviceData.service_name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex justify-center items-center py-10 ">
        <h1 className="nasalization hover-underline-animation text-center text-4xl text-[#7F6456]">
          {serviceData.service_name}
        </h1>
      </div>

      <div className="w-full flex justify-center">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          // plugins={[
          //   Autoplay({}),
          // ]}
          className="w-[90%] h-96"
        >
          <CarouselContent>
            {serviceData.images.map(
              (data, index: React.Key | null | undefined) => (
                <CarouselItem
                  key={index + "imageSer"}
                  className="md:basis-1/3 h-96 lg:basis-1/3 relative"
                >
                  <Image
                    src={data.image_url || ""}
                    fill
                    className="object-cover"
                    alt=""
                  />
                </CarouselItem>
              )
            )}
          </CarouselContent>
          <CarouselPrevious className=" border-0  rounded-none outline-none shadow-none hidden sm:block " />
          <CarouselNext className="border-0 rounded-none outline-none shadow-none   hidden sm:block" />
        </Carousel>
      </div>
      <div className="px-4 text-xl text-center sm:mt-10 text-[#7F6456]">
        <p>{serviceData.description}</p>
      </div>
      <SubCat data={serviceData} />

      {!!serviceData?.reviews?.length && (
        <div className="p-10">
          <div className="sm:flex gap-1  w-full pb-15 text-[#7F6456]  items-center">
            <div className=" text-4xl gsp-1 flex items-center  nasalization ">
              <p>ProjectNest</p>
              <p className=" hidden sm:block"> – </p>
            </div>
            <p className="hod">A collective showcase of our completed works.</p>
          </div>
          <Imagecom data={serviceData} />
        </div>
      )}
    </>
  );
}
