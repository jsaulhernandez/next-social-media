import { IUser } from "./user.interface";

export interface IFollowRequest {
  id: number;
  createdAt: Date;
  sender: IUser;
  senderId: string;
  receiver: IUser;
  receiverId: string;
}
