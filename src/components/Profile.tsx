import React from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import CakeIcon from "@mui/icons-material/Cake";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Separator } from "./ui/separator";
import Nav from "./Nav";

function Profile() {
  return (
    <div className="mt-28 px-20 ">
      <div className="flex gap-2 font-bold mb-2">
        <h2>NANYONGA RAHMAH </h2>
        <VerifiedIcon />
      </div>
      <div className="font-semibold text-[1rem] mb-2">
      Creative coder with unyielding curiosity.
      </div>

     <div className="flex my-2 gap-2 ">
       <span className="text-[.8rem] font-bold">Passionate Software Engineer</span>
       <Separator orientation="vertical" />

       <span className="text-[.8rem] font-bold">Frontend Web Developer</span>
       <Separator orientation="vertical" />

       <span className="text-[.8rem] font-bold">Upcoming Backend Developer</span>
     </div>
      <div className="flex gap-2 text-gray-400">
        <p className="flex gap-1">
          <FmdGoodIcon />
          Kampala ,Uganda
        </p>
        <p className="flex gap-1">
          <CakeIcon/>
          January 17th
        </p>
        <p className="flex gap-1">
          <CalendarMonthIcon  />
          Kampala ,Uganda
        </p>
      </div>
      <div className="flex gap-4 my-2">
        <p className="flex gap-1">
          <span className="font-bold">2+</span>Years of experience
        </p>
        <p className="flex gap-1">
          <span className="font-bold">5+</span>Projects Done
        </p>
        <p className="flex gap-1">
          <span className="font-bold">5+</span>Clients
        </p>
      </div>
  
    </div>
  );
}

export default Profile;
