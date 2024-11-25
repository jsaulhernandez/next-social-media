import { IUser } from "./user.interface";

export interface IStory {
  id: number;
  createdAt: Date;
  expiresAt: Date;
  img: string;
  user: IUser;
  userId: string;
}
