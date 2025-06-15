import React from 'react';
import { FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { FaFacebook, FaFacebookF, FaTwitter, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
       <footer className="footer lg:flex  justify-between sm:footer-horizontal bg-base-200 text-base-content mt-0 lg:p-20 p-10">
  <div>
    <h3 className='text-2xl font-bold'>About Pegasystems</h3>
    <p className='lg:w-100 py-3'>Pega is The Enterprise Transformation Company™ that helps organizations Build for Change® with enterprise AI decisioning and workflow automation. Many of the world’s most influential businesses rely on our platform to solve their most pressing challenges, from personalizing engagement to automating service to streamlining operations. Since 1983, we’ve built our scalable and flexible architecture to help enterprises meet today’s customer demands while continuously transforming for tomorrow.</p>
  <div className='flex items-center gap-4'>
      <p className='text-xl pr-4'>
      Join the conversation
    </p>
    <Link to='/'><FaXTwitter className='text-2xl'></FaXTwitter></Link>
    <Link to='/'> <FaFacebookF className='text-2xl text-blue-700 opacity-60'></FaFacebookF></Link>
    <Link to='/'> <FaYoutube className='text-2xl text-red-700 opacity-60'></FaYoutube></Link>
    <Link to='/'><FaLinkedin className='text-2xl text-blue-700 opacity-60'></FaLinkedin></Link>
    
    
   
  </div>
  </div>
  <div>
    <h6 className="footer-title text-blue-700">Company</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </div>
  <div>
    <h6 className="footer-title text-blue-700">Pega Sites</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </div>
  <div>
    <h6 className="footer-title text-blue-700">Resources</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>
    );
};

export default Footer;