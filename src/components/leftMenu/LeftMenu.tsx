import Link from "next/link";
import Image from "next/image";

// components
import { Ad, ProfileCard } from "../";

const LeftMenu = ({ type = "home" }: { type: "home" | "profile" }) => {
  return (
    <div className="flex flex-col gap-6">
      {/* user profile */}
      {type === "home" && <ProfileCard />}

      {/* links */}
      <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col text-gray-500 gap-2">
        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg  hover:bg-slate-100"
        >
          <Image src="/posts.png" alt="post image" width={20} height={20} />
          <span>My Posts</span>
        </Link>

        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg  hover:bg-slate-100"
        >
          <Image src="/activity.png" alt="post image" width={20} height={20} />
          <span>Activity</span>
        </Link>

        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg  hover:bg-slate-100"
        >
          <Image src="/market.png" alt="post image" width={20} height={20} />
          <span>Marketplace</span>
        </Link>

        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg  hover:bg-slate-100"
        >
          <Image src="/events.png" alt="post image" width={20} height={20} />
          <span>Events</span>
        </Link>

        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg  hover:bg-slate-100"
        >
          <Image src="/albums.png" alt="post image" width={20} height={20} />
          <span>Albums</span>
        </Link>

        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg  hover:bg-slate-100"
        >
          <Image src="/videos.png" alt="post image" width={20} height={20} />
          <span>Videos</span>
        </Link>

        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg  hover:bg-slate-100"
        >
          <Image src="/news.png" alt="post image" width={20} height={20} />
          <span>News</span>
        </Link>

        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg  hover:bg-slate-100"
        >
          <Image src="/courses.png" alt="post image" width={20} height={20} />
          <span>Courses</span>
        </Link>

        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg  hover:bg-slate-100"
        >
          <Image src="/lists.png" alt="post image" width={20} height={20} />
          <span>Lists</span>
        </Link>

        <Link
          href="/"
          className="flex items-center gap-4 p-2 rounded-lg  hover:bg-slate-100"
        >
          <Image src="/settings.png" alt="post image" width={20} height={20} />
          <span>Settings</span>
        </Link>
      </div>

      {/* adds */}
      <Ad />
    </div>
  );
};

export default LeftMenu;
