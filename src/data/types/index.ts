import { IUser } from "../interfaces/user.interface";

export type RightMenuProps = {
  user?: IUser;
};

export type AdProps = {
  size?: "sm" | "md" | "lg";
};

export type UserInfoCardInteractionProps = {
  userId: string;
  isUserBlocked: boolean;
  isFollowing: boolean;
  isFollowingSent: boolean;
};
