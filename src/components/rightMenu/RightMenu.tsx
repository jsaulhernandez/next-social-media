import { RightMenuProps } from "@/data/types";

// components
import {
  Birthdays,
  Ad,
  FriendRequests,
  UserInfoCard,
  UserMediaCard,
} from "../";

const RightMenu = ({ userId }: RightMenuProps) => {
  return (
    <div className="flex flex-col gap-6">
      {userId ? (
        <>
          <UserInfoCard userId={userId} />
          <UserMediaCard userId={userId} />
        </>
      ) : null}

      <FriendRequests />
      <Birthdays />
      <Ad size="md" />
    </div>
  );
};

export default RightMenu;
