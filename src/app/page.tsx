import { AddPost, Feed, LeftMenu, RightMenu, Stories } from "@/components";

const Homepage = () => {
  return (
    <div className="flex gap-6 py-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <Stories />
          <AddPost />
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%] xl:w-[20%]">
        <RightMenu userId="1" />
      </div>
    </div>
  );
};

export default Homepage;
