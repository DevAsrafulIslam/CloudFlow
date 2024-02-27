import React from "react";
import { FaAndroid, FaApple, FaArrowRight, FaWindows } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
export default function Footer() {
  return (
    <div className="container">
      <h1 className="text-3xl font-bold leading-[55.9px] text-center mt-20">
        CloudFlow
      </h1>
      <div className="grid grid-cols-4 justify-between mt-[60px] mb-20  text-[#140B43]">
        <div>
          <h3 className="text-[26px] font-bold leading-[39px]">Newsletter</h3>
          <p>
            Creative agency encompasses a wides range of services related to the
            design creative and strategic
          </p>
          <div className="flex text-5xl gap-3">
            <FaAndroid className="border p-2 rounded-md" />
            <FaApple className="border p-2 rounded-md" />
            <FaWindows className="border p-2 rounded-md" />
          </div>
        </div>
        <div>
          <h3 className="text-[26px] font-bold leading-[39px] text-[#140B43]">
            Service
          </h3>
          <p className="flex items-center gap-2">
            <FaArrowRight className="text-[#2928E8]" />
            Ui Design
          </p>
          <p className="flex items-center gap-2">
            <FaArrowRight className="text-[#2928E8]" />
            Web Design
          </p>
          <p className="flex items-center gap-2">
            <FaArrowRight className="text-[#2928E8]" />
            Digital Marketing
          </p>
          <p className="flex items-center gap-2">
            <FaArrowRight className="text-[#2928E8]" />
            Video Editing
          </p>
        </div>
        <div>
          <h3 className="text-[26px] font-bold leading-[39px] text-[#140B43]">
            About Us
          </h3>
          <p className="flex items-center gap-2">
            <FaArrowRight className="text-[#2928E8]" />
            Home
          </p>
          <p className="flex items-center gap-2">
            <FaArrowRight className="text-[#2928E8]" />
            Testimonial
          </p>
          <p className="flex items-center gap-2">
            <FaArrowRight className="text-[#2928E8]" />
            portfolio
          </p>
          <p className="flex items-center gap-2">
            <FaArrowRight className="text-[#2928E8]" />
            Blog details
          </p>
        </div>
        <div>
          <h3 className="text-[26px] font-bold leading-[39px] text-[#140B43]">
            Contact
          </h3>

          <div className="flex">
            <div className=" text-[#2928E8] bg-[#F5F5F7] p-2 text-3xl  rounded-md ">
              <FaTelegramPlane />
            </div>
            <div>
              <p>Old city Street,Usa</p>
              <p>1223 california-3500</p>
            </div>
          </div>
          <div className="flex">
            <div className=" text-[#2928E8] bg-[#F5F5F7] p-2 text-3xl  rounded-md ">
              <IoCall />
            </div>
            <div>
              <p>(+888) 123 456 765</p>
              <p>(+888) 123 987 765</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <p>© DesignCurved 2024 | All Rights Reserved</p>
        <div className="flex justify-between gap-7">
          <p>Trams & Condition</p>
          <p>Privacy Policy</p>
          <p>Contact Us</p>
        </div>
      </div>
    </div>
  );
}
