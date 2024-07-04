import React from "react";
import { Input } from "./ui/input";
import Image from "next/image";

function Search() {
  return (
    <div className="w-full border-2 border-gray-400  shadow-md flex rounded-full overflow-hidden px-4 py-1 ">
        <Image src="/images/search.svg" width={25} height={25} alt="search" />
     <Input type="search" className="border-none focus:right-0 outline-none"/>
    </div>
  );
}

export default Search;
