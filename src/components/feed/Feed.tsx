// components
import Post from "./Post";
// actions
import { getPostByUsernameOrId } from "@/lib/actions";

const Feed = async ({ username }: { username?: string }) => {
  const posts = await getPostByUsernameOrId(username);

  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex flex-col gap-12">
      {posts.length
        ? posts.map((post) => <Post key={post.id} post={post} />)
        : "No posts found!"}
    </div>
  );
};

export default Feed;
