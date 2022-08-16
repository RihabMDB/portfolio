  import "./services.css";
  import web from "../assets/webdev.jpg"
 import mobile from "../assets/mobiledev.jpg"
  import fix from "../assets/fix.png"
  import ml from "../assets/ml.png";
    import educate from "../assets/educate.jpg";
  export default function Services() {
  return (

      <div className="md:w-3/2  sm:w-auto mx-auto  mt-24">
         <h2 class="text-center pb-24 lg:pb-8 text-4xl font-semibold uppercase text-rose sm:text-5xl lg:text-6xl">
            As a software engineer
        </h2> 
      <div className=" flex justify-around align-items items-center mb-24 lg:px-24 lg:pt-24">
        <div className="flex flex-col align-items items-center h-60 mx-5 bg-custumgray w-52 px-6 py-6  rounded-lg shadow-3xl shadow-custumviolet text-lg transation duration-300 
        hover:bg-backbox hover:-translate-y-6 cursor-pointer ">
        <img  className="rounded-full mt-2 h-16 w-16 px" src={web} alt="a" />
          <div className=" mt-4 text-center"> Developing WebSites
             </div>
        </div>

        <div className="flex flex-col align-items items-center h-60 mx-5 bg-custumgray w-52 px-6 py-6  rounded-lg shadow-3xl shadow-custumviolet text-lg transation duration-300 
        hover:bg-backbox hover:-translate-y-6 cursor-pointer ">
        <img  className="rounded-full mt-2 h-16 w-16 px" src={mobile} alt="a" />
          <div className=" mt-4 text-center"> Developing Mobile Applications</div>
        </div>

        <div className="flex flex-col align-items items-center h-60 mx-5 bg-custumgray w-52 px-6 py-6  rounded-lg shadow-3xl shadow-custumviolet text-lg transation duration-300 
        hover:bg-backbox hover:-translate-y-6 cursor-pointer ">
        <img  className="rounded-full mt-2 h-16 w-16 px" src={fix} alt="a" />
          <div className=" mt-4 text-center"> Scrap data from the Web</div>
        </div>

        
        <div className="flex flex-col align-items items-center h-60 mx-5 bg-custumgray w-52 px-6 py-6  rounded-lg shadow-3xl shadow-custumviolet text-lg transation duration-300 
        hover:bg-backbox hover:-translate-y-6 cursor-pointer ">
        <img  className="rounded-full mt-2 h-16 w-16 px" src={ml} alt="a" />
          <div className=" mt-4 text-center"> Developing ML Models</div>
        </div>
      </div> 
    </div>
    )}