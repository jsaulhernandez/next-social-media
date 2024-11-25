import { Suspense } from "react";

import { RightMenuProps } from "@/data/types";

// components
import {
  Birthdays,
  Ad,
  FriendRequests,
  UserInfoCard,
  UserMediaCard,
} from "../";

const RightMenu = ({ user }: RightMenuProps) => {
  return (
    <div className="flex flex-col gap-6">
      {user ? (
        <>
          <Suspense fallback="Loading...">
            <UserInfoCard user={user} />
          </Suspense>
          <Suspense fallback="Loading...">
            <UserMediaCard user={user} />
          </Suspense>
        </>
      ) : null}

      <FriendRequests />
      <Birthdays />
      <Ad size="md" />
    </div>
  );
};

export default RightMenu;
