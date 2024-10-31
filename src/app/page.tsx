import dynamic from "next/dynamic";
import { ComponentType, Suspense } from "react";

const MainPage: ComponentType = dynamic(
  () => import("@/components/organisms/pages/MainPage"),
  {
    ssr: true,
  }
);

const Page = () => {
  return (
    <Suspense>
      <MainPage />
    </Suspense>
  );
};

export default Page;
