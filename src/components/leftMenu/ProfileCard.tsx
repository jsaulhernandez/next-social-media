import Image from "next/image";

const ProfileCard = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
      <div className="h-20 relative">
        <Image
          src="https://images.pexels.com/photos/256152/pexels-photo-256152.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="cover image"
          fill
          className="rounded-md object-cover"
        />
        <Image
          src="https://images.pexels.com/photos/975012/pexels-photo-975012.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="profile image"
          width={48}
          height={48}
          className="rounded-full object-cover w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-white z-10"
        />
      </div>

      <div className="flex flex-col gap-2 items-center">
        <span className="font-semibold">Sony</span>

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

          <span className="text-sm text-gray-500">500 Followers</span>
        </div>

        <button className="bg-blue-500 text-white text-xs p-2 rounded-md">
          My Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
