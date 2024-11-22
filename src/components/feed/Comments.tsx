import Image from "next/image";

const Comments = () => {
  return (
    <div className="">
      {/* write */}
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/13791392/pexels-photo-13791392.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
        />
        <form className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
          <input
            type="text"
            placeholder="Write a comment..."
            className="bg-transparent outline-none flex-1"
          />
          <Image
            src="/emoji.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </form>
      </div>

      {/* comments */}
      <div className="">
        {/* comment */}
        <div className="flex gap-4 justify-between mt-6">
          {/* avatar */}
          <Image
            src="https://images.pexels.com/photos/13791392/pexels-photo-13791392.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="user image"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />

          {/* description */}
          <div className="flex flex-col gap-2 flex-1">
            <span className="font-medium">Sony</span>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
              vitae dolorem accusamus nostrum a soluta illo porro.
            </p>

            <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
              <div className="flex items-center gap-4">
                <Image
                  src="/like.png"
                  alt="icon"
                  width={12}
                  height={12}
                  className="cursor-pointer w-4 h-4"
                />
                <span className="text-gray-300">|</span>
                <span className="text-gray-500">10 Likes</span>
              </div>

              <div className="text-gray-500">Reply</div>
            </div>
          </div>

          {/* icon */}
          <Image
            src="/more.png"
            alt="icon"
            width={16}
            height={16}
            className="cursor-pointer w-4 h-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Comments;
