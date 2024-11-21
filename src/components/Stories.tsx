import Image from "next/image";

const Stories = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide">
      <div className="flex gap-8 w-max">
        {/* STORIES */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="/noAvatar.png"
            alt="user image"
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">Sony</span>
        </div>
      </div>
    </div>
  );
};

export default Stories;
