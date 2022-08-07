import photo from "../assets/photo.png";
import React from "react";
export default function About() {

    return (
    <>
    <div class="container relative z-30  sm:pb-48  lg:pb-48 mx-15 sm:px-10 sm:pt-24 pt-48" id="about">
          <div class="pt-10 sm:pt-15 lg:pl-12 lg:pt-0 ">
            
        <div class=" flex flex-col lg:flex-row">
            <div>
        <h1 class=" text-center font-bold text-4xl text-backcolor sm:text-left sm:text-5xl md:text-6xl mb-16 lg:pl-24">
              Let's talk about <span className="text-rose">Me</span> 
            </h1>
            <div class=" pt-5 sm:flex-row sm:pt-5 lg:justify-start lg:ml-24">
            <div class="absolute -ml-0.5 w-0.5 h-48 bg-rose ml-1"></div>
                <p class="font-body text-lg text-gray-600 pl-5">
               I am a software engineer who loves to develop beautiful app and websites. 
               Also i enjoy solving complex problems. 
               One of the things that distinguish me from other engineers is that I am able to remain calm and focused no matter how difficult the task. I always try to stay positive and find a way out. 
               I am sure that everything happens for a reason and that any mistake can be fixed.
               I am a quick learner and constantly improve my skills not only in professional but also in multiple other fields. </p>
                <div class="hidden sm:block px-24">
                
                </div>
              
              <div class="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
               
                
           </div>
            </div> 
            </div> 
              <img src={photo} class="h-58 w-58  lg:pl-48 sm:pl-4 sm:pb-8 ml-12 " alt="author" />
              
          </div>
        </div>
      </div>
    </>)
}



