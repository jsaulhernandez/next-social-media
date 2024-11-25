import { IUser } from "./user.interface";

export interface IFollower {
  id: number;
  createdAt: Date;
  follower: IUser;
  followerId: string;
  following: IUser;
  followingId: string;
}
