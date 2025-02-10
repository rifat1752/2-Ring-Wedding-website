import { Link } from "react-router-dom";

const Service = ({ service }) => {
    const {id,serviceName,image,price,description} = service;
  return (

      <div
      // data-aos="flip-left" 
       className=" w-72  rounded-xl hover:shadow-lg  h-96 mb-10 border-2 border-slate-400   bg-base-200 shadow-2xl  wrapper  ">
        <figure className="image   w-full h-full">
          <img
            src={image}
            alt=""
            className="rounded-md service-img w-full h-full  object-cover "
          />
          
          <div className="card_text   pt-4  w-72  h-44 backdrop-blur-[1px] grid grid-rows-3 gap-2 justify-start text-center">
          <h2 className="my-auto text-xl font-bold card-heading text-white ">{serviceName}</h2>
          <p className="my-auto text font-medium text-slate-200 ">{description.slice(0,50)} {description.length?"...":""}</p>
          <div className="my-auto mb-2 "> 
          <Link to={`/service/${id}`}>
          <button className=" mx-auto text-center font-semibold text-lg    text-white hover:text-slate-100  bg-[#FF007F] hover:bg-[#33c7ec] transition-all duration-300 w-24 h-8 rounded-full  ">Details</button>
         
          </Link>
          </div>
          </div>
        </figure>
        
        
      </div>
  );
};

export default Service;
