import Link from "next/link";
import Image from "next/image";
import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import profile from "@/app/assets/profile.jpg";
<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
</style>

export default function Home() {
  return (
    <section
      className="flex flex-col items-center justify-center bg-gray-100 
    text-center px-4 py-[10px] sm:py-[82px] lg:py-[94px]  h-auto overflow-hidden font-[open-sans]"
    >
      {/* Intro Section */}
      <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 
      sm:space-x-10">
        {/* Text Content */}
        <div className="text-center sm:text-left">
          <h1 className="text-2xl mt-2 sm:mt-0 sm:text-4xl font-bold mb-2 sm:mb-4">
            Hi, I&apos;m Areeba Sheikh
          </h1>
          <h2 className="text-lg sm:text-2xl text-blue-500 mb-2 sm:mb-4 font-semibold">
            Front-end Developer
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            I&apos;m passionate about building web applications <br />
            that make a difference, using HTML, CSS, JavaScript, React, and
            Next.js.
          </p>
          <div
            className="flex flex-wrap justify-center sm:justify-start mt-3 space-x-4 
          text-3xl"
          >
            <Link href='#' className="p-3 rounded-full bg-orange-800 text-white">
            <FaHtml5 />
            </Link>
            <Link href='#' className="p-3 rounded-full bg-blue-500 text-white">
              <SiCss3 />
            </Link>
            <Link href='#' className="p-3 rounded-full bg-yellow-400 text-white">
              <TbBrandJavascript />
            </Link>
            <Link href='#' className="p-3 rounded-full bg-gray-950 text-sky-400">
              <FaReact />
            </Link>
            <Link href='#' className="p-3 rounded-full bg-gray-950 text-white">
              <RiNextjsFill />
            </Link>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center">
          <Image
            src={profile}
            alt="Areeba Sheikh"
            width={200}
            height={200}
            priority
            className="border-4 border-gray-800 rounded-full
             transform transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>

      {/* Call-to-Action Buttons */}
      <div className="flex flex-wrap justify-center sm:justify-start mt-4 space-x-3">
        <Link
          href="/contact"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg text-base sm:text-base
           lg:text-lg
           hover:bg-blue-700 transition"
        >
          Hire Me
        </Link>
        <Link
          href="/contact"
          className="bg-gray-600 text-white px-4 py-2 rounded-lg text-base sm:text-base 
          lg:text-lg hover:bg-gray-800 transition"
        >
          Let&apos;s Talk
        </Link>
      </div>
    </section>
  );
}

