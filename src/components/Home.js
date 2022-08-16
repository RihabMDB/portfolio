import photo from "../assets/photo.png";

export default function Home() {
  return (
    <>
      <div class="container relative z-30 ">
        <div class="flex flex-col items-center justify-center lg:flex-row pt-6 pb-24 sm:py-56 sm:pb-24 lg:py-56">

          <div class="pt-8 sm:pt-10 lg:pl-12 lg:pt-0">
            <h1 class=" text-white inline-block max-w-2xl lg:max-w-4xl sm:mx-4 w-auto relative text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold ">
              Hi 👋  I'm <span className="text-rose"> Rihab </span>, <br /> a Software Engineer
            </h1>
            <div class="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
              <div class="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                <p class="font-body text-lg uppercase text-white">
                  Let's connect
                </p>
                <div class="hidden sm:block">
                  <i class="bx bx-chevron-right text-3xl text-yellow"></i>
                </div>
              </div>
              <div class="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                <a href="https://www.linkedin.com/in/rihabmeddeb/" >
                  <i class="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
                </a>
                <a href="https://github.com/RihabMDB" class="pl-4">
                  <i class="bx bxl-github text-2xl text-white hover:text-yellow"></i>
                </a>
                <a href="#contact" class="pl-4">
                  <i class="bx bxl-google text-2xl text-white hover:text-yellow"></i>
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
