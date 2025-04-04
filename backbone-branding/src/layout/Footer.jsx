import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaBehance } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-black text-white mt-18 pt-18 px-8 pb-8'>
        <div className='flex justify-between'>
            <div className='text-4xl uppercase'>
                <h2>info@backbonebranding.com</h2>
                <h2 className='mt-8'>pr@backbonebranding.com</h2>
                <h2 className='mt-8'>+ 374 91 366 008</h2>
            </div>
            <div>
                <div className='inline-flex'>
                    <div className='flex flex-col text-xl pr-8'>
                        <td>WORKS</td>
                        <td className='mt-8'>ABOUT US</td>
                        <td className='mt-8'>SERVICES</td>

                    </div>
                    <div className='flex flex-col text-xl pr-20'>
                        <td>AWARDS</td>
                        <td className='mt-8'>PRESS</td>
                        <td className='mt-8'>CONTACT</td>
                    </div>
                </div>

            </div>
        </div>
        <div className="flex gap-4 text-4xl mt-14">
            <FaFacebookF />
            <FaBehance />
            <FaInstagram />
            <FaPinterestP />
            <FaLinkedinIn />
        </div>
        
        <div className='flex justify-between mt-14'>
            <p>&copy; ALL RIGHTS RESERVED 2025</p>

            <p>BY CONCEPT STUDIO</p>
        </div>
    </div>
  )
}

export default Footer