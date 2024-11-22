import Image from "next/image";
import Link from "next/link";

const UserInfoCard = ({ userId }: { userId: string }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* top */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Information</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>

      {/* bottom */}
      <div className="flex flex-col gap-4 text-gray-500">
        {/* user info */}
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">Sony</span>
          <span className="text-sm">@jh58</span>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe vitae
          tempora fugit porro esse, sed suscipit veritatis.
        </p>

        {/* live */}
        <div className="flex items-center gap-2">
          <Image src="/map.png" alt="" width={16} height={16} />
          <span>
            Living in San Pedro Perulapan
            <b />
          </span>
        </div>

        {/* school */}
        <div className="flex items-center gap-2">
          <Image src="/school.png" alt="" width={16} height={16} />
          <span>
            Went to <b>Universidad de El Salvador</b>
          </span>
        </div>

        {/* work */}
        <div className="flex items-center gap-2">
          <Image src="/work.png" alt="" width={16} height={16} />
          <span>
            Works at <b>Facebook</b>
          </span>
        </div>

        {/* website */}
        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <Image src="/link.png" alt="" width={16} height={16} />
            <Link href="/" className="text-blue-500 font-medium">
              sony.dev
            </Link>
          </div>
          <div className="flex gap-1 items-center">
            <Image src="/date.png" alt="" width={16} height={16} />
            <span>Joined October 2022</span>
          </div>
        </div>

        {/* actions */}
        <button className="w-full bg-blue-500 text-white text-sm rounded-md p-2">
          Follow User
        </button>
        <span className="text-red-400 text-xs cursor-pointer self-end">
          Block User
        </span>
      </div>
    </div>
  );
};

export default UserInfoCard;
