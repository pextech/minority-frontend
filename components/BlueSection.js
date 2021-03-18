import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

function BlueSection() {
  return (
    <div
      data-aos="zoom-in"
      className={`bg-blue-600 w-1/2 p-10
     rounded-md ${styles.blueSection}`}
    >
      {/* right */}
      <div className={`flex flex-row
       justify-between py-5 border-b ${styles.intro}`}
      >
        {' '}
        <div>
          <p className="text-gray-200
          text-3xl mt-4"
          >
            Welcome! Champ
          </p>
        </div>
        <img
          src="./mp_asset_icon.svg"
          style={{ cursor: 'pointer' }}
          className="w-20 h-20 rounded-full
           bg-gradient-to-r from-pink-500 to-yellow-500"
          alt="logo"
        />
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
          <Link href="/api/auth/signin">
            <button
              type="button"
              className={`${styles.github} github`}
            >
              Sign-up with github
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlueSection;
