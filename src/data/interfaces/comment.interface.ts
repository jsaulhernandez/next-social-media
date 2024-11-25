import { ILike } from "./like.interface";
import { IPost } from "./post.interface";
import { IUser } from "./user.interface";

export interface IComment {
  id: number;
  desc: string;
  createdAt: Date;
  updatedAt: Date;
  user: IUser;
  userId: string;
  post: IPost;
  postId: number;
  likes: ILike[];
}
