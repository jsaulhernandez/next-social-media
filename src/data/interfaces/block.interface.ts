import { IUser } from "./user.interface";

export interface IBlock {
  id: number;
  createdAt: Date;
  blocker: IUser;
  blockerId: string;
  blocked: IUser;
  blockedId: string;
}
