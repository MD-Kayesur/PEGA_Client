import React from 'react';
import img1 from '../../images/Innovation_img/Enterprise_img.png'  
import { CgChevronRight } from 'react-icons/cg';
const EnterpriseSeconed = () => {
    return (
       <div className='bg-gradient-to-b py-10 from-white to-gray-200'>
         <div className='w-10/12 mx-auto '>
            <div className='py-15 text-center'>
      <h1 className='text-3xl font-bold'>Enterprise solutions hand-picked for you</h1>
      <p className='text-xl py-5 lg:px-28'>Tell us your specific challenges. We’ll recommend the best tech to help you achieve incredible outcomes.
</p>
    </div>
   <div className='text-center'>
     <img className='w-3xl mx-auto' src={img1} alt="" />
     <button className="btn shadow-2xl text-black btn-primary hover:shadow-2xl bg-yellow-500 
                   transition-transform duration-300 
                   hover:-translate-y-1 ">
              Get Started <CgChevronRight className="text-2xl"></CgChevronRight>
            </button>
   </div>
        </div> 
       </div>
    )
};

export default EnterpriseSeconed;