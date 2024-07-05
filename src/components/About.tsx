import React from "react";
import Typed from 'typed.js'
import{useRef,useEffect} from'react'

function About() {

    const el=useRef(null)


    useEffect(()=>{

        const typed=new Typed(el.current,{
            strings:["a passionate software engineer who dances through the code like a maestro conducting a symphony."],
            typeSpeed:40,
            startDelay:1000,
            loop:false,
            backSpeed:60,
            backDelay:2000,
            showCursor:false,
        })
    })
  return (
    <div className="px-20 pt-5">
      <h3 className="font-semibold text-[1rem]">
        Meet Nanyonga Rahmah, <span ref={el} className="text-red-600"></span>.
      </h3>
      <p className="py-4">
        In the ever-evolving world of tech,I am the superhero we all need –
        armed with a keyboard, a witty sense of humor, and an insatiable
        curiosity for all things code. So, whether it&apos;s the front, the back, or
        somewhere in between, I am  ready to code my way into the hearts (and
        browsers) of users everywhere!
      </p>
    </div>
  );
}

export default About;
