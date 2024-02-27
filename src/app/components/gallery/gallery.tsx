import Image from "next/image";
import React from "react";
import datainfo from "../../../../public/images/gallery/data info.png";
import dataactivity from "../../../../public/images/gallery/data activity.png";
import cardname from "../../../../public/images/gallery/card name.png";
import chart from "../../../../public/images/gallery/chart info.png";
import dataactivity2 from "../../../../public/images/gallery/data-activity.png";

export default function Gallery() {
  return (
    <div className="container mt-[136.09px]">
      <h1 className="max-w-[630px] w-full text-center mx-auto text-2xl md:text-[43px] mb-6 font-bold leading-[55.9px]">
        Where Imagination Meets the agency Innovation
      </h1>
      <div className="grid  mt-[60px] gap-8">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          <div className="bg-[#B195EE] bg-opacity-10 rounded-2xl overflow-hidden md:pt-7">
            <Image
              className="md:px-24"
              src={datainfo}
              alt="Picture of the author"
            />
            <div className="pl-10 pb-10">
              <h3 className="text-2xl mt-[18px] font-bold leading-[39px]">
                Content and Copywriting
              </h3>
              <p>non similique voluptatem</p>
            </div>
          </div>
          <div className="bg-[#95D5EE] bg-opacity-10 rounded-2xl overflow-hidden md:pt-7">
            <Image
              className="md:px-24"
              src={dataactivity2}
              alt="Picture of the author"
            />
            <div className="pl-10 pb-10">
              <h3 className="text-2xl mt-[18px] font-bold leading-[39px]">
                Content and Copywriting{" "}
              </h3>
              <p>consequatur excepturi magnam</p>
            </div>
          </div>
          <div className=" bg-[#F9E58F] bg-opacity-10 rounded-2xl pt-7 ">
            <Image
              className="md:px-24"
              src={cardname}
              alt="Picture of the author"
            />
            <div className="pl-10 pb-10">
              <h3 className="text-2xl mt-[18px] font-bold leading-[39px]">
                Social Media Strategy
              </h3>
              <p>voluptatem numquam qui</p>
            </div>
          </div>
          <div className="lg:hidden bg-[#97EE95] bg-opacity-10 rounded-2xl overflow-hidden md:pt-7">
            <Image
              className="md:px-24"
              src={chart}
              alt="Picture of the author"
            />
            <div className="pl-10 pb-10">
              <h3 className="text-2xl mt-[18px] font-bold leading-[39px]">
                Social Media Strategy
              </h3>
              <p>odit quidem corporis</p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="lg:grid hidden md:hidden bg-[#97EE95] bg-opacity-10 rounded-2xl overflow-hidden md:pt-7">
            <Image
              className="md:px-24"
              src={chart}
              alt="Picture of the author"
            />
            <div className="pl-10 pb-10">
              <h3 className="text-2xl mt-[18px] font-bold leading-[39px]">
                Social Media Strategy
              </h3>
              <p>odit quidem corporis</p>
            </div>
          </div>

          <div className="col-span-3 md:col-span-2 bg-[#F9A78F] bg-opacity-10 rounded-2xl overflow-hidden md:pt-7">
            <Image
              className="md:px-24"
              src={dataactivity}
              alt="Picture of the author"
            />
            <div className="pl-10 pb-10">
              <h3 className="text-2xl mt-[18px] font-bold leading-[39px]">
                Brand Identity and Logo Design
              </h3>
              <p>non ipsam voluptas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
