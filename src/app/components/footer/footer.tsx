import React from "react";
import { FaAndroid, FaApple, FaArrowRight, FaWindows } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
export default function Footer() {
  return (
    <div className="container">
      {/* newsletter */}
      <div className="flex items-center mt-20">
        <div className="border-t-2 w-full" />
        <div className="flex gap-[10px] items-center px-6">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_0_674)">
              <path
                d="M34.2856 28.5724C34.2371 28.5724 34.1914 28.5867 34.1428 28.5867C33.8149 26.972 32.9389 25.5203 31.6632 24.4776C30.3874 23.4349 28.7904 22.8652 27.1428 22.8652C25.4951 22.8652 23.8981 23.4349 22.6224 24.4776C21.3467 25.5203 20.4707 26.972 20.1428 28.5867C20.0942 28.5867 20.0485 28.5724 19.9999 28.5724C18.4844 28.5724 17.031 29.1744 15.9593 30.2461C14.8877 31.3177 14.2856 32.7712 14.2856 34.2867C14.2856 35.8022 14.8877 37.2557 15.9593 38.3273C17.031 39.3989 18.4844 40.001 19.9999 40.001C21.3585 40.001 22.5899 39.5067 23.5714 38.7153C24.5528 39.5067 25.7842 40.001 27.1428 40.001C28.5014 40.001 29.7328 39.5067 30.7142 38.7153C31.6956 39.5067 32.9271 40.001 34.2856 40.001C35.8012 40.001 37.2546 39.3989 38.3263 38.3273C39.3979 37.2557 39.9999 35.8022 39.9999 34.2867C39.9999 32.7712 39.3979 31.3177 38.3263 30.2461C37.2546 29.1744 35.8012 28.5724 34.2856 28.5724Z"
                fill="#2928E8"
              />
              <path
                d="M38.9171 17.1857L35.2571 16.2714C34.8803 14.7105 34.2634 13.2175 33.4286 11.8457L35.3671 8.61286C35.5309 8.33981 35.5988 8.01988 35.5599 7.70387C35.5211 7.38785 35.3778 7.09386 35.1529 6.86857L33.1314 4.84857C32.9061 4.62358 32.6122 4.4803 32.2961 4.44148C31.9801 4.40266 31.6602 4.47052 31.3871 4.63429L28.1543 6.57143C26.7825 5.7366 25.2895 5.11973 23.7286 4.74286L22.8143 1.08143C22.7371 0.772383 22.5588 0.498035 22.3077 0.302062C22.0566 0.10609 21.7471 -0.000240118 21.4286 4.07163e-07H18.5714C18.2527 -0.000160791 17.9431 0.106374 17.692 0.302625C17.4408 0.498876 17.2626 0.773547 17.1857 1.08286L16.2714 4.74286C14.7105 5.11973 13.2175 5.7366 11.8457 6.57143L8.61286 4.63429C8.33974 4.47076 8.01987 4.40304 7.70391 4.44186C7.38796 4.48067 7.09399 4.6238 6.86857 4.84857L4.84857 6.87C4.62358 7.09529 4.4803 7.38928 4.44148 7.7053C4.40266 8.02131 4.47052 8.34124 4.63429 8.61429L6.57143 11.8457C5.7366 13.2175 5.11973 14.7105 4.74286 16.2714L1.08143 17.1857C0.772383 17.2629 0.498035 17.4412 0.302062 17.6923C0.10609 17.9434 -0.000240118 18.2529 4.07163e-07 18.5714V21.4286C4.07163e-07 22.0843 0.445715 22.6571 1.08286 22.8143L4.74286 23.7286C5.11973 25.2895 5.7366 26.7825 6.57143 28.1543L4.63286 31.3871C4.46909 31.6602 4.40123 31.9801 4.44005 32.2961C4.47887 32.6122 4.62215 32.9061 4.84714 33.1314L6.86857 35.1514C7.33143 35.6157 8.05143 35.7014 8.61286 35.3657L11.8457 33.4271C12.1843 33.6343 12.5314 33.8271 12.8829 34.0057C12.9475 32.3298 13.5998 30.73 14.7256 29.4867C15.8513 28.2434 17.3787 27.4359 19.04 27.2057C19.6246 25.5213 20.7186 24.0604 22.1704 23.0253C23.6222 21.9902 25.3599 21.4322 27.1429 21.4286C28.0714 21.4286 28.9714 21.5814 29.82 21.8614C29.9343 21.2571 30 20.6371 30 20C30 14.4857 25.5143 10 20 10C14.4857 10 10 14.4857 10 20V20.4186L11.6371 18.78C11.7036 18.7136 11.7824 18.6609 11.8692 18.625C11.9559 18.589 12.0489 18.5705 12.1429 18.5705C12.2368 18.5705 12.3298 18.589 12.4165 18.625C12.5033 18.6609 12.5822 18.7136 12.6486 18.78C12.715 18.8464 12.7677 18.9253 12.8036 19.012C12.8395 19.0988 12.858 19.1918 12.858 19.2857C12.858 19.3796 12.8395 19.4726 12.8036 19.5594C12.7677 19.6462 12.715 19.725 12.6486 19.7914L9.79143 22.6486C9.72527 22.7154 9.64651 22.7685 9.55971 22.8047C9.4729 22.841 9.37978 22.8596 9.28572 22.8596C9.19165 22.8596 9.09853 22.841 9.01172 22.8047C8.92492 22.7685 8.84616 22.7154 8.78 22.6486L5.92286 19.7914C5.85645 19.725 5.80377 19.6462 5.76782 19.5594C5.73188 19.4726 5.71338 19.3796 5.71338 19.2857C5.71338 19.1918 5.73188 19.0988 5.76782 19.012C5.80377 18.9253 5.85645 18.8464 5.92286 18.78C5.98927 18.7136 6.06811 18.6609 6.15488 18.625C6.24165 18.589 6.33465 18.5705 6.42857 18.5705C6.52249 18.5705 6.61549 18.589 6.70226 18.625C6.78903 18.6609 6.86788 18.7136 6.93429 18.78L8.57143 20.4186V20C8.57143 13.6986 13.6986 8.57143 20 8.57143C26.3014 8.57143 31.4286 13.6986 31.4286 20C31.4286 20.84 31.3314 21.6571 31.1586 22.4457C32.5982 23.2142 33.7897 24.376 34.5943 25.7957C34.8586 25.1243 35.0843 24.4371 35.2571 23.7286L38.9171 22.8143C39.2265 22.7374 39.5011 22.5592 39.6974 22.308C39.8936 22.0569 40.0002 21.7473 40 21.4286V18.5714C40.0002 18.2527 39.8936 17.9431 39.6974 17.692C39.5011 17.4408 39.2265 17.2626 38.9171 17.1857Z"
                fill="#2928E8"
              />
            </g>
            <defs>
              <clipPath id="clip0_0_674">
                <rect width="40" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <a className="text-xl md:text-3xl font-bold text-[#140B43]">
            CloudFlow
          </a>
        </div>
        <div className="border-t-2 w-full" />
      </div>
      <div className="grid mt-[60px] w-full sm:grid-cols-2 md:grid-cols-3 space-x-5">
        <div>
          <div>
            <h3 className="text-[26px] text-center md:text-start font-bold leading-[39px] text-[#140B43]">
              Newsletter
            </h3>
            <p className="my-[10px]">
              Creative agency encompasses a wides range of services related to
              the design creative and strategic
            </p>
          </div>
          <div className="flex justify-around md:justify-start text-5xl gap-3">
            <FaAndroid className="border p-2 rounded-md" />
            <FaApple className="border p-2 rounded-md" />{" "}
            <FaWindows className="border p-2 rounded-md" />
          </div>
        </div>
        <div className="flex justify-between">
          {/* services */}
          <div>
            <h3 className="text-2xl md:text-[26px] font-bold leading-[39px] text-[#140B43]">
              Services
            </h3>
            <div className="space-y-[10px]">
              <div className="flex items-center gap-2">
                <FaArrowRight className="text-[#2928E8]" />
                <p>Ui Design</p>
              </div>
              <div className="flex items-center gap-2">
                <FaArrowRight className="text-[#2928E8]" />
                <p>Web Design</p>
              </div>
              <div className="flex items-center gap-2">
                <FaArrowRight className="text-[#2928E8]" />
                <p>Digital Marketing</p>
              </div>
              <div className="flex items-center gap-2">
                <FaArrowRight className="text-[#2928E8]" />
                <p>Video Editing</p>
              </div>
            </div>
          </div>
          {/* about */}
          <div>
            <h3 className="text-2xl md:text-[26px] font-bold leading-[39px] text-[#140B43]">
              About Us
            </h3>
            <div className="space-y-[10px]">
              <div className="flex items-center gap-2">
                <FaArrowRight className="text-[#2928E8]" />
                <p>Home</p>
              </div>
              <div className="flex items-center gap-2">
                <FaArrowRight className="text-[#2928E8]" />
                <p>Testimonial</p>
              </div>
              <div className="flex items-center gap-2">
                <FaArrowRight className="text-[#2928E8]" />
                <p>portfolio</p>
              </div>
              <div className="flex items-center gap-2">
                <FaArrowRight className="text-[#2928E8]" />
                <p>Blog details</p>
              </div>
            </div>
          </div>
        </div>
        {/* contact */}
        <div className="sm:hidden lg:flex items-center md:flex flex-col">
          <h3 className="text-2xl md:text-[26px] font-bold leading-[39px] text-[#140B43]">
            Contact
          </h3>
          <div className="gap-5">
            <div className="flex items-center gap-5">
              <FaTelegramPlane className="bg-[#F5F5F7] text-[#2928E8] rounded-lg w-10 h-10 p-2" />
              <div>
                <p>Old city Street,Usa</p>
                <p>1223 california-3500</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <IoCall className="bg-[#F5F5F7] text-[#2928E8] rounded-lg w-10 h-10 p-2" />
              <div>
                <p>(+888) 123 456 765</p>
                <p>(+888) 123 456 765</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* copyright */}
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
{
  /* <div className="flex text-5xl gap-3">
              <h3 className="text-[26px] font-bold leading-[39px]">
                Newsletter
              </h3>
              <FaAndroid className="border p-2 rounded-md" />
              <FaApple className="border p-2 rounded-md" />{" "}
              <FaWindows className="border p-2 rounded-md" />
              <FaArrowRight className="text-[#2928E8]" />
            </div> */
}
