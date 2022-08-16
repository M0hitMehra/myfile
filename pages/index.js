import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { createClient } from "next-sanity";
import PortableText from "react-portable-text";
import imageUrlBuilder from "@sanity/image-url";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Services from "../components/Services";
import Protfolio from "../components/Protfolio";
import Work from "../components/Work";
import Statistics from "../components/Statistics";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home({ allBlogs, profile }) {
  const builder = imageUrlBuilder(client);
  return (
    <>
      <Head>
        <meta charset="utf-8" />

        <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />

        <meta
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
          name="viewport"
        />

        <title>{profile.title}</title>

        <meta property="og:title" content="Homepage | Atom Template" />

        <meta property="og:locale" content="en_US" />

        <link rel="canonical" href="//" />

        <meta property="og:url" content="//" />

        <meta
          name="description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <link rel="icon" type="image/png" href="/assets/img/favicon.png" />

        <meta name="theme-color" content="#5540af" />

        <meta property="og:site_name" content="Atom Template" />

        <meta property="og:image" content="//assets/img/social.jpg" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:site" content="@tailwindmade" />

        <link
          crossOrigin="crossorigin"
          href="https://fonts.gstatic.com"
          rel="preconnect"
        />

        <link
          as="style"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="preload"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          rel="stylesheet"
        />

        <link
          crossOrigin="anonymous"
          href="/assets/styles/main.min.css"
          media="screen"
          rel="stylesheet"
        />

        <script
          defer
          src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"
        ></script>

        <script
          defer
          src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"
        ></script>
      </Head>

      <div id="main" className=" relative">
        <div
          x-data="{
    triggerNavItem(id) {
        $scroll(id)
    },
    triggerMobileNavItem(id) {
        mobileMenu = false;
        this.triggerNavItem(id)
    }
}"
        >
          <div
            className="w-full z-50 top-0 py-3 sm:py-5  absolute
  "
          >
            <Navbar color="bg-[#46349100]" title={profile.title} />
          </div>
<>  
{/* <div className="pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden">
            <div className="absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3">
              <button className="absolute top-0 right-0 mt-4 mr-4">
                <img
                  src="/assets/img/icon-close.svg"
                  className="h-10 w-auto"
                  alt=""
                />
              </button>

              <ul className="mt-8 flex flex-col">
                <li className="py-2">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    About
                  </span>
                </li>

                <li className="py-2">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    Services
                  </span>
                </li>

                <li className="py-2">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    Portfolio
                  </span>
                </li>

                <li className="py-2">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    Clients
                  </span>
                </li>

                <li className="py-2">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    Work
                  </span>
                </li>

                <li className="py-2">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    Statistics
                  </span>
                </li>

                <li className="py-2">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    Blog
                  </span>
                </li>

                <li className="py-2">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    Contact
                  </span>
                </li>
              </ul>
            </div>
          </div> */}
</>
        

          <div>
            <div
              className="relative bg-cover bg-center bg-no-repeat h-screen  py-8"
              style={{ backgroundImage: "url('/assets/img/bg-hero.jpg')" }}
            >
              <div className="absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat  "></div>

              <div className="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
                <div className="flex flex-col items-center justify-center lg:flex-row">
                  <div className="rounded-full border-8 border-primary shadow-xl">
                    <img
                      src={`${builder
                        .image(profile.image)
                        .width(200)
                        .height(200)
                        .url()}`}
                      className="h-48 rounded-full sm:h-56"
                      alt="author"
                    />
                  </div>
                  <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
                    <h1 className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
                      Hello I am {profile.name}
                    </h1>
                    <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
                      <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                        <p className="font-body text-lg uppercase text-white">
                          Let&apos;s connect
                        </p>
                        <div className="hidden sm:block">
                          <i className="bx bx-chevron-right text-3xl text-yellow"></i>
                        </div>
                      </div>
                      <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                        <a href={profile.fb}>
                          <i className="bx bxl-facebook-square text-2xl text-white hover:text-yellow"></i>
                        </a>
                        <a href={profile.twitter} className="pl-4">
                          <i className="bx bxl-twitter text-2xl text-white hover:text-yellow"></i>
                        </a>

                        <a href={profile.linkedin} className="pl-4">
                          <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
                        </a>
                        <a href={profile.ig} className="pl-4">
                          <i className="bx bxl-instagram text-2xl text-white hover:text-yellow"></i>
                        </a>
                      </div>
                    </div>

                    <div className="buttons text-center md:text-left ">
                      <Link href="/Blogs">
                        <button className="bg-violet-600 text-white py-[0.5px] px-3 rounded-lg sm:text-1xl md:text-2xl uppercase font-normal  border-2	border-violet-900 shadow-md	shadow-black drop-shadow-sm	 hover:bg-blend-darken hover:bg-violet-700 font-mono	">
                          Blogs
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Intro profile={profile} />

            <Services profile={profile} />

            <Protfolio />
            <>
              {/* <div className="bg-grey-50" id="clients">
  <div className="container py-16 md:py-20">
    <div className="mx-auto w-full sm:w-3/4 lg:w-full">
      <h2
        className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
      >
        My latest clients
      </h2>
      <div className="flex flex-wrap items-center justify-center pt-4 sm:pt-4">
        <span className="m-8 block">
          <img
            src="/assets/img/logo-coca-cola.svg"
            alt="client logo"
            className="mx-auto block h-12 w-auto"
            />
        </span>
        <span className="m-8 block">
          <img
          src="/assets/img/logo-apple.svg"
            alt="client logo"
            className="mx-auto block h-12 w-auto"
          />
        </span>

        <span className="m-8 block">
          <img
            src="/assets/img/logo-netflix.svg"
            alt="client logo"
            className="mx-auto block h-12 w-auto"
          />
        </span>

        <span className="m-8 block">
          <img
            src="/assets/img/logo-amazon.svg"
            alt="client logo"
            className="mx-auto block h-12 w-auto"
          />
        </span>

        <span className="m-8 block">
        <img
            src="/assets/img/logo-stripe.svg"
            alt="client logo"
            className="mx-auto block h-12 w-auto"
          />
        </span>
        </div>
    </div>
  </div>
</div> */}
            </>
            <Work />

            <Statistics />

            <Blog allBlogs={allBlogs} />

            <Contact />
          </div>

          <Footer profile={profile} />
        </div>
      </div>

      <Script src="/assets/js/main.js"></Script>
    </>
  );
}

export async function getServerSideProps(context) {
  const query = `*[_type == "blog"][0...3]`;
  const allBlogs = await client.fetch(query);

  const profileQuery = `*[_type == "profile"][0]`;
  const profile = await client.fetch(profileQuery);

  return {
    props: {
      allBlogs,
      profile,
    },
  };
}

const client = createClient({
  projectId: "aj21otxn",
  dataset: "production",
  useCdn: false,
});

 