import React from "react";
import { Button } from "./ui/button";

function Header() {
  return (
    <div>
        <div className="p-5">
        <h3>Nanyonga Rahmah</h3>
        </div>
     
      <div className=" bg-hero-image bg-no-repeat bg-cover bg-center h-[200px] relative">

      </div>
      <div className="image w-[120px] h-[120px] bg-red-500 rounded-full absolute translate-x-16 -translate-y-12 "></div>

      <Button variant="outline" className="absolute translate-x-[620px] translate-y-5 bg-red-500 text-white rounded-lg">Let&apos;s Talk</Button>
    </div>
  );
}

export default Header;
