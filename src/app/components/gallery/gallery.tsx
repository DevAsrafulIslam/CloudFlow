import Image from "next/image";
import React from "react";
import information from "../../../../public/images/gallery/6990c1c49df34cee316be0a2c467213c.jpeg";
import activity from "../../../../public/images/gallery/6990c1c49df34cee316be0a2c467213c.jpeg";
import name from "../../../../public/images/gallery/6990c1c49df34cee316be0a2c467213c.jpeg";
import social from "../../../../public/images/gallery/6990c1c49df34cee316be0a2c467213c.jpeg";
import chart from "../../../../public/images/gallery/be3df3d2beafc0371085421e1503f46d.jpeg";

export default function Gallery() {
  return (
    <div className="container mt-[136.09px]">
      <h1 className="w-[630px] text-center mx-auto text-[43px] mb-6 font-bold leading-[55.9px]">
        Where Imagination Meets the agency Innovation
      </h1>
      <div className="mt-[60px] gap-8 grid">
        <div className="grid grid-cols-3 gap-8">
          <div className="bg-[#B195EE] bg-opacity-10 rounded-xl p-[20px]">
            <Image src={information} alt="Picture of the author" />
            <h3 className="text-2xl mt-[18px] font-bold leading-[39px]">
              Content and Copywriting
            </h3>
            <p>non similique voluptatem</p>
          </div>
          <div className="bg-[#95D5EE] bg-opacity-10 rounded-xl p-[20px]">
            <Image src={activity} alt="Picture of the author" />
            <h3 className="text-2xl mt-[18px] font-bold leading-[39px]">
              Content and Copywriting
            </h3>
            <p>non similique voluptatem</p>
          </div>
          <div className="bg-[#F9E58F] bg-opacity-10 rounded-xl p-[20px]">
            <Image src={name} alt="Picture of the author" />
            <h3 className="text-2xl mt-[18px] font-bold leading-[39px]">
              Content and Copywriting
            </h3>
            <p>non similique voluptatem</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div className="bg-[#97EE95] bg-opacity-10 rounded-xl p-[20px]">
            <Image src={social} alt="Picture of the author" />
            <h3 className="text-2xl mt-[18px] font-bold leading-[39px]">
              Content and Copywriting
            </h3>
            <p>non similique voluptatem</p>
          </div>

          <div className="col-span-2 bg-[#F9A78F] bg-opacity-10 rounded-xl p-[20px]">
            <Image src={chart} alt="Picture of the author" />
            <h3 className="text-2xl mt-[18px] font-bold leading-[39px]">
              Content and Copywriting
            </h3>
            <p>non similique voluptatem</p>
          </div>
        </div>
      </div>
    </div>
  );
}
