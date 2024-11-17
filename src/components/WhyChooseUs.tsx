'use client';
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import { musicSchoolContent } from "@/data/WhyChooseUs_data";

const WhyChooseUs = () => {
  return (
    <div>
      <StickyScroll content={musicSchoolContent}> 

      </StickyScroll>
    </div>
  )
}

export default WhyChooseUs
