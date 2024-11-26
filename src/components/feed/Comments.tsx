// components
import { CommentList } from "../";
// actions
import { getCommentsByPostId } from "@/lib/actions";

const Comments = async ({ postId }: { postId: number }) => {
  const comments = await getCommentsByPostId(postId);

  return (
    <div className="">
      {/* write */}
      <CommentList comments={comments} postId={postId} />
    </div>
  );
};

export default Comments;
