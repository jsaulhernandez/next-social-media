import { IBlock } from "./block.interface";
import { IComment } from "./comment.interface";
import { IFollowRequest } from "./follow-request.interface";
import { IFollower } from "./follower.interface";
import { ILike } from "./like.interface";
import { IPost } from "./post.interface";
import { IStory } from "./story.interface";

export interface IUser {
  id: string;
  username: string;
  avatar: string | null;
  cover: string | null;
  name: string | null;
  surname: string | null;
  description: string | null;
  city: string | null;
  school: string | null;
  work: string | null;
  website: string | null;
  createdAt: Date;
  posts: IPost[];
  comments: IComment[];
  likes: ILike[];
  followers: IFollower[];
  followings: IFollower[];
  followRequestsSent: IFollowRequest[];
  followRequestsReceived: IFollowRequest[];
  blocks: IBlock[];
  blockedBy: IBlock[];
  stories: IStory[];
}
