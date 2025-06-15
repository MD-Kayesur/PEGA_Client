import React from "react";
import img1 from "../../images/Design-img/Design-1.png";
const Design = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content gap-24 flex-col w-11/12 mx-auto lg:flex-row">
           <img src={img1} className="max-w-sm rounded-lg  " />
          <div className="px-10">
            <h1 className="text-6xl text-blue-700 font-bold">
              Take our Design Agents for a spin
            </h1>
            <p className="py-6 text-xl">
              Transform how you innovate with Pega Blueprint. Go from idea to
              app, or strategy to marketing rollout, in a  flash
            </p>

           <div className="md:flex justify-start gap-4">
             <button className="btn shadow-2xl btn-primary bg-blue-500 
                   transition-transform duration-300 
                   hover:-translate-y-1">
              {" "}
              Blueprint your workflows
            </button>
            <button className="btn mt-3 lg:mt-0 shadow-2xl btn-primary bg-blue-500 
                   transition-transform duration-300 
                   hover:-translate-y-1">
              GBlueprint customer engagement
            </button>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
