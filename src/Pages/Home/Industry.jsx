import React from 'react';
import img1 from  '../../images/industry/BT-Logo.png'
import img2 from  '../../images/industry/pega-church-mutual.png'
import img3 from  '../../images/industry/pega-healthfirst-logo.png'
import img4 from  '../../images/industry/pega-singapore-mom.png'
import img5 from  '../../images/industry/Wells-Fargo-logo.png'
import { Link } from 'react-router-dom';
const Industry = () => {
 const   industry=[
     {img:img1},
     {img:img5},
     {img:img4},
     {img:img3},
     {img:img2},
       
    ]
    return (
       <div className='w-11/12 mx-auto '>
        <h1 className='text-3xl font-bold py-10 text-center'>Trusted by industry leaders</h1>
         <div className='lg:flex grid grid-cols-2 gap-6 items-center justify-evenly '>
            {
                industry.map(data=>(
                    <div>
                        <Link to='/'><img className='h-20 ' src={data.img} alt="" /></Link>
                    </div>
                ))
            }
        </div>
       </div>
    );
};

export default Industry;