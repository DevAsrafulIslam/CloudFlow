import React from "react";
import "../banner/banner";
import "./banner.css";
import item from "/public/images/Group 1000008329.png";
import Image from "next/image";
export default function Banner() {
  return (
    <div className="banner-bg mb-[107px]">
      <div className="container pt-[63px] pb-[97px] items-center gap-4 w-12/12 flex-cols-1 md:flex justify-between mx-auto">
        <div className="md:w-6/12">
          <h1 className="text-3xl md:leading-[88.4px] mb-6 md:text-[82px] font-bold">
            Bring your business into creativity
          </h1>
          <p>
            Incorporating a business offers benefits tax limited liability
            protection tax the
          </p>
          <button className="text-white mt-[40px] h-[60px] w-[161px] rounded-[10px]  bg-[#2928E8]">
            Get Started
          </button>
        </div>
        <div className="md:w-6/12">
          <Image src={item} alt="Picture of the author" />
        </div>
      </div>
    </div>
  );
}
