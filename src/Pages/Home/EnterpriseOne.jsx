import React from 'react';
import Lottie from 'lottie-react';

// Properly import animation JSONs
import animation1 from '../../images/Enterprise/Animation - 1.json';
import animation2 from '../../images/Enterprise/Animation - 2.json';
import animation3 from '../../images/Enterprise/Animation - 3.json';
import { Link } from 'react-router-dom';
import { CgChevronRight } from 'react-icons/cg';

const EnterpriseOne = () => {
  const enterpriseData = [
    { animation: animation1, link: 'Personalize engagement' },
    { animation: animation2, link: 'Automate customer service' },
    { animation: animation3, link: 'Streamline operations' }
  ];

  return (
  <div className='w-10/12 mx-auto'>
    <div className='py-15 text-center'>
      <h1 className='text-5xl font-bold'>Enterprise solutions, at the ready</h1>
      <p className='text-xl py-5'>Pega is architected to run your most critical journeys. Explore our key solutions:
</p>
    </div>
      <div className="grid lg:grid-cols-3     gap-4     ">
      {enterpriseData.map((data, index) => (
        <div key={index} className="card shadow-lg hover:shadow-2xl bg-base-100    transition-transform duration-50 
                   hover:-translate-y-3">
          <figure className="h-48">
            <Lottie className='' animationData={data.animation} loop={true} />
          </figure>
          <div className="card-body text-center">
            <Link  to='/' className="text-lg font-semibold hover:underline flex items-center">{data.link} <CgChevronRight className="text-2xl"></CgChevronRight></Link>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default EnterpriseOne;
