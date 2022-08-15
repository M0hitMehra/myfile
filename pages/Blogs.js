import React from 'react'
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { createClient } from "next-sanity";
import PortableText from "react-portable-text";
import imageUrlBuilder from "@sanity/image-url";
import Navbar from '../Components/Navbar';

const Blogs = ({allBlogs,profile }) => {

    
    const builder = imageUrlBuilder(client);
    const lightMode = "bg-black dark:bg-white dark:text-black"
    const darkMode ="bg-white dark:bg-black dark:text-white"
  return (
    <div>
        <Navbar  title={profile.title} color= "bg-[#493798]"  />
        <div className={`overflow-hidden ${lightMode}    px-6 py-8 ring-1 ring-slate-900/5 shadow-xl `} id="blog">
              <div className="container mx-auto py-16 md:py-5">
                <h2 className="text-center font-header  text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                  I also like to write
                </h2>
                <h4 className="pt-6 mt-5 text-center font-header text-xl font-medium  sm:text-2xl lg:text-3xl">
                  Check out my latest posts!
                </h4>
                <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">
                  {allBlogs.map((item, i) => {
                    return (
                      <Link
                        key={i}
                        href={`/blog/` + item.slug.current}
                        className="shadow"
                      >
                        <div>
                          <div
                            style={{
                              backgroundImage: `url(${builder.image(item.blogImg).width(200).url() || "/assets/img/post-01.png"})`
                            }}
                            className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72 cursor-pointer   shadow-lg shadow-white	 "
                          >
                            <span className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                            <span className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base cursor-pointer bg-purple-600 " >
                              Read More
                            </span>
                          </div>
                          <div className="bg-white py-6 px-5 xl:py-8   shadow-lg shadow-black  ">
                            <span className="block font-body text-lg font-semibold text-black">
                              {item.title}
                            </span>
                            <span className="block pt-2 font-body text-black">
                              {item.metadesc}
                            </span>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
    </div>
  )
}

export default Blogs

export async function getServerSideProps(context) {
    const query = `*[_type == "blog"]`;
    const allBlogs = await client.fetch(query);
     
    const profileQuery = `*[_type == "profile"][0]`;
  const profile = await client.fetch(profileQuery);
    return {
      props: {
        allBlogs,
        profile
      },
    };
  }
  
  const client = createClient({
    projectId: "aj21otxn",
    dataset: "production",
    useCdn: false,
  });
  
  