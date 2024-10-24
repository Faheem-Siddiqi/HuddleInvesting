import React from 'react'
import { IoLogoFacebook } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import FooterLogo from '../../../public/assets/image/FooterLogo.png'
import Image from 'next/image';
import Link from 'next/link';
export default function Footer() {
  return (
    <>
      <footer className='bg-Green100'>
        <div className="xl:p-10 p-5 ">
          <div className="mx-auto flex justify-between lg:flex-row flex-col">
            <div className=" md:w-fit w-full  ">
              <div className='md:left-0 relative -left-2 flex flex-row gap-2 items-center font-extrabold  font-Poppins-Regular text-Green475 text-3xl  md:text-4xl '>
                <Image
                  className='w-[55px] h-[50px] '
                  src={FooterLogo}
                  alt='logo image'
                  height={400}
                  width={400}
                />
                <h2 className="">Huddle Investing </h2>
              </div>
            </div>
            <div className="flex flex-col w-fit mt-3  font-Poppins-Regular">
              <h1 className=" font-bold  font-WorkSans-Regular text-2xl text-Green475">Quick Links</h1>
              <ol className='text-Green475'>
                <li className="relative my-3 w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-Green475 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left font-NunitoSans-Regular list-none">
                  <Link href="/about-us">About</Link>
                </li>
                <li 
                
                className="relative my-3  w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-Green475 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left font-NunitoSans-Regular list-none"
                
                >
                  <Link href="/contact-us">Contact</Link>
                </li>
                <li className="relative my-3  w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-Green475 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left font-NunitoSans-Regular list-none">
                  <Link href="/economic-calendar">Economic Calendar</Link>
                </li>
              </ol>
            </div>
            <div className="flex flex-col lg:w-[23%] w-full  mt-3 font-Poppins-Regular">
              <h1 className=" font-bold   font-WorkSans-Regular text-2xl text-Green475">Reach Us</h1>
              <div className='mt-2 '>
                <div className="flex flex-row  items-center mt-2">
                  <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM17.6 4.25L10.53 8.67C10.21 8.87 9.79 8.87 9.47 8.67L2.4 4.25C2.29973 4.19371 2.21192 4.11766 2.14189 4.02645C2.07186 3.93525 2.02106 3.83078 1.99258 3.71937C1.96409 3.60796 1.9585 3.49194 1.97616 3.37831C1.99381 3.26468 2.03434 3.15581 2.09528 3.0583C2.15623 2.96079 2.23632 2.87666 2.33073 2.811C2.42513 2.74533 2.53187 2.69951 2.6445 2.6763C2.75712 2.65309 2.87328 2.65297 2.98595 2.67595C3.09863 2.69893 3.20546 2.74453 3.3 2.81L10 7L16.7 2.81C16.7945 2.74453 16.9014 2.69893 17.014 2.67595C17.1267 2.65297 17.2429 2.65309 17.3555 2.6763C17.4681 2.69951 17.5749 2.74533 17.6693 2.811C17.7637 2.87666 17.8438 2.96079 17.9047 3.0583C17.9657 3.15581 18.0062 3.26468 18.0238 3.37831C18.0415 3.49194 18.0359 3.60796 18.0074 3.71937C17.9789 3.83078 17.9281 3.93525 17.8581 4.02645C17.7881 4.11766 17.7003 4.19371 17.6 4.25Z" fill="#0C9955" />
                  </svg>
                  <p className='text-Green475 ml-2'> info@huddleinvesting.ca</p>
                </div>
                <div className="flex flex-row  items-center my-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.23 15.26L16.69 14.97C16.3913 14.9349 16.0886 14.968 15.8046 15.0667C15.5205 15.1654 15.2625 15.3273 15.05 15.54L13.21 17.38C10.3712 15.9362 8.06378 13.6288 6.62 10.79L8.47 8.94001C8.9 8.51001 9.11 7.91001 9.04 7.30001L8.75 4.78001C8.69331 4.29219 8.4592 3.84225 8.09224 3.51586C7.72528 3.18947 7.25111 3.00943 6.76 3.01001H5.03C3.9 3.01001 2.96 3.95001 3.03 5.08001C3.56 13.62 10.39 20.44 18.92 20.97C20.05 21.04 20.99 20.1 20.99 18.97V17.24C21 16.23 20.24 15.38 19.23 15.26Z" fill="#0C9955" />
                  </svg>
                  <p className='text-Green475 ml-1'>
                    {`+1 (647) 676-3524`}</p>
                </div>
                <div className="flex flex-row  items-start ">
                  <span className='mt-1'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 1.5C7.85953 1.5 4.5 4.52391 4.5 8.25C4.5 14.25 12 22.5 12 22.5C12 22.5 19.5 14.25 19.5 8.25C19.5 4.52391 16.1405 1.5 12 1.5ZM12 12C11.4067 12 10.8266 11.8241 10.3333 11.4944C9.83994 11.1648 9.45542 10.6962 9.22836 10.1481C9.0013 9.59987 8.94189 8.99667 9.05764 8.41473C9.1734 7.83279 9.45912 7.29824 9.87868 6.87868C10.2982 6.45912 10.8328 6.1734 11.4147 6.05764C11.9967 5.94189 12.5999 6.0013 13.1481 6.22836C13.6962 6.45542 14.1648 6.83994 14.4944 7.33329C14.8241 7.82664 15 8.40666 15 9C14.9991 9.79538 14.6828 10.5579 14.1204 11.1204C13.5579 11.6828 12.7954 11.9991 12 12Z" fill="#0C9955" />
                    </svg>
                  </span>
                  <p className='text-Green475 ml-1  '>
                    <span className='text-Green475 font-semibold'>
                      Huddle Investing Inc. <br />
                    </span>
                    {`2000 Argentia Rd, Plaza 4, 490, Mississauga, Ontario, Canada, L5N1W1
`}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-3 w-fit font-Poppins-Regular">
              <h1 className=" font-bold font-WorkSans-Regular text-2xl text-Green475">Find Us</h1>
              <div className="flex gap-3 mt-2 items-center">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <IoLogoFacebook className="text-Green475 text-4xl" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-Green475 text-3xl" />
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-Green475 text-3xl" />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                  <BsTwitterX className="text-Green475 text-3xl ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className='w-[94%] border-white mx-auto block' />
        <div className="text-center py-8">
          <p className="text-Green475 font-Satoshi-Black text-sm">Huddle Investing Inc.
          </p>
        </div>
      </footer>
      

      </>
  )
}
