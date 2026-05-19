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
      alternates: {
        canonical: `https://www.arkiwooduae.com/ourservices/${generateSlug(serviceName)}`,
      },
    };
  }

  if (serviceName.toLowerCase() === "carpentry & woodworks" || serviceName.toLowerCase() === "carpentry and woodworks") {
    return {
      title: "Carpentry & Woodworks – Arkiwood UAE",
      description: "Custom woodwork crafted with detail, elegance, and function. We design and fabricate furniture and fixtures that elevate your space.",
      alternates: {
        canonical: `https://www.arkiwooduae.com/ourservices/${generateSlug(serviceName)}`,
      },
    };
  }

  if (serviceName.toLowerCase() === "approvals and authorities" || serviceName.toLowerCase() === "approvals & authorities") {
    return {
      title: "Approvals and Authorities – Arkiwood UAE",
      description: "We specialize in delivering carpentry and joinery works that fully comply with local authority regulations and building management standards across the UAE. Our team is experienced in handling documentation and technical requirements for approvals from entities such as Dubai Municipality, Civil Defense, DEWA, and major Free Zone authorities, ensuring smooth project execution without delays.",
      alternates: {
        canonical: `https://www.arkiwooduae.com/ourservices/${generateSlug(serviceName)}`,
      },
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
    alternates: {
      canonical: `https://www.arkiwooduae.com/ourservices/${generateSlug(serviceName)}`,
    },
    openGraph: {
      title: `${data.service_name} – Arkiwood UAE`,
      description: data.description,
      url: `https://www.arkiwooduae.com/ourservices/${generateSlug(serviceName)}`,
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

      {serviceData.service_name.toLowerCase() === "architectural design" && (
        <div className="w-[90%] max-w-5xl mx-auto pt-2 md:pt-6 pb-12 text-[#7F6456] space-y-6 text-justify md:text-left leading-relaxed">
          <p>
            Arkiwood offers the best architectural design services in Dubai, providing creative and functional design solutions for residential, commercial, and luxury projects in Dubai. Our architectural design process is centered on the concept of turning clients' ideas into functional, stunning, and sustainable architectural designs that cater to the demands of modern living and business.
          </p>
          <p>
            Our team of experts is known to be among the best architects in Dubai, providing comprehensive architecture planning from concept development to final design implementation. We start every project with thorough consultation to understand clients' expectations and project requirements. Our architectural design services in Dubai include conceptual design, space planning, 3D visualization, and comprehensive technical documentation to ensure seamless project execution.
          </p>
          <p>
            We specialize in modern villa design, office interior design, retail design, and renovation projects by integrating technology with innovative design thinking. Our team ensures that every architectural aspect of a project improves functonality, usability, and long-term property value.
          </p>
          <p>
            At Arkiwood, we work hand-in-hand with clients and project stakeholders to provide customized architectural solutions that exude creativity, accuray, and excellence, ensuring that every project is distinguished by outstanding quality and architectural standards.
          </p>
        </div>
      )}

      {serviceData.service_name.toLowerCase() === "interior design" && (
        <div className="w-[90%] max-w-5xl mx-auto pt-2 md:pt-6 pb-12 text-[#7F6456] space-y-6 text-justify md:text-left leading-relaxed">
          <p>
            Arkiwood provides professional interior design services in dubai, designing fashionable, functional, and contemporary interiors for residential and commercial spaces in Dubai. Our design approach is centered on converting mundane spaces into aesthetically pleasing environments that represent the personality, lifestyle, and brand of our valued clients, while also being comfortable and functional.
          </p>
          <p>
            Our team of experts is renowned as one of the best interior designers in dubai, providing customized interior design solutions in a structured and detailed manner. We initiate every project by understanding the client’s expectations, space requirements, and design needs. Our interior design services in dubai encompass concept development, space planning, 3D visualization, material and color selection, lighting design, and furniture arrangement to ensure seamless and efficient project execution.
          </p>
          <p>
            We are specialized in designing luxurious villas, contemporary apartments, office spaces, retail showrooms, and hospitality interiors with a keen focus on minute details and innovative design approaches. Our experts meticulously choose materials and finishes that add to the durability, sophistication, and space efficiency of the designed spaces.
          </p>
          <p>
            At Arkiwood, we collaborate with our clients and project teams to provide outstanding interior design solutions. Our dedication to creativity, accuracy, and quality ensures that every interior space exudes sophistication and long-term value.
          </p>
        </div>
      )}

      {(serviceData.service_name.toLowerCase() === "carpentry & woodworks" || serviceData.service_name.toLowerCase() === "carpentry and woodworks") && (
        <div className="w-[90%] max-w-5xl mx-auto pt-2 md:pt-6 pb-12 text-[#7F6456] space-y-6 text-justify md:text-left leading-relaxed">
          <p>
            Arkiwood provides expertly crafted woodwork and interior carpentry solutions to increase the aesthetic and functional appeal of residential and commercial spaces in Dubai. Our team of experts is dedicated to providing customized wooden solutions that match contemporary interior designs while maintaining perfection and accuracy in every woodwork project.
          </p>
          <p>
            Our services include custom furniture production, kitchen cabinets, wardrobes, wooden partitions, wall paneling, and interior woodwork solutions. Every project is completed using high-quality materials and the latest woodwork technology to provide flawless finishing and reliability. Our woodwork professionals carefully focus on design details to provide elegant and functional woodwork solutions.
          </p>
          <p>
            We provide professional carpentry services in dubai to cater to different project requirements, ranging from modern and minimalist designs to classic and luxurious wood finishes. Our services begin with understanding client requirements, space utilization, and design preferences, enabling us to provide customized woodwork solutions that perfectly fit into the space.
          </p>
          <p>
            At Arkiwood, we strictly adhere to quality standards and maintain smooth coordination with clients and project teams. Our commitment to woodwork perfection and innovation enables us to provide woodwork solutions that increase the interior appeal and space efficiency of residential and commercial spaces.
          </p>
        </div>
      )}
    </>
  );
}
