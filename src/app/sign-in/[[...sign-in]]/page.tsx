import { SignIn } from "@clerk/nextjs";

const Page = () => {
  return (
    <div className="h-[calc(100vh-96px)] flex items-center justify-center">
      <SignIn />
    </div>
  );
};

export default Page;
