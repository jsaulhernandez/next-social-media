import Image from "next/image";

// components
import { StoryList } from "./";
// actions
import { getStoriesByCurrentUserId, getUserClerkId } from "@/lib/actions";

const Stories = async () => {
  const currentUserId = await getUserClerkId();
  const stories = await getStoriesByCurrentUserId();
  if (!stories || !currentUserId) return null;

  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide">
      <div className="flex gap-8 w-max">
        {/* stories */}
        <StoryList stories={stories} userId={currentUserId} />
      </div>
    </div>
  );
};

export default Stories;
