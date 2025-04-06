import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaBehance } from "react-icons/fa";

const Footer = () => {
  return (
    <>
        <div className='
                        sm:flex sm:flex-col
                        md:flex md:flex-col
                        lg:flex lg:justify-between lg:flex-row
                        '>
            <div className='text-4xl uppercase'>
                <h2>info@backbonebranding.com</h2>
                <h2 className='mt-8'>pr@backbonebranding.com</h2>
                <h2 className='mt-8'>+ 374 91 366 008</h2>
            </div>
            <div className='sm:mt-7
                            md:mt-10
                            lg:mt-0
                            '>
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
        
        <div className='mt-14 text-[#7b7b7b]
                        sm:flex sm:flex-col
                        md:flex md:flex-row md:justify-between
                        lg:flex lg:flex-row lg:justify-between'>
            <p>&copy; ALL RIGHTS RESERVED 2025</p>

            <p>BY <span className='font-bold'>CONCEPT STUDIO</span></p>
        </div>
    </>
  )
}

export default Footer