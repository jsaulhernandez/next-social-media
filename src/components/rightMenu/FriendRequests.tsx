import Image from "next/image";
import Link from "next/link";

// components
import { FriendRequestList } from "@/components";

// actions
import { getFollowRequest } from "@/lib/actions";

const FriendRequests = async () => {
  const requests = await getFollowRequest();

  if (requests.length === 0) return null;

  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* top */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Friend Requests</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>

      {/* user */}

      <FriendRequestList requests={requests} />
    </div>
  );
};

export default FriendRequests;
