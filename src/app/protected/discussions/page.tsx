"use client";

import dynamic from "next/dynamic";
import { ComponentType, Suspense } from "react";

const DiscussionPage: ComponentType = dynamic(
  () => import("@/components/organisms/pages/DiscussionPage")
);

const Page = () => {
  return (
    <Suspense>
      <DiscussionPage />
    </Suspense>
  );
};

export default Page;
