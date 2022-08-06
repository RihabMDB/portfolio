import engitalents from "../assets/engitalents.png";
import yallachayaani from "../assets/projects/yallachayaani.jpg";
import nicetek from "../assets/projects/nicetek.png";
export default function Works() {
    return(

<div className="py-14" id="work"> 
        <h2 class="text-center font-header text-4xl font-semibold uppercase text-backcolor sm:text-5xl lg:text-6xl">
    My Latest <span className="text-rose"> Projects</span>
  </h2>

    <div className="flex flex-col items-center pt-24  md:flex-row">

            <div className="relative md:w-[450px] w-[350px] mx-24 h-[250px] rounded-lg ">
                <img  alt="t"  className="h-56 w-[450px]"  layout="fill"  objectFit="contain"  src={engitalents}/>
            </div>
            <div className="ml-2 md:ml-20">
                <h3 className="text-3xl font-semibold text-gray-500">
                    Engitalents
                </h3>
                <p className="text-textDark mt-3 md:max-w-[700px]">
                  Implementation of a candidate management application that based on a matching and recommandations system
                </p>
                <p className="mt-2">Technologies :
                    <span  className=" bg-gray-300 text-backcolor rounded-full px-3 py-1 mx-2 ">
                        Django
                    </span>
                    
                    <span  className=" bg-gray-300 text-backcolor rounded-full px-3 py-1 mt-2 mr-2">
                        ReactJS
                    </span>
                    
                    <span  className=" bg-gray-300 text-backcolor  rounded-full px-3 py-1 mt-2 mr-2">
                        ML
                    </span>
                    <span  className="bg-gray-300 text-backcolor  rounded-full px-3 py-1 mt-2 mr-2">
                        Tensorflow
                    </span>
             </p>
                
            </div>
        </div>
       
           <div className="flex flex-col items-center pt-24  md:flex-row">
            <div className="relative md:w-[450px] w-[350px] mx-24 h-[250px] rounded-lg ">
                <img  alt="t"  className="h-48 w-[450px]"  layout="fill"  objectFit="contain"  src={nicetek}/>
            </div>

            <div className="ml-2 md:ml-20">
                <h3 className="text-3xl font-semibold text-gray-500">
                    Nicetek
                </h3>
                <p className="text-textDark mt-3 md:max-w-[700px]">
                  Nicetek is an android application of online education platform. Offers its users many services such as : the purchase of templates, participation in training, test their level in such a field with quiz, or also ask questions to the administrator.
                   </p>
                <p className="mt-2">Technologies :
                    <span  className="bg-gray-300 text-backcolor rounded-full px-3 py-1  mt-2 mx-2">
                        Android
                    </span>
                    
                    <span  className="bg-gray-300 text-backcolor  rounded-full px-3 py-1 mt-2 mr-2">
                       Java
                    </span>
                    
                    <span  className="bg-gray-300 text-backcolor  rounded-full px-3 py-1 mt-2 mr-2">
                        SpringBoot
                    </span>
                    <span  className="bg-gray-300 text-backcolor rounded-full px-3 py-1 mt-2 mr-2">
                        Mysql
                    </span>
             </p>
                <div className="flex mt-4 space-x-4">
                    
                        <a className="flex items-center px-5 py-2 duration-100 border-2 rounded-lg fill-current stroke-current hover:bg-neon hover:border-neon hover:backdrop-blur-lg border-neon group-hover:text-white hover:text-white text-neon"
                            href="https://github.com/RihabMDB/NicetekMobileApp"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <i />

                            <span className="ml-2">GitHub</span>
                        </a>
                  
                </div>
            </div>
        </div>

         <div className="flex flex-col items-center pt-24 md:flex-row">
            <div className="relative md:w-[450px] w-[350px] mx-24 h-[250px] rounded-lg ">
                <img  alt="t"  className="h-48 w-[450px]"  layout="fill"  objectFit="contain"  src={yallachayaani}/>
            </div>

            <div className="ml-2 md:ml-20">
                <h3 className="text-3xl font-semibold text-gray-500">
                    YallaChayaani
                </h3>
                <p className="text-textDark mt-3 md:max-w-[700px]">
                 Android carpooling application in Tunisia  </p>
                <p className="mt-2">Technologies :
                    <span  className="bg-gray-300 text-backcolor  rounded-full px-3 py-1  mx-2">
                        Android
                    </span>
                    
                    <span  className="bg-gray-300 text-backcolor  rounded-full px-3 py-1 mt-2 mr-2">
                       Java
                    </span>
                    
                    <span  className="bg-gray-300 text-backcolor  rounded-full px-3 py-1 mt-2 mr-2">
                        SpringBoot
                    </span>
                    <span  className="bg-gray-300 text-backcolor  rounded-full px-3 py-1 mt-2 mr-2">
                        Mysql
                    </span>
             </p>
                <div className="flex mt-4 space-x-4">
                    
                        <a
                            className="flex items-center px-5 py-2 duration-100 border-2 rounded-lg fill-current stroke-current hover:bg-neon hover:border-neon hover:backdrop-blur-lg border-neon group-hover:text-white hover:text-white text-neon"
                            href="https://github.com/RihabMDB/YallaChayaani"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <i />

                            <span className="ml-2">GitHub</span>
                        </a>
                  
                </div>
            </div>
        </div>

</div>
    )
}