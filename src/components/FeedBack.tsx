"use client";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";



import PersonIcon from '@mui/icons-material/Person';
import { Button } from "./ui/button";
import { DialogDemo } from "./FeedBackDialog";


const feeds = [
  {
    name: "Rahmah N",
    message: "This is cool",
    date: "04 Aug 2021",
  
  },
  {
    name: "Akram L",
    message: "This is fab",
    date:"08 Jan 2024",
   
  },
  {
    name: "Rahmah N",
    message: "This is cool",
    date: "04 Aug 2021",
   
  },
  {
    name: "Akram L",
    date: "07 Dec 2024",
    message: "Lets connect"
  
  },
  {
    name: "Rahmah N",
    message: "This is cool",
    date: "04 Aug 2021"
 
  },
  {
    name: "Akram L",
    date: "07 Dec 2024",
    message: "Lets connect"
  
  },
];
function FeedBack() {
  return (
    <div className="flex  flex-col border-2 border-gray-400 rounded-[20px] drop-shadow-md pt-4 pb-5 px-10 max-w-[500px]   ">
        <div className="flex justify-between">
        <h3 className="pb-3 font-bold text-xl">Leave Feedback</h3> 
        <DialogDemo/>
        

        </div>
      
      {feeds.map((feed, index) => (
        <div key={index} className="flex justify-between my-4 ">
          <div className="flex justify-between gap-2">
            <div className="border rounded-full flex justify-center items-center w-[50px] h-[50px]">
            <PersonIcon />
            </div>
            <div>
              <div className="font-semibold capitalize">{feed.name}</div>
              <div className="text-xl font-medium">{feed.message}</div>
            </div>
          </div>
          <div>
         <p>{feed.date}</p>
          </div>
        </div>
      ))}
     
    </div>
  );
}

export default FeedBack;
