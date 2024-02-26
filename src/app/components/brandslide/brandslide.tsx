import React from "react";
import Marquee from "react-fast-marquee";

export default function Brandslide() {
  return (
    <div className="grid gap-4 py-4 mt-[120px] bg-[#F5F5F7]">
      <Marquee
        className="text-[43px]   flex justify-between"
        speed={40}
        loop={0}
        autoFill
        direction="left"
      >
        <div className="flex gap-8">
          <span className=" font-extrabold ml-6">𝔽𝕠𝕟𝕥 𝔾𝕖𝕟𝕖𝕣𝕒𝕥𝕠𝕣</span>
          <span className="font-serif">SAAS</span>
          <span className="font-thin">PixelPerfect</span>
          <span className="font-extrabold">ContentWizards</span>
          <span className="font-serif">BrandRevive</span>
        </div>
      </Marquee>
      <Marquee
        className="text-[43px] flex justify-between"
        speed={40}
        loop={0}
        autoFill
        direction="right"
      >
        <div className="flex gap-8">
          <span className="font-extrabold ml-6">BrandCraft</span>
          <span className="font-serif">SAAS</span>
          <span className="font-thin">PixelPerfect</span>
          <span className="font-extrabold">ContentWizards</span>
          <span className="font-serif">BrandRevive</span>
        </div>
      </Marquee>
    </div>
  );
}
