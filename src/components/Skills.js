import React from "react";
import Title from "./Common/Title";
import aboutdata from "../data";
import python from "../assets/python.png";
import js from "../assets/js.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import reactlogo from "../assets/reactjs.png";
import tailwindlogo from "../assets/tailwind2.png";
import djangologo from "../assets/django2.jpg";
import androidlogo from "../assets/android.png";
import mysqllogo from "../assets/mysql.png";
import springlogo from "../assets/spring.png";
import postgreslogo from "../assets/postgresql2.png";
import java from "../assets/java.png";
import figma from "../assets/figma.png";
import git from "../assets/git.png";
import ml from "../assets/ml.png";
export default function Skills() {

    return (
  <>
   <div class="container py-16 md:py-20" id="skills">
  <h2 class="text-center font-header text-4xl font-semibold uppercase text-backcolor sm:text-5xl lg:text-6xl">
    And Here Are <span className="text-rose"> My Skills</span>
  </h2>
 
 <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 w-full px-8 mt-16">
  
   <div class="relative mx-auto "> 
    <div class="p-6 flex flex-col items-center text-center group ">
        <div className="shadow-lg shadow-gray-200 rounded-lg p-4 transition ease-in-out delay-150
        hover:-translate-y-1 hover:scale-110 hover:shadow-none duration-300 ">
        <img src={js} class="w-24 h-24 cursor-pointer "/></div>
                <p class="text-xl font-medium text-slate-700 mt-3">JavaScript </p>
    </div>
</div>

 <div class="relative mx-auto "> 
    <div class="p-6 flex flex-col items-center text-center group ">
        <div className="shadow-lg shadow-gray-200 rounded-lg p-4 transition ease-in-out delay-150
        hover:-translate-y-1 hover:scale-110 hover:shadow-none duration-300 ">
        <img src={html} class="w-24 h-24 cursor-pointer "/></div>
                <p class="text-xl font-medium text-slate-700 mt-3">HTML </p>
    </div>
</div>

 <div class="relative mx-auto "> 
    <div class="p-6 flex flex-col items-center text-center group ">
        <div className="shadow-lg shadow-gray-200 rounded-lg p-4 transition ease-in-out delay-150
        hover:-translate-y-1 hover:scale-110 hover:shadow-none duration-300 ">
        <img src={css} class="w-24 h-24 cursor-pointer "/></div>
                <p class="text-xl font-medium text-slate-700 mt-3">CSS </p>
    </div>
</div>

<div class="relative mx-auto "> 
    <div class="p-6 flex flex-col items-center text-center group ">
        <div className="shadow-lg shadow-gray-200 rounded-lg p-4 transition ease-in-out delay-150
        hover:-translate-y-1 hover:scale-110 hover:shadow-none duration-300 ">
        <img src={tailwindlogo} class="w-24 h-24 cursor-pointer "/></div>
                <p class="text-xl font-medium text-slate-700 mt-3">Tailwind </p>
    </div>
</div>

 <div class="relative mx-auto "> 
    <div class="p-6 flex flex-col items-center text-center group ">
        <div className="shadow-lg shadow-gray-200 rounded-lg p-4 transition ease-in-out delay-150
        hover:-translate-y-1 hover:scale-110 hover:shadow-none duration-300 ">
        <img src={reactlogo} class="w-24 h-24 cursor-pointer "/></div>
                <p class="text-xl font-medium text-slate-700 mt-3">ReactJs </p>
    </div>
</div>


 <div class="relative mx-auto "> 
    <div class="p-6 flex flex-col items-center text-center group ">
        <div className="shadow-lg shadow-gray-200 rounded-lg p-4 transition ease-in-out delay-150
        hover:-translate-y-1 hover:scale-110 hover:shadow-none duration-300 ">
        <img src={python} class="w-24 h-24 cursor-pointer "/></div>
                <p class="text-xl font-medium text-slate-700 mt-3">Python </p>
    </div>
</div>

 <div class="relative mx-auto "> 
    <div class="p-6 flex flex-col items-center text-center group ">
        <div className="shadow-lg shadow-gray-200 rounded-lg p-4 transition ease-in-out delay-150
        hover:-translate-y-1 hover:scale-110 hover:shadow-none duration-300 ">
        <img src={djangologo} class="w-24 h-24 cursor-pointer "/></div>
                <p class="text-xl font-medium text-slate-700 mt-3">Django </p>
    </div>
</div>

<div class="relative mx-auto "> 
    <div class="p-6 flex flex-col items-center text-center group ">
        <div className="shadow-lg shadow-gray-200 rounded-lg p-4 transition ease-in-out delay-150
        hover:-translate-y-1 hover:scale-110 hover:shadow-none duration-300 ">
        <img src={java} class="w-24 h-24 cursor-pointer "/></div>
                <p class="text-xl font-medium text-slate-700 mt-3">Java </p>
    </div>
</div>

 <div class="relative mx-auto "> 
    <div class="p-6 flex flex-col items-center text-center group ">
        <div className="shadow-lg shadow-gray-200 rounded-lg p-4 transition ease-in-out delay-150
        hover:-translate-y-1 hover:scale-110 hover:shadow-none duration-300 ">
        <img src={androidlogo} class="w-24 h-24 cursor-pointer "/></div>
                <p class="text-xl font-medium text-slate-700 mt-3">Android </p>
    </div>
</div>

 <div class="relative mx-auto "> 
    <div class="p-6 flex flex-col items-center text-center group ">
        <div className="shadow-lg shadow-gray-200 rounded-lg p-4 transition ease-in-out delay-150
        hover:-translate-y-1 hover:scale-110 hover:shadow-none duration-300 ">
        <img src={springlogo} class="w-24 h-24 cursor-pointer "/></div>
                <p class="text-xl font-medium text-slate-700 mt-3">Spring Boot </p>
    </div>
</div>

 <div class="relative mx-auto "> 
    <div class="p-6 flex flex-col items-center text-center group ">
        <div className="shadow-lg shadow-gray-200 rounded-lg p-4 transition ease-in-out delay-150
        hover:-translate-y-1 hover:scale-110 hover:shadow-none duration-300 ">
        <img src={mysqllogo} class="w-24 h-24 cursor-pointer "/></div>
                <p class="text-xl font-medium text-slate-700 mt-3">Mysql </p>
    </div>
</div>

<div class="relative mx-auto "> 
    <div class="p-6 flex flex-col items-center text-center group ">
        <div className="shadow-lg shadow-gray-200 rounded-lg p-4 transition ease-in-out delay-150
        hover:-translate-y-1 hover:scale-110 hover:shadow-none duration-300 ">
        <img src={postgreslogo} class="w-24 h-24 cursor-pointer "/></div>
                <p class="text-xl font-medium text-slate-700 mt-3">PostgreSQL </p>
    </div>
</div>

   <div class="relative mx-auto "> 
    <div class="p-6 flex flex-col items-center text-center group ">
        <div className="shadow-lg shadow-gray-200 rounded-lg p-4 transition ease-in-out delay-150
        hover:-translate-y-1 hover:scale-110 hover:shadow-none duration-300 ">
        <img src={git} class="w-24 h-24 cursor-pointer "/></div>
                <p class="text-xl font-medium text-slate-700 mt-3">Git </p>
    </div>
</div>

   <div class="relative mx-auto "> 
    <div class="p-6 flex flex-col items-center text-center group ">
        <div className="shadow-lg shadow-gray-200 rounded-lg p-4 transition ease-in-out delay-150
        hover:-translate-y-1 hover:scale-110 hover:shadow-none duration-300 ">
        <img src={figma} class="w-24 h-24 cursor-pointer "/></div>
                <p class="text-xl font-medium text-slate-700 mt-3">Figma </p>
    </div>
</div>

   <div class="relative mx-auto "> 
    <div class="p-6 flex flex-col items-center text-center group ">
        <div className="shadow-lg shadow-gray-200 rounded-lg p-4 transition ease-in-out delay-150
        hover:-translate-y-1 hover:scale-110 hover:shadow-none duration-300 ">
        <img src={ml} class="w-24 h-24 cursor-pointer "/></div>
                <p class="text-xl font-medium text-slate-700 mt-3">Machine Learning </p>
    </div>
</div>
   </div>

    </div>
  </>
   )
}