import { RightMenuProps } from "@/data/types";

import { Birthdays, Ad, FriendRequests } from "../";

const RightMenu = ({ userId }: RightMenuProps) => {
  return (
    <div className="flex flex-col gap-6">
      <FriendRequests />
      <Birthdays />
      <Ad size="md" />
    </div>
  );
};

export default RightMenu;
