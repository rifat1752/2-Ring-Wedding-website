
import { FaHeart } from "react-icons/fa";
import { useContext, useEffect } from "react";
import { serviceContext } from "../../Providers/ServiceProvider";


const HBlog = ({blog}) => {
    const { post_id, post_date, poster_image, post_by, post_title, post_description } = blog;
    const { initialLikedStatus, likedStatus, toggleLikedStatus, DataUpdate} = useContext(serviceContext);
    // useEffect(() => {
    //     initialLikedStatus(post_id);
    //   }, [initialLikedStatus, post_id]);
      
    
      // Save liked status to localStorage whenever it changes
      DataUpdate(likedStatus);
    
      const likeButton = () => {
        toggleLikedStatus(post_id);
      };
    
    return (
        <div 
        // data-aos={window.screen.width < 720 ? "flip-left" :"zoom-in" }
         className=" lg:w-4/6 max-w-5xl   border-[#FF007F] transition rounded-xl duration-500 bg-slate-50 mx-5 shadow-xl  border flex flex-col md:flex-row  my-5">
      <div className="image w-full relative top-0 lg:w-1/3">
        <img className="w-full md:w-96 rounded-t-xl md:rounded-r-none md:rounded-l-xl   object-cover md:h-full" src={poster_image} alt="" />
        <p className="bg-red-500 absolute top-1/3 text-slate-200 right-0 w-20 h-16 text-lg font-extrabold text-center">{post_date}</p>
      </div>
      <div className="text w-full md:w-2/3 p-10">
        <p className="text-lg text-slate-400 font-bold ">Posted By: {post_by}</p>
        <h1 className="text-2xl font-bold mt-4">{post_title}</h1>
        <p className="font-semibold text-justify mt-4 text-slate-600">{post_description} </p>
          {/* <button onClick={likeButton} className={`mt-5 text-lg font-semibold flex items-center ${likedStatus[post_id] ? 'text-red-500' : ''}`}>
            <FaHeart className="mr-2" /> {likedStatus[post_id] ? 'Liked' : 'Like'}
          </button> */}
      </div>
    </div>
    );
};

export default HBlog;