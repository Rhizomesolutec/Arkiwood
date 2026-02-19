import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function FooterFooter() {
  return (
    <footer className="bg-black">
      <div className="p-4">
        <Image src="/logo.png" width={150} height={150} alt="" />
      </div>
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-300 uppercase dark:text-white">
              Company
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link href="#" className=" hover:underline">
                  About
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Careers
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Brand Center
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-300 uppercase dark:text-white">
              Help center
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link
                  href="https://www.instagram.com/arkiwood.uae?igsh=eXN1aW1ubDMybnow"
                  className="hover:underline"
                >
                  Instagram
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="https://www.linkedin.com/company/arkiwooduae/"
                  className="hover:underline"
                >
                  LInkdin
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="https://x.com/arkiwoodua4518"
                  className="hover:underline"
                >
                  X(Twitter)
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="https://www.facebook.com/profile.php?id=61573591764228"
                  className="hover:underline"
                >
                  Facebook
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-300 uppercase dark:text-white">
              QUICK LINKS
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/ourservices" className="hover:underline">
                  Services
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/projects" className="hover:underline">
                  Projects
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-300 uppercase dark:text-white">
              SERVICES
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <Link href="ourservices/MEP%20Drawings" className="hover:underline">
                  MEP Drawings
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/ourservices/Interior Design" className="hover:underline">
                  Interior Design
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/ourservices/Architectural Design" className="hover:underline">
                  Architectural Design
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/ourservices/Carpentry & Woodworks" className="hover:underline">
                 Carpentry & Woodworks
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/ourservices/Authorities" className="hover:underline">
                 Authorities
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className=" flex justify-evenly flex-wrap ">
          <Link href={"/AE59602A_ARKIWOOD_TECHNICAL%20...pdf"}>
            <Image
              src={"/9001.webp"}
              width={100}
              height={100}
              alt={"9001.webp"}
              className="grayscale"
            />
          </Link>

          <Link href={"/AE59602C-1_ARKIWOOD_TECHNICA...pdf"}>
            <Image
              src={"/45001.webp"}
              width={100}
              height={100}
              className="grayscale"
              alt={"45001.webp"}
            />
          </Link>
          <Link href={"/AE59602B_ARKIWOOD_TECHNICAL.pdf"}>
            <Image
              src={"/download.webp"}
              width={100}
              height={100}
              className="grayscale"
              alt={"14001.webp"}
            />
          </Link>
        </div>
        <div className="w-full text-center text-gray-500 dark:text-gray-400  p-5 -pt-5">
          <p>© {new Date().getFullYear()} Arkiwood. All rights reserved.</p>
        </div>
      </div>
    </footer>
    
  );
}
