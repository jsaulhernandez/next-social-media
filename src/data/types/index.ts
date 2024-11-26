import { IComment } from "../interfaces/comment.interface";
import { IStory } from "../interfaces/story.interface";
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

export type PostInteractionProps = {
  postId: number;
  likes: string[];
  commentNumber: number;
};

export type CommentListProps = { comments: IComment[]; postId: number };

export type StoryListProps = { stories: IStory[]; userId: string };
