import Image from "next/image";
import { Suspense } from "react";

// components
import { Comments, PostInfo, PostInteraction } from "../";
// actions
import { getUserClerkId } from "@/lib/actions";
// interfaces
import { IPost } from "@/data/interfaces/post.interface";

const Post = async ({ post }: { post: IPost }) => {
  const userId = await getUserClerkId();

  return (
    <div className="flex flex-col gap-4">
      {/* user info */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={post.user.avatar || "/noAvatar.png"}
            width={40}
            height={40}
            alt="user image"
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">
            {post.user.name && post.user.surname
              ? post.user.name + " " + post.user.surname
              : post.user.username}
          </span>
        </div>

        {userId === post.user.id && <PostInfo postId={post.id} />}
      </div>

      {/* description */}
      <div className="flex flex-col gap-4">
        {post.img && (
          <div className="w-full min-h-96 relative">
            <Image
              src={post.img}
              fill
              alt="post image"
              className="object-cover rounded-md"
            />
          </div>
        )}
        <p>{post.desc}</p>
      </div>

      {/* interaction */}
      <Suspense fallback="Loading...">
        <PostInteraction
          postId={post.id}
          likes={post.likes.map((like) => like.userId)}
          commentNumber={post.comments.length}
        />
      </Suspense>

      {/* comments */}
      <Suspense fallback="Loading...">
        <Comments postId={post.id} />
      </Suspense>
    </div>
  );
};

export default Post;
