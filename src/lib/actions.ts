"use server";

import { auth } from "@clerk/nextjs/server";
import prisma from "./client";
import { z } from "zod";
import { revalidatePath } from "next/cache";

// interfaces
import { IUser } from "@/data/interfaces/user.interface";
import { IPost } from "@/data/interfaces/post.interface";
import { IFollowRequest } from "@/data/interfaces/follow-request.interface";
import { IComment } from "@/data/interfaces/comment.interface";

export const getUserClerkId = async () => {
  const { userId } = auth();

  return userId;
};

export const addPost = async (formData: FormData, img: string) => {
  const desc = formData.get("desc") as string;

  const Desc = z.string().min(1).max(255);

  const validatedDesc = Desc.safeParse(desc);

  if (!validatedDesc.success) {
    //TODO
    console.log("description is not valid");
    return;
  }

  const userId = await getUserClerkId();

  if (!userId) throw new Error("User is not authenticated!");

  try {
    await prisma.post.create({
      data: {
        desc: validatedDesc.data,
        userId,
        img,
      },
    });

    revalidatePath("/");
  } catch (error) {
    console.error("[Error]", error);
  }
};

export const getUserInfoById = async (): Promise<IUser | null> => {
  try {
    const userId = await getUserClerkId();

    if (!userId) return null;

    const user = await prisma.user.findFirst({
      where: {
        id: userId,
      },
      include: { followers: true },
    });

    return user as IUser;
  } catch (error) {
    console.error("[Error]", error);
    return null;
  }
};

export const getUserInfoByUserName = async (
  username: string
): Promise<IUser | null> => {
  console.log("username", username);
  try {
    const user = await prisma.user.findFirst({
      where: {
        username: username,
      },
      include: {
        followers: true,
        followings: true,
        posts: true,
      },
    });

    return user as IUser;
  } catch (error) {
    console.error("[Error]", error);
    return null;
  }
};

export const isUserBlocker = async (userId: string): Promise<boolean> => {
  try {
    const currentUserId = await getUserClerkId();

    if (currentUserId) {
      const isBlocked = await prisma.block.findFirst({
        where: {
          blockerId: userId,
          blockedId: currentUserId,
        },
      });

      return !!isBlocked;
    } else return false;
  } catch (error) {
    console.error("[Error]", error);
    return false;
  }
};

export const isUserBlocked = async (userId: string): Promise<boolean> => {
  try {
    const currentUserId = await getUserClerkId();

    if (currentUserId) {
      const isBlocked = await prisma.block.findFirst({
        where: {
          blockerId: currentUserId,
          blockedId: userId,
        },
      });

      return !!isBlocked;
    } else return false;
  } catch (error) {
    console.error("[Error]", error);
    return false;
  }
};

export const isFollowing = async (userId: string): Promise<boolean> => {
  try {
    const currentUserId = await getUserClerkId();

    if (currentUserId) {
      const isBlocked = await prisma.follower.findFirst({
        where: {
          followerId: currentUserId,
          followingId: userId,
        },
      });

      return !!isBlocked;
    } else return false;
  } catch (error) {
    console.error("[Error]", error);
    return false;
  }
};

export const isFollowingSent = async (userId: string): Promise<boolean> => {
  try {
    const currentUserId = await getUserClerkId();

    if (currentUserId) {
      const isBlocked = await prisma.followRequest.findFirst({
        where: {
          senderId: currentUserId,
          receiverId: userId,
        },
      });

      return !!isBlocked;
    } else return false;
  } catch (error) {
    console.error("[Error]", error);
    return false;
  }
};

export const switchFollow = async (userId: string) => {
  const currentUserId = await await getUserClerkId();

  if (!currentUserId) throw new Error("User is not authenticated!");
  try {
    const existingFollow = await prisma.follower.findFirst({
      where: {
        followerId: currentUserId,
        followingId: userId,
      },
    });

    if (existingFollow) {
      await prisma.follower.delete({
        where: {
          id: existingFollow.id,
        },
      });
    } else {
      const existingFollowRequest = await prisma.followRequest.findFirst({
        where: {
          senderId: currentUserId,
          receiverId: userId,
        },
      });

      if (existingFollowRequest) {
        await prisma.followRequest.delete({
          where: {
            id: existingFollowRequest.id,
          },
        });
      } else {
        await prisma.followRequest.create({
          data: {
            senderId: currentUserId,
            receiverId: userId,
          },
        });
      }
    }
  } catch (error) {
    console.error("[Error]", error);
    throw new Error("Something went wrong!");
  }
};

export const switchBlock = async (userId: string) => {
  const currentUserId = await getUserClerkId();

  if (!currentUserId) throw new Error("User is not Authenticated!!");

  try {
    const existingBlock = await prisma.block.findFirst({
      where: {
        blockerId: currentUserId,
        blockedId: userId,
      },
    });

    if (existingBlock) {
      await prisma.block.delete({
        where: {
          id: existingBlock.id,
        },
      });
    } else {
      await prisma.block.create({
        data: {
          blockerId: currentUserId,
          blockedId: userId,
        },
      });
    }
  } catch (error) {
    console.error("[Error]", error);
    throw new Error("Something went wrong!");
  }
};

export const getPostWithMediaByUserId = async (
  userId: string
): Promise<IPost[]> => {
  try {
    const result = await prisma.post.findMany({
      where: {
        userId: userId,
        img: {
          not: null,
        },
      },
      take: 8,
      orderBy: {
        createdAt: "desc",
      },
    });

    return result as IPost[];
  } catch (error) {
    console.error("[Error]", error);

    return [];
  }
};

export const updateProfile = async (
  prevState: { success: boolean; error: boolean },
  payload: { formData: FormData; cover: string }
) => {
  const { formData, cover } = payload;
  const fields = Object.fromEntries(formData);

  const filteredFields = Object.fromEntries(
    Object.entries(fields).filter(([_, value]) => value !== "")
  );

  const Profile = z.object({
    cover: z.string().optional(),
    name: z.string().max(60).optional(),
    surname: z.string().max(60).optional(),
    description: z.string().max(255).optional(),
    city: z.string().max(60).optional(),
    school: z.string().max(60).optional(),
    work: z.string().max(60).optional(),
    website: z.string().max(60).optional(),
  });

  const validatedFields = Profile.safeParse({ cover, ...filteredFields });

  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    return { success: false, error: true };
  }

  const userId = await getUserClerkId();

  if (!userId) return { success: false, error: true };

  try {
    await prisma.user.update({
      where: {
        id: userId,
      },
      data: validatedFields.data,
    });
    return { success: true, error: false };
  } catch (error) {
    console.error("[Error]", error);
    return { success: false, error: true };
  }
};

export const getFollowRequest = async (): Promise<IFollowRequest[]> => {
  try {
    const userId = await getUserClerkId();

    if (!userId) return [];

    const result = await prisma.followRequest.findMany({
      where: {
        receiverId: userId,
      },
      include: {
        sender: true,
      },
    });

    return result as IFollowRequest[];
  } catch (error) {
    console.error("[Error]", error);
    return [];
  }
};

export const acceptFollowRequest = async (userId: string) => {
  const currentUserId = await getUserClerkId();

  if (!currentUserId) throw new Error("User is not Authenticated!!");

  try {
    const existingFollowRequest = await prisma.followRequest.findFirst({
      where: {
        senderId: userId,
        receiverId: currentUserId,
      },
    });

    if (existingFollowRequest) {
      await prisma.followRequest.delete({
        where: {
          id: existingFollowRequest.id,
        },
      });

      await prisma.follower.create({
        data: {
          followerId: userId,
          followingId: currentUserId,
        },
      });
    }
  } catch (error) {
    console.error("[Error]", error);
    throw new Error("Something went wrong!");
  }
};

export const declineFollowRequest = async (userId: string) => {
  const currentUserId = await getUserClerkId();

  if (!currentUserId) throw new Error("User is not Authenticated!!");

  try {
    const existingFollowRequest = await prisma.followRequest.findFirst({
      where: {
        senderId: userId,
        receiverId: currentUserId,
      },
    });

    if (existingFollowRequest) {
      await prisma.followRequest.delete({
        where: {
          id: existingFollowRequest.id,
        },
      });
    }
  } catch (error) {
    console.error("[Error]", error);
    throw new Error("Something went wrong!");
  }
};

export const getPostByUsernameOrId = async (
  username?: string
): Promise<IPost[]> => {
  try {
    const userId = await getUserClerkId();

    if (username) {
      const result = await prisma.post.findMany({
        where: {
          user: {
            username: username,
          },
        },
        include: {
          user: true,
          likes: {
            select: {
              userId: true,
            },
          },
          comments: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      return result as IPost[];
    }

    if (!username && userId) {
      const following = await prisma.follower.findMany({
        where: {
          followerId: userId,
        },
        select: {
          followingId: true,
        },
      });

      const followingIds = following.map((f) => f.followingId);
      const ids = [userId, ...followingIds];

      const result = await prisma.post.findMany({
        where: {
          userId: {
            in: ids,
          },
        },
        include: {
          user: true,
          likes: {
            select: {
              userId: true,
            },
          },
          comments: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      return result as IPost[];
    }

    return [];
  } catch (error) {
    console.error("[Error]", error);
    return [];
  }
};

export const deletePost = async (postId: number): Promise<void> => {
  const userId = await getUserClerkId();

  if (!userId) throw new Error("User is not authenticated!");

  try {
    await prisma.post.delete({
      where: {
        id: postId,
        userId,
      },
    });
    revalidatePath("/");
  } catch (error) {
    console.error("[Error]", error);
  }
};

export const switchLike = async (postId: number): Promise<void> => {
  const userId = await getUserClerkId();

  if (!userId) throw new Error("User is not authenticated!");

  try {
    const existingLike = await prisma.like.findFirst({
      where: {
        postId,
        userId,
      },
    });

    if (existingLike) {
      await prisma.like.delete({
        where: {
          id: existingLike.id,
        },
      });
    } else {
      await prisma.like.create({
        data: {
          postId,
          userId,
        },
      });
    }
  } catch (error) {
    console.error("[Error]", error);
    throw new Error("Something went wrong");
  }
};

export const getCommentsByPostId = async (
  postId: number
): Promise<IComment[]> => {
  try {
    const comments = await prisma.comment.findMany({
      where: {
        postId,
      },
      include: {
        user: true,
      },
    });

    return comments as IComment[];
  } catch (error) {
    console.log("[Error]", error);
    return [];
  }
};

export const addComment = async (
  postId: number,
  desc: string
): Promise<IComment> => {
  const userId = await getUserClerkId();

  if (!userId) throw new Error("User is not authenticated!");

  try {
    const created = await prisma.comment.create({
      data: {
        desc,
        userId,
        postId,
      },
      include: {
        user: true,
      },
    });

    return created as IComment;
  } catch (error) {
    console.log("[Error]", error);
    throw new Error("Something went wrong!");
  }
};
