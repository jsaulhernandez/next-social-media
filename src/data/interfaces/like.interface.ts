import { IComment } from "./comment.interface";
import { IPost } from "./post.interface";
import { IUser } from "./user.interface";

export interface ILike {
  id: number;
  createdAt: Date;
  user: IUser;
  userId: string;
  post?: IPost;
  postId: number | null;
  Comment?: IComment;
  commentId: number | null;
}
