import Image from "next/image";
import Link from "next/link";

// actions
import { getUserInfoById } from "@/lib/actions";

const ProfileCard = async () => {
  const userInfo = await getUserInfoById();
  if (!userInfo) return null;

  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
      <div className="h-20 relative">
        <Image
          src={userInfo?.cover ?? "/noCover.png"}
          alt="cover image"
          fill
          className="rounded-md object-cover"
        />
        <Image
          src={userInfo?.avatar ?? "/noAvatar.png"}
          alt="profile image"
          width={48}
          height={48}
          className="rounded-full object-cover w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-white z-10"
        />
      </div>

      <div className="flex flex-col gap-2 items-center">
        <span className="font-semibold">
          {userInfo?.name && userInfo?.surname
            ? userInfo.name + " " + userInfo.surname
            : userInfo?.username}
        </span>

        <div className="flex items-center gap-4">
          <div className="flex">
            <Image
              src="https://images.pexels.com/photos/2920398/pexels-photo-2920398.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="image"
              width={12}
              height={12}
              className="rounded-full object-cover w-3 h-3"
            />
            <Image
              src="https://images.pexels.com/photos/2920398/pexels-photo-2920398.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="image"
              width={12}
              height={12}
              className="rounded-full object-cover w-3 h-3"
            />
            <Image
              src="https://images.pexels.com/photos/2920398/pexels-photo-2920398.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="image"
              width={12}
              height={12}
              className="rounded-full object-cover w-3 h-3"
            />
          </div>

          <span className="text-sm text-gray-500">
            {userInfo?.followers.length ?? 0} Followers
          </span>
        </div>

        <Link href={`/profile/${userInfo!.username}`}>
          <button className="bg-blue-500 text-white text-xs p-2 rounded-md">
            My Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
