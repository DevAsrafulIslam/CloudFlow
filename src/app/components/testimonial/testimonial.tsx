import React from "react";

import testimonial from "../../../../public/images/testimonial/Frame 1000008298.png";
import Image from "next/image";
import { FaQuoteRight } from "react-icons/fa6";

export default function Testimonial() {
  return (
    <div className="bg-[#FAF7F0] mt-[120px]">
      <div className="container grid md:grid-cols-2 pt-[120px] pb-[248px] justify-between items-center gap-24">
        <div className="w-6/12">
          <p className=" w-11 h-11">
            <FaQuoteRight className="text-5xl text-white bg-[#2928E8] p-2 rounded-full" />
          </p>
          <p className="text-2xl leading-[42px] text-[#514A74]">
            Creative agency encompasses wide range of services related i the
            creative and st marketing These agencies specialize in offering
            innovative solutions to clients branding loren ipsum
          </p>
          <h3 className="text-[26px] mt-[51px] text-[#140B43] leading-[39px] font-bold">
            <span className=" items"></span>
            Michael Ramirez
          </h3>
          <p>Marketing Manager</p>
        </div>
        <div className="flex gap-7 ">
          <Image src={testimonial} alt="Picture of the author" />
        </div>
      </div>
    </div>
  );
}
