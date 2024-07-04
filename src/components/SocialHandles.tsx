"use client";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const socials = [
  {
    name: "github",
    url: "https://github.com/siddhant-deepsource",
    email: "nanyongarahmah891@gmail.com",
    icon: <GitHubIcon />,
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/siddhant-deepsource/",
    email: "nanyongarahmah891@gmail.com",
    icon: <LinkedInIcon />,
  },
  {
    name: "twitter",
    url: "https://twitter.com/siddhant_deepsource",
    email: "nanyongarahmah891@gmail.com",
    icon: <TwitterIcon />,
  },
  {
    name: "FrontEnd Mentor",
    url: "https://www.instagram.com/siddhant_deepsource/",
    email: "nanyongarahmah891@gmail.com",
    icon: <CodeIcon />,
  },
];
function SocialHandles() {
  return (
    <div className="flex  flex-col border-2 border-gray-400 rounded-[20px] drop-shadow-md pt-4 pb-5 px-10 max-w-[500px]   ">
      <h3 className="pb-3 font-bold text-xl">You might like</h3>
      {socials.map((social, index) => (
        <div key={index} className="flex justify-between my-2 ">
          <div className="flex justify-between gap-2">
            <div className="border rounded-full flex justify-center items-center w-[50px] h-[50px]">
              {social.icon}
            </div>
            <div>
              <div className="font-semibold capitalize">{social.name}</div>
              <div>{social.email}</div>
            </div>
          </div>
          <div>
            <Button
              variant="outline"
              className="text-white bg-red-600 border-none rounded-full font-bold"
            >
              Follow
            </Button>
          </div>
        </div>
      ))}
      <div>
        <h5 className="mt-3 font-medium">
          Keep up to date with the latest projects and adventures!
        </h5>
        <form action="">
          <div className="flex border-2 rounded-full overflow-hidden my-2">
            <Input
              className="border-none"
              type="email"
              placeholder="Enter your email"
            />
            <Button
              variant="outline"
              className="bg-red-600 text-white font-bold border-none rounded-s-none rounded-e-full"
            >
              Subscribe
            </Button>
          </div>
        </form>
        <div className="flex gap-2 mt-4">
          <EmojiFlagsIcon />
          <p className="font-md text-[16px]"> No Spam.Subscribe Now</p>
        </div>
      </div>
    </div>
  );
}

export default SocialHandles;
