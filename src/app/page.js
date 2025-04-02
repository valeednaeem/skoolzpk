import Image from "next/image";
import Link from "next/link";
import Hero from "./components/hero";
import Feature from "./components/feature";
import Course from "./components/course";
import Blog from "./components/blog";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-10 gap-8 sm:p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

            <div className="bg-gray-100 rounded-lg">
          <Hero />
            </div>

          <div className="mx-auto">
            <Feature />
          </div>

          <div className="mx-auto">
            <Course />
          </div>

          <div className="mx-auto">
            <Blog />
          </div>

      </main>
    </div>
  );
}
