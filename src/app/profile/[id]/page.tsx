import Image from "next/image";

// components
import { Feed, LeftMenu, RightMenu } from "@/components";

const Profile = () => {
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
                src="https://images.pexels.com/photos/411994/pexels-photo-411994.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="cover image"
                fill
                className="rounded-md object-cover"
              />
              <Image
                src="https://images.pexels.com/photos/5256093/pexels-photo-5256093.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="profile image"
                width={128}
                height={125}
                className="w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white object-cover"
              />
            </div>

            <h1 className="mt-20 mb-4 text-2xl font-medium">Sony Dev</h1>

            <div className="flex items-center justify-center gap-12 mb-4">
              <div className="flex flex-col items-center">
                <span className="font-medium">123</span>
                <span className="text-sm">Posts</span>
              </div>

              <div className="flex flex-col items-center">
                <span className="font-medium">1.2K</span>
                <span className="text-sm">Followers</span>
              </div>

              <div className="flex flex-col items-center">
                <span className="font-medium">1.3K</span>
                <span className="text-sm">Following</span>
              </div>
            </div>
          </div>

          <Feed />
        </div>
      </div>

      <div className="hidden lg:block w-[30%] xl:w-[20%]">
        <RightMenu userId="1" />
      </div>
    </div>
  );
};

export default Profile;
