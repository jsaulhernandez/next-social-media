"use client";

import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";

// components
import { AddPostButton } from "./";
// actions
import { addPost } from "@/lib/actions";

const AddPost = () => {
  const { user, isLoaded } = useUser();
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState<any>();

  if (!isLoaded) {
    return "Loading...";
  }

  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      {/* avatar */}
      <Image
        src={user?.imageUrl || "/noAvatar.png"}
        alt="avatar"
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      />
      {/* post */}
      <div className="flex-1">
        {/* text input */}
        <form
          action={(formData) => addPost(formData, img?.secure_url || "")}
          className="flex gap-4"
        >
          <textarea
            placeholder="What's on your mind?"
            className="flex-1 bg-slate-100 rounded-lg p-2 outline-none"
            name="desc"
          ></textarea>
          <Image
            src="/emoji.png"
            alt="icon"
            width={20}
            height={20}
            className="w-5 h-5 cursor-pointer self-end"
          />

          <AddPostButton />
        </form>
        {/* post options */}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <CldUploadWidget
            uploadPreset="social"
            onSuccess={(result, { widget }) => {
              setImg(result.info);
              widget.close();
            }}
          >
            {({ open }) => {
              return (
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => open()}
                >
                  <Image
                    src="/addimage.png"
                    alt="icon"
                    width={20}
                    height={20}
                  />
                  Photo
                </div>
              );
            }}
          </CldUploadWidget>

          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addVideo.png" alt="icon" width={20} height={20} />
            Video
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addEvent.png" alt="icon" width={20} height={20} />
            Event
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/poll.png" alt="icon" width={20} height={20} />
            Poll
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
