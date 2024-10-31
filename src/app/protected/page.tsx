import dynamic from "next/dynamic";
import { ComponentType, Suspense } from "react";

const IssuesPage: ComponentType = dynamic(
  () => import("@/components/organisms/pages/IssuesPage"),
  {
    ssr: true,
  }
);

const Page = () => {
  return (
    <Suspense>
      <IssuesPage />
    </Suspense>
  );
};

export default Page;
