// "use client";

// import { motion,useInView, MotionValue, useScroll, useTransform } from "motion/react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { useRef, useState } from "react";

// function DivComponents({
//   data,
//   index,
// }: {
//   data: { name: string; heading: string; body: string; nav: string[] };
//   index: number;
// }) {

//   const containerRef = useRef(null);
//   const isInView = useInView(containerRef, { once: true, amount: 0.3 });

//   const containerVariants = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, x: 100 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.5 }
//     }
//   };

//   const imageVariants = {
//     hidden: { x: -500 },
//     visible: {
//       x: 0,
//       transition: { duration: 0.6, type: "easeInOut" }
//     }
//   };

//   const router = useRouter();
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({ target: ref });
//   const y = useParallax(scrollYProgress, 300);
//   if (index % 2 === 1) {
//     return (
//       <div className="flex justify-between items-start sm:items-stretch ">
//         <div className="sm:w-1/2 flex  justify-center flex-col  gap-7  p-10">
//           <motion.p
//             initial={{ x: -500 }}
//             whileInView={{ x: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             className="nasalization  text-center  text-3xl text-[#7F6456]"
//           >
//             {data.heading}
//           </motion.p>
//           <motion.p
//             initial={{ x: -500 }}
//             whileInView={{ x: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.25 }}
//           >
//             {data.body}
//           </motion.p>

//           {/* <div className="flex justify-center"> */}
//           <motion.div
//             initial={{ x: -500 }}
//             whileInView={{ x: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.35 }}
//             className=""
//           >
//             {data.nav &&
//               data.nav.map((d) => (
//                 <div className="flex items-center gap-1" key={d}>
//                   <svg
//                     className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 14 10"
//                   >
//                     <path
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M1 5h12m0 0L9 1m4 4L9 9"
//                     />
//                   </svg>
//                   <p className="whitespace-nowrap">{d}</p>
//                 </div>
//               ))}
//           </motion.div>

//           <motion.button
//             onClick={() => router.push(`/ourservices/${data.heading}`)}
//             whileHover={{ scale: 1.2 }}
//             className="border-2 border-[#7F6456] hover:text-white text-[#7F6456] hover:bg-[#7F6456]  transition-colors w-32 p-3 rounded-full"
//           >
//             KNOW MORE
//           </motion.button>

//           {/* </div> */}
//         </div>
//         <motion.div
//           initial={{ x: 500 }}
//           whileInView={{ x: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.3, type: "easeInOut" }}
//           className="group relative hidden sm:block"
//         >
//           <motion.p
//             className={`absolute  hidden left-16 font-border text-[#7F6456] font-extrabold  ${
//               index === 1 ? "top-28" : ""
//             }   text-9xl p-4 inline-block group-hover:bg-clip-text group-hover:bg-[#7F6456] `}
//             initial={{ visibility: "hidden" }}
//             animate={{ visibility: "visible" }}
//             style={{ y }}
//           >{`#0${index}`}</motion.p>
//           <Image
//             src={data.name}
//             className="sm:-mt-20 "
//             width="600"
//             height="460"
//             alt={data.heading}
//           />
//         </motion.div>
//       </div>
//     );
//   } else {
//     return (
//       <div className="flex justify-between items-end sm:items-stretch">
//         <motion.div
//           initial={{ x: -500 }}
//           whileInView={{ x: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.3, type: "easeInOut" }}
//           className="group relative  w-1/2 hidden sm:block"
//         >
//           <motion.p
//             className="absolute   right-40 top-10 font-border text-[#7F6456] font-extrabold   text-9xl p-4 inline-block group-hover:bg-clip-text group-hover:bg-[#7F6456] "
//             initial={{ visibility: "hidden" }}
//             animate={{ visibility: "visible" }}
//             style={{ y }}
//           >{`#0${index}`}</motion.p>
//           <Image
//             src={data.name}
//             className="-mt-20  "
//             width="600"
//             height="460"
//             alt={data.name}
//           />
//         </motion.div>
//         <div className="sm:w-1/2 flex justify-center items-center -mt-5">
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             className=" flex  flex-col  gap-7 p-10 "
//           >
//             <motion.p
//               initial={{ x: 500 }}
//               whileInView={{ x: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.2 }}
//               className="nasalization  text-center  text-3xl text-[#7F6456]"
//             >
//               {data.heading}
//             </motion.p>
//             <motion.p
//               initial={{ x: 500 }}
//               whileInView={{ x: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.25 }}
//             >
//               {data.body}
//             </motion.p>
//             <motion.div
//               initial={{ x: 500 }}
//               whileInView={{ x: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.35 }}
//               className=""
//             >
//               {data.nav &&
//                 data.nav.map((d) => (
//                   <div className="flex items-center gap-1" key={d}>
//                     <svg
//                       className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 14 10"
//                     >
//                       <path
//                         stroke="currentColor"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M1 5h12m0 0L9 1m4 4L9 9"
//                       />
//                     </svg>
//                     <p className="whitespace-nowrap">{d}</p>
//                   </div>
//                 ))}
//             </motion.div>
//             <motion.button
//               onClick={() => router.push(`/ourservices/${data.heading}`)}
//               whileHover={{ scale: 1.2 }}
//               className="border-2 border-[#7F6456] hover:text-white text-[#7F6456] hover:bg-[#7F6456]  transition-colors w-32 p-3 rounded-full"
//             >
//               KNOW MORE
//             </motion.button>
//           </motion.div>
//         </div>
//       </div>
//     );
//   }
// }

// function useParallax(value: MotionValue<number>, distance: number) {
//   return useTransform(value, [0, 1], [-distance, distance]);
// }

// export default function OurServices() {
//   const [data] = useState([
//     {
//       name: "/Group 2249.png",
//       heading: "Landscaping",
//       body: `Transform outdoor spaces into stunning, functional environments.
//   From lush gardens to modern hardscapes, we design landscapes
//   that harmonize with architecture and nature.`,
//       nav: [
//         "Garden Design",
//         "Landscape Architecture",
//         "Landscaping for Climate",
//         "Sustainable Landscaping",
//       ],
//     },
//     {
//       name: "/Group 2250.png",
//       heading: "Architectural Design",
//       body: `Innovative and practical architectural solutions tailored to your vision. From concept to construction, we ensure designs that inspire and perform.`,
//       nav: [
//         "Architectural Design Projects",
//         "3D Rendering and Visualization",
//         "Project Management",
//         "Sustainable and Green Building Practices",
//       ],
//     },
//     {
//       name: "/Group 2251 (1).png",
//       heading: "MEP Engineering",
//       body: `Integrated mechanical, electrical, and plumbing systems for optimized performance. We ensure safety, functionality, and compliance in every build.`,
//       nav: [
//         "HVAC and Ducting Systems",
//         "Electrical & Power Layouts",
//         "Plumbing & Drainage Design",
//         "Fire Protection & Coordination Drawings",
//       ],
//     },
//     {
//       name: "/Group 2252.png",
//       heading: "Interior Design",
//       body: `Bring life and function into your spaces with creative and client-centric interiors. We blend style with comfort to create environments that speak to you.`,
//       nav: [
//         "Space Planning & Concepts",
//         "Material and Finish Selection",
//         "Lighting & Furniture Design",
//         "Kitchen and Bathroom Design",
//       ],
//     },
//     {
//       name: "/Group 2253.png",
//       heading: "Civil & Fit-Out Works",
//       body: `End-to-end civil and fit-out solutions that ensure quality and detail in execution.
//   From partitions to finishes, we build with precision.`,
//       nav: [
//         "Partitioning & False Ceilings",
//         "Flooring & Wall Finishes",
//         "Electrical & HVAC Installations",
//         "Plumbing & Sanitary Works",
//       ],
//     },
//     {
//       name: "/Group 2254.png",
//       heading: "Carpentry & Woodworks",
//       body: `Custom woodwork crafted with detail, elegance, and function. We design and fabricate furniture and fixtures that elevate your space.`,
//       nav: [
//         "Custom Furniture Fabrication",
//         "Doors, Frames & Cladding",
//         "Shelving & Storage Units",
//         "Finishing & Polishing Works",
//       ],
//     },
//   ]);
//   // const [data] = useState([
//   //   {
//   //     name: "/Group 2249.png",
//   //     handing: "Landscaping",
//   //     body: `Transform outdoor spaces into stunning, functional environments.
//   //         From lush gardens to modern hardscapes, we design landscapes
//   //         that harmonize with architecture and nature
//   //         .`,
//   //     nav: [
//   //       "Garden Design",
//   //       "Landscape Architecture",
//   //       "Landscaping for Climate",
//   //       "Sustainable Landscaping",
//   //     ],
//   //   },
//   //   {
//   //     name: "/Group 2250.png",
//   //     handing: "3D Visualisation",
//   //     body: `Experience your project before it’s built. Our advanced 3D
//   //         visualisation services provide realistic renderings, allowing
//   //         you to explore and refine design concepts with clarity and
//   //         precision.`,
//   //   },
//   //   {
//   //     name: "/Group 2251 (1).png",
//   //     handing: "Interior Designing",
//   //     body: `   Transform your interiors into inspirational spaces. Our interior
//   //               design team blends aesthetics with functionality to create
//   //               environments that reflect your style and meet your practical
//   //               needs.`,
//   //   },
//   //   {
//   //     name: "/Group 2252 (1).png",
//   //     handing: "Interior Fit Out",
//   //     body: `Seamlessly transition from design to reality. Our interior fit
//   //     out services ensure every detail is executed with precision,
//   //     delivering high-quality finishes and a flawless final look.`,
//   //   },
//   //   {
//   //     name: "/Group 2253.png",
//   //     handing: "Authority Approvals",
//   //     body: `     Navigate the complexities of regulatory compliance with ease. We
//   //                 manage all aspects of authority approvals, ensuring your project
//   //                 meets every legal and safety standard.`,
//   //   },
//   //   {
//   //     name: "/Group 2254.png",
//   //     handing: "MEP & Architectural Drawing",
//   //     body: `Rely on our technical expertise for your project’s backbone.
//   // Our comprehensive MEP (Mechanical, Electrical, and Plumbing)
//   // solutions and detailed architectural drawings ensure that
//   // every component of your design is meticulously planned and
//   // executed.`,
//   //   },
//   // ]);

//   // const { scrollYProgress } = useScroll();
//   // const scaleX = useSpring(scrollYProgress, {
//   //   stiffness: 100,
//   //   damping: 30,
//   //   restDelta: 0.001,
//   // });

//   return (
//     <div id="our-services" className="pb-14 ">
//       <div className="py-24 flex justify-center ">
//         <p className="nasalization hover-underline-animation   text-4xl text-[#7F6456] text-center">
//           Our Services
//         </p>
//       </div>
//       {data.map((data, index) => (
//         <DivComponents key={index} data={data} index={index + 1} />
//       ))}
//       {/* <motion.div className="progress" style={{ scaleX }} /> */}
//     </div>
//   );
// }

"use client";

import { Service } from "@/types/type";
import { generateSlug } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef } from "react";

function DivComponents({ data, index }: { data: Service; index: number }) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const router = useRouter();
  // const ref = useRef(null);
  // const { scrollYProgress } = useScroll({ target: ref });
  // const y = useParallax(scrollYProgress, 300);

  // Define variants for parent-child animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const leftItemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  const rightItemVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  const leftImageVariants = {
    hidden: { x: -500 },
    visible: {
      x: 0,
      transition: { duration: 0.6, type: "easeInOut" },
    },
  };

  const rightImageVariants = {
    hidden: { x: 500 },
    visible: {
      x: 0,
      transition: { duration: 0.6, type: "easeInOut" },
    },
  };

  if (index % 2 === 1) {
    // Odd index layout
    return (
      <div
        ref={containerRef}
        className="flex justify-between items-start sm:items-stretch"
      >
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="sm:w-1/2 flex justify-center flex-col gap-7 p-10"
        >
          <motion.p
            variants={leftItemVariants}
            className="nasalization text-center sm:text-3xl text-2xl text-[#7F6456]"
          >
            {data.service_name}
          </motion.p>

          <motion.p variants={leftItemVariants}>{data.description}</motion.p>

          <motion.div variants={leftItemVariants} className="">
            {data.sub_services.length > 0 &&
              data.sub_services.map((d, index) => (
                <div
                  className="flex items-center gap-1"
                  key={d.service_id + "subservice" + index}
                >
                  <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                  <p className="whitespace-nowrap">{d.sub_service_name}</p>
                </div>
              ))}
          </motion.div>

          <motion.button
            variants={leftItemVariants}
            whileHover={{ scale: 1.2 }}
            onClick={() => router.push(`/ourservices/${generateSlug(data.service_name)}`)}
            className="border-2 border-[#7F6456] hover:text-white text-[#7F6456] hover:bg-[#7F6456] transition-colors w-32 p-3 rounded-full"
          >
            KNOW MORE
          </motion.button>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={rightImageVariants}
          className="group relative hidden sm:block"
        >
          {/* <motion.p
            className={`absolute hidden left-16 font-border text-[#7F6456] font-extrabold ${
              index === 1 ? "top-28" : ""
            } text-9xl p-4 inline-block group-hover:bg-clip-text group-hover:bg-[#7F6456]`}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.7 }}
            style={{ y }}
          >{`#0${index}`}</motion.p> */}

          <div className="w-full mt-10 h-full z-10 flex justify-start items-center">
            <div className="w-96 h-80 relative ">
              <Image
                // src={"/Vector 6 (1).png"}
                src={data.cover_image?.image_url || ""}
                className=" rounded-l-4xl object-cover"
                fill
                alt={`${data.cover_image.path}-SERVICE`}
              />
            </div>
          </div>
          <Image
            src={"/Vector 5 (1).png"}
            // src={data.cover_image?.image_url || ""}
            className="top-0 -z-10 absolute right-20"
            width="600"
            height="400"
            alt={`${data.cover_image.path}-SERVICE`}
          />
          {/* <Image
            src={"/Vector 5 (1).png"}
            className="sm:-mt-20"
            width="640"
            height="500"
            alt={`${data.cover_image.path}-SERVICE`}
          />
          <Image
            src={data.cover_image.image_url || ""}
            className="sm:-mt-20"
            width="640"
            height="500"
            alt={`${data.cover_image.path}-SERVICE`}
          /> */}
        </motion.div>
      </div>
    );
  } else {
    return (
      <div
        ref={containerRef}
        className="flex justify-between items-end sm:items-stretch"
      >
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={leftImageVariants}
          className="group relative w-1/2 hidden sm:block"
        >
          {/* <motion.p
            className="absolute right-40 top-10 font-border text-[#7F6456] font-extrabold text-9xl p-4 inline-block group-hover:bg-clip-text group-hover:bg-[#7F6456]"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.7 }}
            style={{ y }}
          >{`#0${index}`}</motion.p> */}
          <div className="w-full mt-10 h-full z-10 flex justify-start items-center">
            <div className="w-96 h-80 relative ">
              <Image
                // src={"/Vector 6 (1).png"}
                src={data.cover_image?.image_url || ""}
                className=" rounded-r-4xl object-cover"
                fill
                alt={`${data.cover_image.path}-SERVICE`}
              />
            </div>
          </div>
          <Image
            src={"/Vector 6 (1).png"}
            // src={data.cover_image?.image_url || ""}
            className="top-0 -z-10 absolute "
            width="450"
            height="250"
            alt={`${data.cover_image.path}-SERVICE`}
          />
        </motion.div>

        <div className="sm:w-1/2 flex justify-center items-center -mt-5">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="flex flex-col gap-7 p-10"
          >
            <motion.p
              variants={rightItemVariants}
              className="nasalization text-center sm:text-3xl text-2xl text-[#7F6456]"
            >
              {data.service_name}
            </motion.p>

            <motion.p variants={rightItemVariants}>{data.description}</motion.p>

            <motion.div variants={rightItemVariants} className="">
              {data.sub_services.length > 0 &&
                data.sub_services.map((d, index) => (
                  <div
                    className="flex items-center gap-1"
                    key={d.service_id + "sub" + index}
                  >
                    <svg
                      className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                    <p className="whitespace-nowrap">{d.sub_service_name}</p>
                  </div>
                ))}
            </motion.div>

            <motion.button
              variants={rightItemVariants}
              onClick={() => router.push(`/ourservices/${generateSlug(data.service_name)}`)}
              whileHover={{ scale: 1.2 }}
              className="border-2 border-[#7F6456] hover:text-white text-[#7F6456] hover:bg-[#7F6456] transition-colors w-32 p-3 rounded-full"
            >
              KNOW MORE
            </motion.button>
          </motion.div>
        </div>
      </div>
    );
  }
}

export default function OurServices({ data }: { data: Service[] }) {
  // const [data] = useState([
  //   {
  //     name: "/Group 2251 (1).png",
  //     heading: "Architectural Design",
  //     body: `Innovative and practical architectural solutions tailored to your vision. From concept to construction, we ensure designs that inspire and perform.`,
  //     nav: [
  //       "Architectural Design Projects",
  //       "3D Rendering and Visualization",
  //       "Project Management",
  //       "Sustainable and Green Building Practices",
  //     ],
  //   },
  //   {
  //     name: "/Group 2252 (4).png",
  //     heading: "Engineering ",
  //     body: `At Arkiwood, engineering makes sure that every design is based on accuracy, security, and clever functioning.  We provide the technological foundation for every exquisite place, from structural integrity to seamless systems.`,
  //     nav: [
  //       "Structural planning",
  //       "Electrical layout & execution",
  //       "Plumbing systems",
  //       "HVAC integration",
  //     ],
  //   },
  //   {
  //     name: "/Group 2250.png",
  //     heading: "MEP Drawings",
  //     body: `Integrated mechanical, electrical, and plumbing systems for optimized performance. We ensure safety, functionality, and compliance in every build.`,
  //     nav: [
  //       "HVAC and Ducting Systems",
  //       "Electrical & Power Layouts",
  //       "Plumbing & Drainage Design",
  //       "Fire Protection & Coordination Drawings",
  //     ],
  //   },
  //   {
  //     name: "/Group 2252.png",

  //     heading: "Interior Design",
  //     body: `Bring life and function into your spaces with creative and client-centric interiors. We blend style with comfort to create environments that speak to you.`,
  //     nav: [
  //       "Space Planning & Concepts",
  //       "Material and Finish Selection",
  //       "Lighting & Furniture Design",
  //     ],
  //   },
  //   {
  //     name: "/Group 2253.png",

  //     heading: "Civil & Interior Fit out",
  //     body: `End-to-end civil and fit-out solutions that ensure quality and detail in execution.
  // From partitions to finishes, we build with precision.`,
  //     nav: [
  //       "Partitioning & False Ceilings",
  //       "Flooring & Wall Finishes",
  //       "Electrical & HVAC Installations",
  //       "Plumbing & Sanitary Works",
  //     ],
  //   },

  //   {
  //     name: "/Group 2250 (1).png",
  //     heading: "Carpentry & Woodworks",
  //     body: `Custom woodwork crafted with detail, elegance, and function. We design and fabricate furniture and fixtures that elevate your space.`,
  //     nav: [
  //       "Custom Furniture Fabrication",
  //       "Doors, Frames & Cladding",
  //       "Shelving & Storage Units",
  //       "Finishing & Polishing Works",
  //     ],
  //   },
  //   {
  //     name: "/Group 2.png",
  //     heading: "Authorities",
  //     body: `Navigating approval processes is a crucial part of any interior or fit-out project. We assist clients in securing all necessary approvals from relevant authorities and building managements, ensuring designs and installations meet regulatory and landlord standards. From food sector permits to NOCs from mall and building managements, we handle the paperwork so you can focus on your business.`,
  //     nav: [
  //       "Civil Defense Authorities",
  //       "Electricity & Water Authorities",
  //       "Environmental & Sustainability Authorities",
  //       "Free Zones & Special Authorities",
  //     ],
  //   },
  //   {
  //     name: "/Group 2254.png",
  //     heading: "Approvals",
  //     body: `We specialize in delivering carpentry and joinery works that fully comply with local authority regulations and building management standards across the UAE. Our team is experienced in handling documentation and technical requirements for approvals from entities such as Dubai Municipality, Civil Defense, DEWA, and major Free Zone authorities, ensuring smooth project execution without delays.`,
  //     nav: [
  //       "Food & Beverage Sector Approvals",
  //       "Building Management & Developer Approvals",
  //       "Building Owner/Landlord NOC",
  //       "Mall Management Approval (For retail spaces)",
  //     ],
  //   },
  //   {
  //     name: "/Group 2251 (5).png",
  //     heading: "Joinery",
  //     body: `Custom woodwork crafted with detail, elegance, and function. We design and fabricate furniture and fixtures that elevate your space.`,
  //     nav: [
  //       "Custom Furniture Fabrication",
  //       "Doors, Frames & Cladding",
  //       "Shelving & Storage Units",
  //       "Finishing & Polishing Works",
  //     ],
  //     route: "/carpentry-woodworks",
  //   },
  //   {
  //     name: "/Group 2249 (6).png",
  //     heading: "Landscaping",
  //     body: `Transform outdoor spaces into stunning, functional environments.
  // From lush gardens to modern hardscapes, we design landscapes
  // that harmonize with architecture and nature.`,
  //     nav: [
  //       "Garden Design",
  //       "Landscape Architecture",
  //       "Landscaping for Climate",
  //       "Sustainable Landscaping",
  //     ],
  //   },
  // ]);

  return (
    <div className="pb-14  overflow-hidden ">
      <div className="w-screen h-[550px] group relative overflow-hidden cursor-pointer">
        {/* Background Image with Zoom Effect */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110 "
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          }}
        />

        {/* Overlay with Dynamic Opacity */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-[#7F6456]/30 to-black/60 transition-opacity duration-500 group-hover:from-black/60 group-hover:via-[#7F6456]/40 group-hover:to-black/70" />

        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col justify-center items-center px-8 z-10">
          {/* Title Section */}
          <div className="text-center mt-8 sm:mt-0 mb-8 transform transition-all duration-500 group-hover:translate-y-[-20px]">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-wide">
              <span className="bg-gradient-to-r from-white via-[#D4C4B0] to-[#7F6456] bg-clip-text text-transparent">
                Our Services
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#7F6456] to-[#A68B7A] mx-auto transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </div>

          {/* Description Text - Hidden by default, shows on hover */}
          <div className="max-w-4xl sm:block hidden opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-200">
            <p className="text-lg md:text-xl leading-relaxed text-center font-medium">
              <span className="text-[#E8DDD4]">
                We provide seamless, end-to-end solutions that make your
                environments come to life.
              </span>
              <span className="text-white block mt-4">
                We manage every aspect, from interior design and MEP engineering
                to carpentry, custom woodworking, landscaping, fit-outs, and
                architectural design.
              </span>
              <span className="text-[#D4C4B0] block mt-4 font-semibold">
                We create the ideal balance of comfort, design, and usefulness
                in every area of your space with our skillful craftsmanship and
                astute engineering.
              </span>
            </p>
          </div>
          <div className="max-w-4xl sm:hidden block">
            <p className="text-lg md:text-xl leading-relaxed text-center font-medium">
              <span className="text-[#E8DDD4]">
                We provide seamless, end-to-end solutions that make your
                environments come to life.
              </span>
              <span className="text-white block mt-4">
                We manage every aspect, from interior design and MEP engineering
                to carpentry, custom woodworking, landscaping, fit-outs, and
                architectural design.
              </span>
              <span className="text-[#D4C4B0] block mt-4 font-semibold">
                We create the ideal balance of comfort, design, and usefulness
                in every area of your space with our skillful craftsmanship and
                astute engineering.
              </span>
            </p>
          </div>

          {/* Call to Action Button - Appears on hover */}
          <div className="mt-8 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-400">
            <Link href="#our-services">
              <button className="px-8 py-3 bg-gradient-to-r from-[#7F6456] to-[#9A8071] text-white font-semibold rounded-full hover:from-[#6B5447] hover:to-[#7F6456] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Explore Our Work
              </button>
            </Link>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-[#7F6456]/30 rotate-45 opacity-0 group-hover:opacity-100 group-hover:rotate-0 transition-all duration-700" />
          <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-[#A68B7A]/40 rotate-45 opacity-0 group-hover:opacity-100 group-hover:rotate-90 transition-all duration-700 delay-300" />
        </div>

        {/* Animated Border Effect */}
        <div className="absolute inset-0 border-4 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-400/50 group-hover:to-purple-500/50 transition-all duration-500 pointer-events-none" />
      </div>
      <div id="our-services">
        {data.map((data, index) => (
          <DivComponents key={index + "DivComponents"} data={data} index={index + 1} />
        ))}
      </div>
    </div>
  );
}
