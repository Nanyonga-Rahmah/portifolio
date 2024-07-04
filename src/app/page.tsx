import Image from "next/image";
import SocialHandles from "@/components/SocialHandles";
import FeedBack from "@/components/FeedBack";
import Search from "@/components/Search";

export default function Home() {
  return <>
  <div className="flex justify-between px-20 pt-5 ">
  <div>


  </div>
  <div className="flex justify-between  flex-col gap-5">
<Search/>
<SocialHandles/>
<FeedBack/>
  </div>
  </div>
  
  </>;
}
