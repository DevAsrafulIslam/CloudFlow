import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

export default function Cta() {
  return (
    <div className="bg-[#F5F5F7]">
      <div className=" container flex justify-between gap-10">
        <div>{/* <Image src={} alt="Picture of the author" /> */}</div>
        <div>
          <h1 className="text-[43px] font-bold leading-[55.9px] text-[#140B43]">
            Your Vision, Our Passion Outstanding Results
          </h1>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input
              className="rounded-full"
              type="email"
              placeholder="Enter Your Email"
            />
            <Button className="bg-[#2928E8] rounded-full" type="submit">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
