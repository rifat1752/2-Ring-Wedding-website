import { useContext, useEffect, useState } from "react";
import logo1 from "../../assets/ring.png"
import HBlog from "./HBlog";
import { serviceContext } from "../../Providers/ServiceProvider";
import { Link } from "react-router-dom";

const HBlogs = ({home}) => {
  const {blogs,themeColor} = useContext(serviceContext)
    return (
        <div className="my-10">
             <div>
            <div 
            // data-aos={window.screen.width < 720 ? "zoom-in" :"zoom-in" }
             className="w-full  max-w-7xl mx-auto py-20  flex flex-col justify-center items-center">
                    <img
                    //  data-aos={window.screen.width < 720 ? "zoom-in" : "fade-down"} 
                    // data-aos-delay={window.screen.width < 720 ? "" : "500"}
                      className="w-24 h-24 my-5" src="https://i.ibb.co.com/yYK900G/logo.png" alt="" />
                    <h1 className="2xl:text-6xl xl:text-5xl lg:text-4xl text-2xl   text-[#FF007F] font-bold text-center my-5">Welcome to Our Wedding Blog</h1>
                    <p className={`text-sm md:text-base lg:text-lg xl:text-xl courgette-regular text-center w-3/4 font-medium my-5 ${(themeColor=="dark")?"text-slate-300":"text-gray-600"}`}><i>we believe that every love story deserves to be celebrated uniquely. Our blog is a dedicated space where we share inspiration, tips, and stories to help you navigate the exciting journey of planning your dream wedding.Step into a world of enchanting wedding tales, where we recount the magic of real celebrations.</i> </p>
            </div>
            <div className="flex flex-col justify-center items-center">
                {home?( blogs.slice(0,3).map(blog =><HBlog key={blog.post_id} blog={blog}></HBlog>))
                :( blogs.map(blog =><HBlog key={blog.post_id} blog={blog}></HBlog>))
                }
            </div>
            {
            
            home?(<div className="flex"><Link className="mx-auto" to='/blog'><button className="w-24 h-10 text-[#FF007F] hover:text-white font-semibold  pb-1  text-lg border border-[#FF007F] hover:bg-[#FF007F] transition-all duration-300 rounded-full">See more</button></Link></div>)
            :''
            }
            </div>
        </div>
    );
};

export default HBlogs;