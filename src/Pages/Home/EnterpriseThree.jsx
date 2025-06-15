import React from 'react';
import img1 from '../../images/Innovation_img/enterprise-three.png'  
import { BiMessageRounded } from 'react-icons/bi';
import { SlLayers } from 'react-icons/sl';
const EnterpriseThree = () => {
    return (
        <div>
<div className="hero py-20 bg-blue-500 min-h-screen">
 <div className='w-11/12 rounded-2xl bg-white mx-auto'>
     <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src= {img1}
      className="lg:max-w-lg rounded-lg shadow-2xl"
    />
    <div className='lg:p-10 p-5'>
      <h1 className="lg:text-5xl text-3xl font-bold"> The enterprise transformation company™</h1>
      <p className="py-6 text-xl">
        Unlock future-defining outcomes on the only platform with enterprise evolution built right in.
      </p>
      <div className="lg:flex justify-start gap-4">
             <button className="btn shadow-2xl text-xl btn-primary bg-blue-500 
                   transition-transform duration-300 
                   hover:-translate-y-1">
              {" "}
           <BiMessageRounded className='text-xl'></BiMessageRounded>  Contact us
            </button>
            <button className="btn text-xl lg:mt-0 mt-3 shadow-2xl btn-primary bg-blue-500 
                   transition-transform duration-300 
                   hover:-translate-y-1">
          <SlLayers className='text-xl'></SlLayers> Take the Platform Tour 
            </button>
           </div>
    </div>
  </div>
 </div>
</div>
        </div>
    );
};

export default EnterpriseThree;