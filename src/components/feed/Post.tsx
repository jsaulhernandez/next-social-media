import Image from "next/image";

// components
import Comments from "./Comments";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* user info */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/13791392/pexels-photo-13791392.jpeg?auto=compress&cs=tinysrgb&w=600"
            width={40}
            height={40}
            alt="user image"
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">Sony</span>
        </div>

        <Image src="/more.png" width={16} height={16} alt="icon" />
      </div>

      {/* description */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="https://images.pexels.com/photos/28921096/pexels-photo-28921096/free-photo-of-colorful-architecture-in-guanajuato-mexico.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            fill
            alt="post image"
            className="object-cover rounded-md"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed autem
          tempora minus culpa similique magnam maxime. Incidunt.
        </p>
      </div>

      {/* interaction */}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-6">
          {/* likes */}
          <div className="flex items-center gap-3 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/like.png"
              width={16}
              height={16}
              alt="icon"
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123&nbsp;<span className="hidden md:inline">Likes</span>
            </span>
          </div>
          {/* comments */}
          <div className="flex items-center gap-3 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/comment.png"
              width={16}
              height={16}
              alt="icon"
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123&nbsp;<span className="hidden md:inline">Comments</span>
            </span>
          </div>
        </div>

        {/* share */}
        <div className="flex items-center gap-3 bg-slate-50 p-2 rounded-xl">
          <Image
            src="/share.png"
            width={16}
            height={16}
            alt="icon"
            className="cursor-pointer"
          />
          <span className="text-gray-300">|</span>
          <span className="text-gray-500">
            123&nbsp;<span className="hidden md:inline">Shares</span>
          </span>
        </div>
      </div>

      <Comments />
    </div>
  );
};

export default Post;
