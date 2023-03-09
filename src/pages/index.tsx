import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <MainLayout>
      <h1>Home Page</h1>

      <h2 className='title'>
        {/* Ir a <a href="/about">About</a> */}
        Ir a <Link href="/about">About</Link>
      </h2>

      <div className={'center'}>
        <Image
          className={'logo'}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={'thirteen'}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>
      <div className={'description'}>
        <p>
          Get started by editing&nbsp;
          <code className={'code'}>src/pages/index.jsx</code>
        </p>
      </div>
    </MainLayout>
  );
}
