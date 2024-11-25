import { IComment } from "./comment.interface";
import { ILike } from "./like.interface";
import { IUser } from "./user.interface";

export interface IPost {
  id: number;
  desc: string;
  img: string | null;
  createdAt: Date;
  updatedAt: Date;
  user: IUser;
  userId: string;
  comments: IComment[];
  likes: ILike[];
}
