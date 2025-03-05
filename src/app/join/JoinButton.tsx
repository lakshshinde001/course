"use client";

import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { PhoneCall } from "lucide-react"; // Importing the call icon

export default function JoinButton() {
  return (
    <div className="flex justify-center text-center px-4 py-10">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-4 py-2 text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl w-full flex-wrap justify-center"
      >
        {/* Call Icon */}
        <PhoneCall className="w-5 h-5 text-green-500 shrink-0" />

        {/* Address & Phone Number */}
        <span className="text-center">
          Algorithm Tech, opposite Pentagon Tower, Lane No.1, Karve Nagar, Pune.
           7666224323
        </span>
      </HoverBorderGradient>
    </div>
  );
}
