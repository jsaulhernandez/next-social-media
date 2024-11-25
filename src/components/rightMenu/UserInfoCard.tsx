import Image from "next/image";
import Link from "next/link";

// components
import { UpdateUser, UserInfoCardInteraction } from "@/components";

import { IUser } from "@/data/interfaces/user.interface";

import {
  getUserClerkId,
  isFollowing,
  isFollowingSent,
  isUserBlocked,
} from "@/lib/actions";

const UserInfoCard = async ({ user }: { user: IUser }) => {
  const formattedDate = new Date(user.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const currentUserId = await getUserClerkId();
  const isActionUserBlocked = await isUserBlocked(user.id);
  const isActionFollowing = await isFollowing(user.id);
  const isActionFollowingSent = await isFollowingSent(user.id);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* top */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Information</span>
        {currentUserId === user.id ? (
          <UpdateUser user={user} />
        ) : (
          <Link href="/" className="text-blue-500 text-xs">
            See all
          </Link>
        )}
      </div>

      {/* bottom */}
      <div className="flex flex-col gap-4 text-gray-500">
        {/* user info */}
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">
            {user.name && user.surname
              ? user.name + " " + user.surname
              : user.username}
          </span>
          <span className="text-sm">@{user.username}</span>
        </div>
        {user.description && <p>{user.description}</p>}
        {/* live */}
        {user.city && (
          <div className="flex items-center gap-2">
            <Image src="/map.png" alt="" width={16} height={16} />
            <span>
              {user.city}
              <b />
            </span>
          </div>
        )}
        {/* school */}
        {user.school && (
          <div className="flex items-center gap-2">
            <Image src="/school.png" alt="" width={16} height={16} />
            <span>
              Went to <b>{user.school}</b>
            </span>
          </div>
        )}
        {/* work */}
        {user.work && (
          <div className="flex items-center gap-2">
            <Image src="/work.png" alt="" width={16} height={16} />
            <span>
              Works at <b>{user.work}</b>
            </span>
          </div>
        )}
        {/* website */}
        <div className="flex items-center justify-between flex-wrap">
          {user.website && (
            <div className="flex gap-1 items-center">
              <Image src="/link.png" alt="" width={16} height={16} />
              <Link href={user.website} className="text-blue-500 font-medium">
                {user.website}
              </Link>
            </div>
          )}
          <div className="flex gap-1 items-center">
            <Image src="/date.png" alt="" width={16} height={16} />
            <span>Joined {formattedDate}</span>
          </div>
        </div>

        {/* actions */}
        {currentUserId && currentUserId !== user.id && (
          <UserInfoCardInteraction
            userId={user.id}
            isUserBlocked={isActionUserBlocked}
            isFollowing={isActionFollowing}
            isFollowingSent={isActionFollowingSent}
          />
        )}
      </div>
    </div>
  );
};

export default UserInfoCard;
