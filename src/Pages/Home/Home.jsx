import React from 'react';
import Innovation from './Innovation';
import Design from './Design';
import EnterpriseOne from './EnterpriseOne';
import EnterpriseSeconed from './EnterpriseSeconed';
import Revolutionizes from './revolutionizes';
import Industry from './Industry';
import Recommended from './Recommended';
import EnterpriseThree from './enterpriseThree';
import { AiTwotoneSound } from 'react-icons/ai';
import { CgChevronRight } from 'react-icons/cg';
 import Navigation from '../../Components/Navigation/Navigation';
   
const Home = () => {
    return (
        <div>
            {/* <Navigation></Navigation> */}
            {/* <Menuw></Menuw> */}
            <div className=" py-6 bg-green-500 mx-auto">
            <a className="flex lg:items-center text-white lg:gap-3 gap-2 px- lg:justify-center hover:underline" href="http://"> <AiTwotoneSound className="text-2xl"></AiTwotoneSound> Pega Named a Leader in the Gartner® Magic Quadrant™ for Process Mining Platforms <CgChevronRight className="text-2xl"></CgChevronRight></a>
           </div>
            <Innovation></Innovation>
            <Design></Design>
 <EnterpriseOne></EnterpriseOne>
 <EnterpriseSeconed></EnterpriseSeconed>
 <Revolutionizes></Revolutionizes>
 <Industry></Industry>
 <Recommended></Recommended>
 <EnterpriseThree></EnterpriseThree>
         </div>
    );
};

export default Home;