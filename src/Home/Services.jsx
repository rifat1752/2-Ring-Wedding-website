import { useContext } from "react";

import Service from "./Service";
import { serviceContext } from "../Providers/ServiceProvider";
import { Link } from "react-router-dom";




const Services = ({home}) => {
    const {services,themeColor, dataLength} = useContext(serviceContext);

    return (
        <div className={`border ${(themeColor=="dark")?"border-slate-700 bg-[#191e24]":" border-slate-200 bg-slate-50"}  my-5 py-10 rounded-xl mx-5`}> 
          
                <div
                //  data-aos={window.screen.width < 720 ? "zoom-in" :"zoom-in" }
                  className="w-full py-5   flex flex-col justify-center items-center">
                    <img 
                    // data-aos={window.screen.width < 720 ? "zoom-in" : "fade-down"} 
                    // data-aos-delay={window.screen.width < 720 ? "" : "500"}
                     className="w-24 h-20 my-5" src="https://i.ibb.co.com/yYK900G/logo.png" alt="" />
                    <h1 className="2xl:text-6xl xl:text-5xl lg:text-4xl text-2xl   text-[#FF007F] font-bold text-center my-5">Our Services</h1>
                    <p className={`text-sm md:text-base lg:text-lg xl:text-xl courgette-regular text-center w-3/4 font-medium my-5  ${(themeColor=="dark")?"text-slate-300":"text-gray-600"} `}><i>&quot;With a commitment to excellent customer service, we strive to be your trusted partner in crafting the perfect wedding day. Our support team is knowledgeable, responsive, and always eager to help you navigate through any inquiries or concerns.&quot;</i></p>
                </div>
<div className="my-5 py-5">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-11/12 mx-auto  place-items-center">
                {
                    home?(services.slice(0,dataLength).map(service=> <Service key={service.id} service={service}></Service>)):(services.map(service=> <Service key={service.id} service={service}></Service>))
                }
            </div>
{
           home?<div className="flex "><Link className="mx-auto my-5" to='/services'><button className="w-24 h-10 text-[#FF007F] hover:text-white font-semibold  pb-1  text-lg border border-[#FF007F] hover:bg-[#FF007F] transition-all duration-300 rounded-full">See more</button></Link></div>:""
            
}   
</div>
     </div>
    );
};

export default Services;