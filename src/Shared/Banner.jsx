import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Banner = () => {
  const [activeSlide, setActiveSlide] = useState(1); // Track current slide
  const totalSlides = 4; // Total number of slides

  // Auto slide effect with 3 seconds duration
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) =>
        prevSlide === totalSlides ? 1 : prevSlide + 1
      );
    }, 3000); // 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const banner = (
    <>
      <div className="my-5 py-5 rounded-lg">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl my-5 text-center text-[#FF007F] font-extrabold">
          <span className="text-slate-100">Wedding</span> Couple
        </h1>
        <p className="text-xs sm:text-sm lg:text-base xl:text-lg my-5 text-center text-white font-semibold">
          A wedding is a beautiful celebration that marks the union of two
          individuals embarking on a journey of lifelong companionship...
        </p>
        <Link
          to="/register"
          className="flex my-5 text-white hover:text-slate-100 bg-[#FF007F] hover:bg-[#33c7ec] transition-all duration-300 w-36 h-12 rounded-full mx-auto"
        >
          <button className="text-lg font-bold mx-auto pb-1"> Sign Up</button>
        </Link>
      </div>
    </>
  );

  return (
    <div>
      <div className="carousel min-h-screen w-full">
        {/** Slide 1 */}
        <div
          id="slide1"
          className={`carousel-item relative w-full bg-cover bg-[url('https://i.ibb.co.com/rqRNKGX/1.jpg')] backdrop-blur-md ${
            activeSlide === 1 ? "block" : "hidden"
          }`}
        >
          <div className="w-full h-full relative backdrop-blur-sm">
            <div className="w-full absolute z-10">
              <Navbar home={true}></Navbar>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href="#slide4"
                onClick={() => setActiveSlide(totalSlides)}
                className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center border-[1px] my-auto bg-slate-50"
              >
                ❮
              </a>
              <div className="w-3/5 text-white -z-50">{banner}</div>
              <a
                href="#slide2"
                onClick={() => setActiveSlide(2)}
                className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center border-[1px] my-auto bg-slate-50"
              >
                ❯
              </a>
            </div>
          </div>
        </div>

        {/** Slide 2 */}
        <div
          id="slide2"
          className={`carousel-item relative w-full bg-cover bg-[url('https://i.ibb.co.com/yM0J85X/2.jpg')] backdrop-blur-md ${
            activeSlide === 2 ? "block" : "hidden"
          }`}
        >
          <div className="w-full h-full relative backdrop-blur-sm">
            <div className="w-full absolute z-10">
              <Navbar home={true}></Navbar>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href="#slide1"
                onClick={() => setActiveSlide(1)}
                className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center border-[1px] my-auto bg-slate-50"
              >
                ❮
              </a>
              <div className="w-3/5 text-white -z-50">{banner}</div>
              <a
                href="#slide3"
                onClick={() => setActiveSlide(3)}
                className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center border-[1px] my-auto bg-slate-50"
              >
                ❯
              </a>
            </div>
          </div>
        </div>

        {/** Slide 3 */}
        <div
          id="slide3"
          className={`carousel-item relative w-full bg-cover bg-[url('https://i.ibb.co.com/G4LqpcjS/3.jpg')] backdrop-blur-md ${
            activeSlide === 3 ? "block" : "hidden"
          }`}
        >
          <div className="w-full h-full relative backdrop-blur-sm">
            <div className="w-full absolute z-10">
              <Navbar home={true}></Navbar>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href="#slide2"
                onClick={() => setActiveSlide(2)}
                className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center border-[1px] my-auto bg-slate-50"
              >
                ❮
              </a>
              <div className="w-3/5 text-white -z-50">{banner}</div>
              <a
                href="#slide4"
                onClick={() => setActiveSlide(4)}
                className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center border-[1px] my-auto bg-slate-50"
              >
                ❯
              </a>
            </div>
          </div>
        </div>

        {/** Slide 4 */}
        <div
          id="slide4"
          className={`carousel-item relative w-full bg-cover bg-[url('https://i.ibb.co.com/v6dpDNZg/4.jpg')] backdrop-blur-md ${
            activeSlide === 4 ? "block" : "hidden"
          }`}
        >
          <div className="w-full h-full relative backdrop-blur-sm">
            <div className="w-full absolute z-10">
              <Navbar home={true}></Navbar>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href="#slide3"
                onClick={() => setActiveSlide(3)}
                className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center border-[1px] my-auto bg-slate-50"
              >
                ❮
              </a>
              <div className="w-3/5 text-white -z-50">{banner}</div>
              <a
                href="#slide1"
                onClick={() => setActiveSlide(1)}
                className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center border-[1px] my-auto bg-slate-50"
              >
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
