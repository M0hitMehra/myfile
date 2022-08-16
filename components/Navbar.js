import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { createClient } from "next-sanity";
import PortableText from "react-portable-text";
import imageUrlBuilder from "@sanity/image-url";

const Navbar = (props) => {

 
    const [darkProp, setDarkProp] = useState()

  return (
    <div className= {`${props.color}  w-full z-50 top-0 py-3 sm:py-2`} >
      <div className="container flex items-center justify-between pt-2.5 ">
        <div>
          <Link href="/">
            
            <h2 className="text-white text-xl BlinkMacSystemFont  subpixel-antialiased	font-medium tracking-wider leading-6	overline decoration-wavy	uppercase indent-2.5	align-baseline	whitespace-pre-wrap	" >{props.title}</h2>
          </Link>
        </div>
        <div className="hidden lg:block">
          <ul className="flex items-center">
            <li className="group pl-6">
              <Link
                href="/#about"
                className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
              >
                About
              </Link>

              <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
            </li>

            <li className="group pl-6">
              <Link
                href="/#services"
                className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
              >
                Services
              </Link>

              <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
            </li>

            <li className="group pl-6">
              <Link
                href="/#portfolio"
                className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
              >
                Portfolio
              </Link>

              <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
            </li>

            <li className="group pl-6">
              <Link
                href="/#clients"
                className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
              >
                Clients
              </Link>

              <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
            </li>

            <li className="group pl-6">
              <Link
                href="/#work"
                className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
              >
                Work
              </Link>

              <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
            </li>

            <li className="group pl-6">
              <Link
                href="/#statistics"
                className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
              >
                Statistics
              </Link>

              <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
            </li>

            <li className="group pl-6">
              <Link
                href="#blog"
                className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
              >
                Blog
              </Link>

              <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
            </li>

            <li className="group pl-6">
              <Link
                href="/#contact"
                className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
              >
                Contact
              </Link>

              <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
            </li>

            <li className="group pl-6 ">
                <div className="flex flex-row">

               <p className="inline-block mr-3 mt-1 cursor-pointe pt-0.5 font-header font-semibold uppercase text-white" >Dark</p>  
              <label className="switch mr-4 ">
              <input type="checkbox"   />
                <span className="slider "></span>
              </label>
              
                </div>
            </li> 
          </ul>
        </div>
        <div className="block lg:hidden">
          <button>
            <i className="bx bx-menu text-4xl text-white"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

