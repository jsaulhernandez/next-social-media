import Image from "next/image";
import { notFound } from "next/navigation";

// components
import { Feed, LeftMenu, RightMenu } from "@/components";

// actions
import { getUserInfoByUserName, isUserBlocker } from "@/lib/actions";

const Profile = async ({ params }: { params: { username: string } }) => {
  const userInfo = await getUserInfoByUserName(params.username);
  if (!userInfo) return notFound();

  const isBlocked = await isUserBlocker(userInfo.id);
  if (isBlocked) return notFound();

  return (
    <div className="flex gap-6 py-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="profile" />
      </div>

      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full h-64 relative">
              <Image
                src={userInfo.cover ?? "/noCover.png"}
                alt="cover image"
                fill
                className="rounded-md object-cover"
              />
              <Image
                src={userInfo.avatar || "/noAvatar.png"}
                alt="profile image"
                width={128}
                height={125}
                className="w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white object-cover"
              />
            </div>

            <h1 className="mt-20 mb-4 text-2xl font-medium">
              {userInfo.name && userInfo.surname
                ? userInfo.name + " " + userInfo.surname
                : userInfo.username}
            </h1>

            <div className="flex items-center justify-center gap-12 mb-4">
              <div className="flex flex-col items-center">
                <span className="font-medium">
                  {userInfo.posts.length ?? 0}
                </span>
                <span className="text-sm">Posts</span>
              </div>

              <div className="flex flex-col items-center">
                <span className="font-medium">
                  {userInfo.followers.length ?? 0}K
                </span>
                <span className="text-sm">Followers</span>
              </div>

              <div className="flex flex-col items-center">
                <span className="font-medium">
                  {userInfo.followings.length ?? 0}K
                </span>
                <span className="text-sm">Following</span>
              </div>
            </div>
          </div>

          <Feed username={params.username} />
        </div>
      </div>

      <div className="hidden lg:block w-[30%] xl:w-[20%]">
        <RightMenu user={userInfo} />
      </div>
    </div>
  );
};

export default Profile;
