"use client";

import Text from "@/components/custom/text";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-marquee-slider";

function Partners() {
  return (
    <section className="container max-w-screen-md space-y-6 md:text-center">
      <Text className="text-3xl font-medium">Our Partners</Text>

      <motion.section
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "100%" }}
        className="space-y-2">
        <SlideShow direction="rtl" />
      </motion.section>
    </section>
  );
}

const PartnerLogo = ({ src, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="transition-transform duration-300 hover:scale-110">
      <Image
        src={src}
        alt="Partners"
        width={200}
        height={200}
        className="xs:h-3/6 mx-4 aspect-auto h-40 w-fit md:w-2/3 lg:h-[120px]"
      />
    </a>
  );
};

const SlideShow = ({ direction }) => (
  <Marquee
    velocity={10}
    direction={direction}
    scatterRandomly={false}
    onInit={() => {}}
    onFinish={tries => {}}
    resetAfterTries={3}>
    <PartnerLogo
      src="https://son.gov.ng/wp-content/uploads/2022/03/son_png.png"
      href="https://son.gov.ng/"
    />
    <PartnerLogo
      src="https://ndleahelpline.com.ng/images/logo.png"
      href="https://ndleahelpline.com.ng/"
    />
    <PartnerLogo
      src="https://nafdac.gov.ng/wp-content/uploads/2023/09/NAFDAC-Logo-1.png"
      href="https://nafdac.gov.ng/"
    />
    {/* <PartnerLogo src={BrandLogo4} /> */}
  </Marquee>
);

export default Partners;
