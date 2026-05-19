import ContactCom from '@/components/contact'
import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Arkiwood | MEP & Project Management Services UAE",
  description:
    "Get in touch with Arkiwood, one of the top MEP and project management companies in UAE. Contact us for interior design, fit-out, and joinery services in Dubai.",
  alternates: {
    canonical: "https://www.arkiwooduae.com/contact",
  },
};

export default function page() {
  return (
    <ContactCom/>
  )
}
