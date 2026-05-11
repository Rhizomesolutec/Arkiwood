// import Image from "next/image";

import ContactCom from "@/components/contact";

import OurClients from "@/components/ourClients";

import { Banner } from "@/components/banner";
import WhyChooseArkiwood from "@/components/whyChooseArkiwood";
import AflterAndBeforImage from "@/components/aflterAndBeforImage";

import Service from "@/components/service";
import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Interior Design Companies in Dubai | Arkiwood UAE",
  description:
    "Discover why Arkiwood UAE ranks among the best interior design companies in Dubai. We create elegant, functional interiors for homes, offices, and villas.",
  alternates: {
    canonical: "https://arkiwooduae.com/",
  },
};

export default async function Home() {
  const { data: services } = await supabase
    .from("services")
    .select("*,sub_services(*)");
  return (
    <>
      <Banner />

      <main className="  w-full  overflow-hidden">
        {/* <AutoScrollSection> */}
        <div className="mt-10" id="about">
          <div className=" w-full sm:flex  h-[500px]  ">
            <div className="sm:w-[600px] hidden sm:block w-full">
              <div className="relative">
                <Image
                  width={500}
                  height={500}
                  src={"/Group 2259 (2).png"}
                  alt={"Group 2259 (2).png"}
                />
              </div>
            </div>
            <div className="flex justify-center items-center sm:mt-0  sm:w-3/5 px-6 sm:pr-10">
              <div>
                <p className=" nasalization hover-underline-animation center text-4xl  text-[#7F6456]">
                  About Us
                </p>
                <p className="text-[#704e3c]">
                  At ARKIWOOD, we specialize in end-to-end solutions for
                  transforming spaces across the UAE. we are on of the best Interior companies in uae. From innovative interior
                  design concepts to precise architectural drawings, MEP plans,
                  and everything in between, we ensure every detail is
                  meticulously covered. Our expert team navigates all regulatory
                  approvals, ensuring smooth, hassle-free project execution from
                  start to finish. Whether it’s residential, commercial, or
                  industrial, we bring your vision to life with unmatched
                  precision, creativity, and professionalism. From securing
                  authority approvals to handing over the keys, we oversee every
                  step of your interior journey, crafting spaces that are not
                  only functional but also ready to inspire—whether for work or
                  living.
                </p>

                {/* <div className="flex flex-wrap justify-evenly mt-4 ">
                  {[
                    {
                      src: "/1746855302712-4fd7fa1e-68d2-4134-b764-a3980b730908_1.jpg",
                      title: "ISO 9001: Quality Management",
                      desc: "Ensures our processes consistently deliver high quality and client satisfaction.",
                      alt: "ISO 9001 Certificate",
                    },
                    {
                      src: "/1746853721271-1d396663-da7f-4260-8c8b-76871714790c_1.jpg",
                      title: "ISO 14001: Environmental Management",
                      desc: "Demonstrates our commitment to sustainable and eco-conscious operations.",
                      alt: "ISO 14001 Certificate",
                    },
                    {
                      src: "/8d1ba13b-e31a-43ee-aab7-f187f704cb60.jpg",
                      title: "Government E-Marketplace (GEV) Certification",
                      desc: "Recognized as a registered vendor on the Government e-Marketplace, ensuring verified business compliance.",
                      alt: "GEV Certificate",
                    },
                  ].map((cert, index) => (
                    <div key={index} className="text-center max-w-[300px]">
                      <p className="mt-4 text-[#704e3c] font-medium">
                        {cert.title}
                      </p>
                      <p className="text-sm text-[#704e3c]">{cert.desc}</p>
                    </div>
                  ))}
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* </AutoScrollSection> */}

        <Service services={services!} />

        {/* <AutoScrollSection> */}
        <WhyChooseArkiwood />
        {/* </AutoScrollSection> */}

        {/* <AutoScrollSection> */}
        <AflterAndBeforImage />
        {/* </AutoScrollSection> */}

        {/* <AutoScrollSection> */}
        <OurClients />
        {/* </AutoScrollSection> */}

        {/* <AutoScrollSection> */}
        <ContactCom  />
        {/* </AutoScrollSection> */}
      </main>
    </>
  );
}
