import React from "react";
import about from "../../../../public/images/Group 1000008331.jpg";
import Image from "next/image";
import { LiaLaptopCodeSolid } from "react-icons/lia";
export default function About() {
  return (
    <div className="grid md:grid-cols-2 items-center gap-4 md:gap-[153px] mt-[107px] container mx-auto">
      <Image src={about} alt="Picture of the author" />
      <div>
        <h1 className="text-2xl text-center md:text-3xl md:text-start lg:text-[43px] mb-6 font-bold leading-8 md:left-8 lg:leading-[55.9px]">
          Unleash Your Brands Creative Potential the agency
        </h1>
        <p>
          Nulla vitae ex nunc. Morbi quis purus convallis, fermentum metus
          volutpat, sodales purus. Nunc quis maurodales purus. Nunc quis mauris
          et eros vulputate mattis Nulla vitae ex nunc.
        </p>
        <div className="flex relative items-center gap-4 mt-12 border lg:w-[321px] h-[104px] px-6 rounded-[20px]">
          <h1 className="text-[43px] mx-auto text-center font-bold pl-2">
            20+
          </h1>
          <h4 className="text-[21px] text-center leading-[31.5px] font-bold">
            Winning award
          </h4>
          <LiaLaptopCodeSolid className="absolute top-50 -left-5 md:-left-8 rounded-full w-10 h-10 md:w-16 md:h-16 p-2 text-white bg-[#2928E8]" />
        </div>
      </div>
    </div>
  );
}
