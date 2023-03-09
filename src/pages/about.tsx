import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";
import { LightLayout } from "../components/layouts/LightLayout";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <>
      <h1>About Page</h1>

      <h2 className={"title"}>
        Ir a <Link href="/">Home</Link>
      </h2>

      <div className={"center"}>
        <Image
          className={"logo"}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={"thirteen"}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>
      <div className={"description"}>
        <p>
          Get started by editing&nbsp;
          <code className={"code"}>src/pages/about.jsx</code>
        </p>
      </div>
    </>
  );
}

About.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <LightLayout>{page}</LightLayout>
    </MainLayout>
  );
};
