import React from "react";
import { FaAndroid, FaApple, FaArrowRight, FaWindows } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
export default function Footer() {
  return (
    <div>
      {/* newsletter */}
      <div>
        <div className="container pt-14 pb-12 grid grid-cols-12 gap-5 md:gap-10 mt-[60px] mb-20 text-[#140B43] justify-between md:justify-start">
          <div className=" space-y-3 md:space-y-6 text-center xl:text-left col-span-12 xl:col-span-4">
            <h3 className="text-[26px] font-bold leading-[39px]">Newsletter</h3>
            <p>
              Creative agency encompasses a wides range of services related to
              the design creative and strategic
            </p>
            <div className="flex text-5xl gap-3">
              <FaAndroid className="border p-2 rounded-md" />
              <FaApple className="border p-2 rounded-md" />{" "}
              <FaWindows className="border p-2 rounded-md" />
            </div>
          </div>

          {/* services */}
          <div className="space-y-3 md:space-y-6 text-center md:text-start col-span-6 md:col-span-3 xl:col-span-2">
            <h3 className="text-[26px] font-bold leading-[39px]">Service</h3>
            <div className="flex flex-col gap-3 ">
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
          </div>

          {/* about us */}

          <div className="space-y-3 md:space-y-6 text-center md:text-start col-span-6 md:col-span-3 xl:col-span-2">
            <h3 className="text-[26px] font-bold leading-[39px]">About Us</h3>
            <div className="flex flex-col gap-3 ">
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
          </div>
          {/* contact */}
          <div className="space-y-3 md:space-y-6 text-center md:text-start col-span-6 md:col-span-3 xl:col-span-2">
            <h3 className="text-[26px] font-bold leading-[39px]">Contact</h3>
            <div className="grid flex-col gap-3 ">
              <div className="flex items-center gap-2">
                <FaTelegramPlane className="text-6xl w-10 h-10 border rounded-md p-2 bg-[#F5F5F7]" />
                <div>
                  <p>Old city Street,Usa</p>
                  <p>1223 california-3500</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <IoCall className="text-6xl w-10 h-10 border rounded-md p-2 bg-[#F5F5F7]" />
                <div>
                  <p>(+888) 123 456 765</p>
                  <p>(+888) 123 987 765</p>
                </div>
              </div>
            </div>
          </div>

          {/* copyright */}
        </div>
      </div>
      <div className="container py-5 flex items-center justify-center md:justify-between flex-wrap gap-5">
        <p className="text-sm md:text-start text-center">
          © DesignCurved 2024 | All Rights Reserved
        </p>
        <div className="flex justify-between gap-7">
          <p>Trams & Condition</p>
          <p>Privacy Policy</p>
          <p>Contact Us</p>
        </div>
      </div>
    </div>
  );
}
