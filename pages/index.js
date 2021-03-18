/* eslint-disable react/react-in-jsx-scope */
// import { useSession } from 'next-auth/client';
import Head from 'next/head';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

// import { useSession } from 'next-auth/client'

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Head>
        <title>Minority Sign-up</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display&display=swap" rel="stylesheet" />
      </Head>
      <div className={`flex flex-row justify-around p-20 bg-gradient-to-r from-pink-500 to-yellow-500 h-screen ${styles.landing}`}>
        {/* container */}
        <div className={`${styles.mailchimp}`}>
          {/* left */}
          <img src="./mp_asset_icon.svg" className="w-1/2 h-full " alt="mailchimp" />
        </div>
        <div data-aos="zoom-in" className={`bg-blue-600 w-1/2 p-10 rounded-md ${styles.blueSection}`}>
          {/* right */}
          <div className={`flex flex-row justify-between py-5 border-b ${styles.intro}`}>
            {' '}
            <div>
              <p className="text-gray-200 text-3xl mt-4">Welcome! Champ</p>
            </div>
            <img src="./mp_asset_icon.svg" style={{ cursor: 'pointer' }} className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500" alt="logo" />
          </div>
          <div className="flex flex-col">
            <div>
              <p className="text-gray-200 my-5">
                Hello programmer welcome to the minority secret platform,
                feel free to create an account with us, you will be using github
                authentication which requires no password for you to have access to our content.
                {' '}
              </p>
              <p className="text-gray-200 mt-5">Click on the button below to signin using github Auth</p>
            </div>
            <div className="mt-20 flex flex-row justify-around">
              <Link href="/api/auth/signin"><button type="button" className={`rounded-md ${styles.github} border-white bg-white h-12 w-1/2 ml-2 text-blue-500 border hover:text-white hover:bg-blue-500 transition duration-500 ease-in-out transform`}>Sign-up with github</button></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
