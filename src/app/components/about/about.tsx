import React from "react";
import about from "../../../../public/images/Group 1000008331.jpg";
import Image from "next/image";
export default function About() {
  return (
    <div className="grid items-center gap-[153px] mt-[107px] container mx-auto">
      <Image src={about} alt="Picture of the author" />
      <div>
        <h1 className="text-[43px] mb-6 font-bold leading-[55.9px]">
          Unleash Your Brands Creative Potential the agency
        </h1>
        <p>
          Nulla vitae ex nunc. Morbi quis purus convallis, fermentum metus
          volutpat, sodales purus. Nunc quis maurodales purus. Nunc quis mauris
          et eros vulputate mattis Nulla vitae ex nunc.
        </p>
        <div className="flex items-center gap-4 mt-12 border w-[321px] h-[104px] px-6 rounded-[20px]">
          <h1 className="text-[43px] mx-auto text-center font-bold">20+</h1>
          <h4 className="text-[21px] text-center leading-[31.5px] font-bold">
            Winning award
          </h4>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 26V27C0 28.6542 1.18283 30 2.63672 30H27.3633C28.8172 30 30 28.6542 30 27V26H0Z"
              fill="white"
            />
            <path
              d="M28.6317 20.667H1.36865L0.27002 24.0003H29.7304L28.6317 20.667Z"
              fill="white"
            />
            <path
              d="M28.2422 3C28.2422 1.3458 27.0594 0 25.6055 0H4.39453C2.94064 0 1.75781 1.3458 1.75781 3V18.6667H28.2422V3ZM11.2918 12.042C11.595 12.4733 11.5335 13.1025 11.1545 13.4475C10.7754 13.7925 10.2224 13.7226 9.91916 13.2913L7.57541 9.958C7.31859 9.5928 7.31859 9.07387 7.57541 8.70867L9.91916 5.37533C10.2224 4.94407 10.7755 4.87413 11.1545 5.21913C11.5335 5.56413 11.595 6.1934 11.2918 6.62467L9.38725 9.33333L11.2918 12.042ZM17.0274 3.89573L14.6837 15.229C14.5725 15.7666 14.0993 16.0999 13.6268 15.9734C13.1543 15.8469 12.8614 15.3085 12.9725 14.7709L15.3163 3.43767C15.4274 2.90007 15.9006 2.5668 16.3731 2.69327C16.8457 2.81973 17.1386 3.35813 17.0274 3.89573ZM22.4246 9.958L20.0808 13.2913C19.7776 13.7226 19.2245 13.7925 18.8455 13.4475C18.4665 13.1025 18.405 12.4733 18.7082 12.042L20.6128 9.33333L18.7082 6.62467C18.405 6.1934 18.4665 5.56413 18.8455 5.21913C19.2246 4.87413 19.7776 4.94407 20.0808 5.37533L22.4246 8.70867C22.6813 9.07387 22.6813 9.5928 22.4246 9.958Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
