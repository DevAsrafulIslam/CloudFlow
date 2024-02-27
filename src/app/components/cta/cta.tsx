import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import datagraph from "../../../../public/images/CTA/cta.png";

export default function Cta() {
  return (
    <div className="bg-[#F5F5F7] mt-28">
      <div className=" container grid md:grid-cols-2 pb-20 justify-between gap-10">
        <div className="w-full relative -mt-12 aspect-video">
          <Image
            fill
            className="absolute border rounded-lg object-cover"
            src={datagraph}
            alt="Picture of the author"
          />
        </div>
        <div className="grid items-center ">
          <h1 className="text-3xl text-center md:text-start  md:text-[43px] font-bold leading-[55.9px] text-[#140B43]">
            Your Vision, Our Passion Outstanding Results
          </h1>
          <div className="grid gap-4 md:grid-cols-2 items-center space-x-2">
            <Input
              className="rounded-full py-7 pl-8 mx-w-[406px] w-full"
              type="email"
              placeholder="Enter Your Email"
            />
            <Button
              className="bg-[#2928E8] py-7 w-44 rounded-full"
              type="submit"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
