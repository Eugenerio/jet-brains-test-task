import dynamic from "next/dynamic";
import { ComponentType, Suspense } from "react";

const DiscussionPage: ComponentType = dynamic(
  () => import("@/components/organisms/pages/DiscussionPage"),
  {
    ssr: true,
  }
);

const Page = () => {
  return (
    <Suspense>
      <DiscussionPage />
    </Suspense>
  );
};

export default Page;
