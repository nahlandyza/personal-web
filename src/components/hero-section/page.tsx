"use client";
import Link from "next/link";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { HiDownload } from "react-icons/hi";

export default function HeroSectionPage() {
  return (
    <section id="home" className="min-h-screen bg-[#1E1E1E] relative pt-30">
      <div className="h-fit w-fit grid-cols-5 my-auto mx-auto">
        <div className="col-span-4">
          {/* div for home content */}
          <div className="relative w-max[1100px] grid place-items-center">
            <h2 className="text-7xl font-semibold text-[#B0B0B0]">
              Hi, I`m <span className="text-[#FF69B4]">Nahla</span>
            </h2>
            <p className="text-[#B0B0B0] h-fit text-3xl font-semibold mt-7">
              Full-Stack <span className="text-[#FF69B4] ">Web Developer</span>
            </p>
            <p className="text-[#F5F5F5] text-[18px] py-9">
              Transforming ideas into scalable web solutions with clean code and
              seamless user experiences.
            </p>
          </div>
        </div>
        <div className="col-span-1 mx-auto mt-3">
          <p className="text-[#F5F5F5] text-[18px] w-fit flex gap-0.5 mx-auto">
            <CiLocationOn className="flex" size={18} />
            Jakarta, Indonesia
          </p>

          <div className="flex gap-9 mt-13 place-items-center mx-auto w-fit">
            <Link
              href="https://www.linkedin.com"
              className="text-[#FF69B4] hover:text-pink-300 transition-colors"
            >
              <FaLinkedinIn size={32} />
            </Link>
            <Link
              href="https://github.com/nahlandyza"
              className="text-[#FF69B4] hover:text-pink-300 transition-colors"
            >
              <FaGithub size={32} />
            </Link>
            <Link
              href="Dummy-CV.pdf"
              download
              className="bg-[#FF69B4] hover:bg-pink-300 text-black font-semibold py-2 px-6 rounded-xl flex items-center gap-2 transition-all duration-300"
            >
              <HiDownload size={20} />
              Download CV
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
