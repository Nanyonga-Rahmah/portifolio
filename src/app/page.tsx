"use client";
import Image from "next/image";
import SocialHandles from "@/components/SocialHandles";
import FeedBack from "@/components/FeedBack";
import Search from "@/components/Search";
import Header from "@/components/Header";
import Profile from "@/components/Profile";

import About from "@/components/About";
import Skills from "@/components/Skills";

import { useState } from "react";
import Nav from "@/components/Nav";
import Experience from "@/components/Experience";
import Award from "@/components/Award";
import Education from "@/components/Education";

export default function Home() {
  const [activeLink, setActiveLink] = useState<string>("home");
  return (
    <>
      <div className="flex justify-between px-20 pt-5 gap-10 ">
        <div className="border border-gray-500 w-full border-t-0">
          <Header />
          <Profile />
          <Nav setActiveLink={setActiveLink} activeLink={activeLink} />
          {activeLink === "home" && <About />}
        
          {activeLink === "skills" && <Skills />}
          {activeLink === "experience" && <Experience />}
          {activeLink === "education" && <Education />}
          {activeLink === "awards" && <Award />}
        </div>
        <div className="flex justify-between  flex-col gap-5">
          <Search />
          <SocialHandles />
          <FeedBack />
        </div>
      </div>
    </>
  );
}
