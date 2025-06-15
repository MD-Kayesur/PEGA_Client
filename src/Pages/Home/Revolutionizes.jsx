import React from 'react';
import { CgChevronRight } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import img1 from '../../images/revolutionizes/revolutionizes-1.png'
const Revolutionizes = () => {
    return (
        <div>
            <div className="hero   w-11/12 mx-auto min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src= {img1}
      className="lg:max-w-lg rounded-lg "
    />
    <div>
      <h1 className="text-5xl font-bold">Wells Fargo revolutionizes <br /> estate settlement <br /> for families</h1>
      <p className="py-6">
       Wells Fargo transformed the process into a seamless experience for grieving families, doubling case volume while boosting satisfaction by 40% with Pega.
      </p>
                   <Link  to='/' className="text-lg font-semibold hover:underline flex items-center">Discover how<CgChevronRight className="text-2xl"></CgChevronRight></Link>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Revolutionizes;