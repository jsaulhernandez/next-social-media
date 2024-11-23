import Image from "next/image";

import { AdProps } from "@/data/types";

const Ad = ({ size = "sm" }: AdProps) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      {/* top */}
      <div className="flex justify-between items-center text-gray-500 font-medium">
        <span className="">Sponsored Ads</span>
        <Image src="/more.png" alt="icon" width={16} height={16} />
      </div>

      {/* bottom */}
      <div
        className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}
      >
        <div
          className={`relative w-full ${
            size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"
          }`}
        >
          <Image
            src="https://images.pexels.com/photos/20061413/pexels-photo-20061413/free-photo-of-young-woman-in-a-snowy-forest-with-smartphone-shooting-video-blog.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="post image"
            fill
            className="rounded-lg object-cover"
          />
        </div>

        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/20061413/pexels-photo-20061413/free-photo-of-young-woman-in-a-snowy-forest-with-smartphone-shooting-video-blog.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="icon"
            className="rounded-full h-6 w-6 object-cover"
            width={24}
            height={24}
          />

          <span className="text-blue-500 font-medium">BigChef Lounge</span>
        </div>

        <p className={`${size === "sm" ? "text-xs" : "text-sm"}`}>
          {size === "sm"
            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            : size === "md"
            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit."
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        </p>

        <button className="bg-gray-200 text-gray-500 p-2 text-xs rounded-lg">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Ad;
