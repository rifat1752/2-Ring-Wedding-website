import { FaFacebook,FaYoutube } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { serviceContext } from "../Providers/ServiceProvider";
import { useContext } from "react";

const Footer = () => {
  const { themeColor,setThemeColor} = useContext(serviceContext);

    return (
        <div className="mt-10 ">
            <footer className="footer footer-center p-10 bg-slate-900 rounded-t-xl  text-primary-content">
  <aside>
  <p className="text-3xl ml-1 text-yellow-300  font-nova font-extrabold"><span className="text-[#FF007F]">2</span>Ring</p>
  </aside> 
  <p className="text-white">Copyright © 2024 - All right reserved</p>
    <div className="grid grid-flow-col gap-4">
      <a className="text-blue-400 text-3xl hover:cursor-pointer"><FaFacebook /></a>
      <a className="text-red-500 text-3xl hover:cursor-pointer"><FaYoutube /></a>
      <a className="text-fuchsia-500 text-3xl hover:cursor-pointer"><AiFillInstagram /></a>
    </div>
</footer>
        </div>
    );
};

export default Footer;