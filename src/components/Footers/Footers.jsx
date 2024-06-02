import React from 'react'
import {  FaFacebook , FaTimes , FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import Button from '../Button/Button';

function Footers() {
  return (
    <div className='pl-[40px] py-5 grid 
    xl:flex xl:justify-center xl:p-20 xl:gap-10 bg-[#000] justify-center  md:grid-cols-2 lg:flex col lg:justify-around '>
{/* #0A1121 */}
        <div className='mr-10  max-[480px]:mr-[0]'>
            <p className='text-[#fff]  '>RoyalHomes</p>

            <select name="" id="" className='
            text-white
            bg-black
            outline
            rounded-md
            pr-20
            pl-6
            pt-2
            pb-2
            mt-10
            lg:pr-10
            ' >
                <option value="" >Manchester</option>
                <option value="">Hertfordshire</option>
                <option value="">Sunderland</option>
                <option value="">Glasglow</option>
                <option value="">Bermingham</option>
                <option value="">London</option>
            </select>

            <ul className='text-white
            text-[16px]
            mt-7 border-b border-gray-500 pb-[25px]
            max-[480px]:text-[13px]
            '>
                <li>About</li>
                <li>Careers</li>
                <li>News</li>
                <li>Investors</li>
                <li>Apps</li>
                <li>Studios</li>
                <li>Partners</li>
            </ul>
        </div>

        <div className='text-white
            text-[16px]
            mt-[25px]
            max-[480px]:text-[13px] 
            
            sm:mt-[99px]
                   
            '>
            <ul>
                <li>Help</li>
                <li>Learn how RoyalHomes works</li>
                <li>Terms and Condition</li>
                <li>Privacy Notice</li>
                <li>Cyber Safety</li>
                <li>Service Agreement</li>
            </ul>
        </div>
        


        <div className='text-white mt-[4rem] ml-[0]   xl:ml-[30px] md:ml-[0]'>
                <div className='flex ml-0 mb-[10px] xl:ml-[30rem] gap-2 md:ml-[0] '>
                <i><FaFacebook  size={28} color="#000" className='bg-[#fff]   rounded-3xl p-2 ' /> </i>
                <i><FaTimes size={28} color="#000" className='bg-[#fff]   rounded-3xl p-2 ' /> </i>
                <i><FaInstagram  size={28} color="#000" className='bg-[#fff]   rounded-3xl p-2 ' /> </i>
                <i><FaYoutube  size={28} color="#000" className='bg-[#fff]   rounded-3xl p-2 ' /> </i>
                <i><FaLinkedin  size={28} color="#000" className='bg-[#fff]   rounded-3xl p-2 ' /> </i>
                 
                </div>
                

            <h2 className='text-[19px] font-bold mt-[40px] 
            max-[480px]:text-[14px]
            xl:text-[24px] w-full xl:w-[37rem] lg:w-[17rem]'>Get exclusive inspiration for your next stay –  subscribe to our newsletter.</h2>
       <div className='flex col [@media(max-width:350px)]:grid'>
            <input  type="text"
            className='
            pb-2
            pr-19
            bg-transparent
            border-b-2 border-solid border-[#007CC2]
            text-[#fff]
            mt-4
            font-bold
            max-[480px]:pr-5
            sm:pr-30
            lg:pr-7
            xl:pr-40
            [@media(max-width:400px)]:pr-1
            
           
            '
            placeholder='Email Address  '/>  
            <Button/>
            </div> 
            <p className=' font-bold text-[14px] mt-5'>RoyalHomes., <span className='font-normal text-[#AFB3BC]'>Email: inforoyalhomes2024@gmail.com</span> </p>
            <p className='font-normal text-[#AFB3BC]' >Copyright 2024 RoyalHomes | All rights reserved.</p>
        </div>

        <style jsx>{`
        @media screen and (max-width: 767px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}

export default Footers