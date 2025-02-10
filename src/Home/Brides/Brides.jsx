import { useContext } from "react"
import img1 from "../../assets/ber_img.jpg"
import img2 from "../../assets/ber_img1.jpg"
import img3 from "../../assets/ber_img2.jpg"
import logo1 from "../../assets/ring.png"
import logo2 from "../../assets/round.png"
import { serviceContext } from "../../Providers/ServiceProvider"


const Brides = () => {
  const { themeColor,setThemeColor} = useContext(serviceContext);
    return (
        <div className="mx-5">
          <div>
            <div>
                <div
                //  data-aos={window.screen.width < 720 ? "zoom-in" :"zoom-in" } 
                 className="w-full my-10  py-20  flex flex-col justify-center items-center">
                    <img 
                    //  data-aos={window.screen.width < 720 ? "zoom-in" : "fade-down"} 
                    //  data-aos-delay={window.screen.width < 720 ? "" : "500"}
                      className="w-24 h-24 my-5" src={logo1} alt="" />
                    <h1 className="2xl:text-6xl xl:text-5xl lg:text-4xl text-2xl   text-[#FF007F] font-bold text-center my-5">Bridesmaids And Groomsmen</h1>
                  <p data-aos="zoom-in"  className={`text-sm md:text-base lg:text-lg xl:text-xl courgette-regular text-center w-3/4 font-medium my-5  ${(themeColor=="dark")?"text-slate-300":"text-gray-600"}`}> <i >"We understand that the people standing beside you on your wedding day are not just attendants; they are an integral part of your love story. Ensuring that your bridal party looks stunning, feels supported, and contributes to the joyous atmosphere of your celebration."</i></p> 
                </div>
                <div className="min-h-screen  grid lg:grid-cols-3 justify-items-center">
                     <div  className="flex flex-col w-95">
                        <img data-aos="flip-left"  className="w-80 h-96 object-cover rounded-xl" src={img1} alt="" />
                        <p data-aos="zoom-in"  className="text-center my-5 text-3xl text-[#FF007F] font-semibold">Voluptate</p>
                     </div>
                     <div className="flex flex-col w-95  self-end h-[450px]">
                        <img data-aos="flip-left"  className="w-80 h-96 self-end object-cover rounded-xl" src={img2} alt="" />
                        <p data-aos="zoom-in"  className="text-center my-5 text-3xl text-[#FF007F] font-semibold">Voluptate</p>
                     </div>
                     <div className="flex flex-col  w-95">
                        <img data-aos="flip-left"  className="w-80 h-96 object-cover rounded-xl" src={img3} alt="" />
                        <p data-aos="zoom-in"  className="text-center my-5 text-3xl text-[#FF007F] font-semibold">Voluptate</p>
                     </div>
                </div>
            </div>
            <div className="flex my-32">
                <img  data-aos="flip-left"  className="mx-auto w-32" src={logo2} alt="" />
            </div>
          </div>
        </div>
    );
};

export default Brides;