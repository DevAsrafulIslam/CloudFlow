import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

export default function Message() {
  return (
    <div className="container flex gap-[116px] mt-[120px]">
      <div className="w-4/12">
        <h1 className="text-[43px] mb-5 font-bold leading-[55.9px] text-[#140B43]">
          Contact For Urgent Service
        </h1>
        <p className="text-[#514A74] mb-14">
          Creative agency encompasses a wides range of services related to the
          design creative and strategic
        </p>
        <div className="flex items-center  gap-5">
          <div className=" bg-[#F5F5F7] p-4 w-[50px] h-[50px] rounded-full">
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.40625 1.47656L7.96875 5.22656C8.24219 5.85156 8.08594 6.59375 7.53906 7.02344L5.625 8.625C6.91406 11.3594 9.14062 13.5859 11.875 14.875L13.4766 12.9609C13.9062 12.4141 14.6484 12.2578 15.2734 12.5312L19.0234 14.0938C19.7656 14.3672 20.1172 15.1875 19.9219 15.9297L18.9844 19.3672C18.7891 20.0312 18.2031 20.5 17.5 20.5C7.8125 20.5 0 12.6875 0 3C0 2.29688 0.46875 1.71094 1.13281 1.51562L4.57031 0.578125C5.3125 0.382812 6.13281 0.734375 6.40625 1.47656Z"
                fill="#95D5EE"
              />
            </svg>
          </div>
          <h4 className="text-[21px] leading-[31.5px] font-bold text-[#140B43]">
            +(201) 555-0124
          </h4>
        </div>
      </div>
      <div className="grid gap-5 w-10/12">
        <div className="grid grid-cols-3 gap-5">
          <Input type="text" placeholder="Your Name" />
          <Input type="email" placeholder="E-mail" />
          <Input type="date" placeholder="Date" />
          <Input type="text" placeholder="Your Address" />
          <Input type="number" placeholder="Your Number" />
          <Input type="option" placeholder="Choose a Option" />
        </div>

        <Textarea
          className="border w-full rounded-2xl p-4"
          id="myTextarea"
          placeholder="Write Message"
          cols={30}
          rows={5}
        />

        <Button className="w-3/12 h-12 rounded-full bg-[#2928E8]" type="submit">
          Submit Now
        </Button>
      </div>
    </div>
  );
}
