/* eslint-disable react/prop-types */
import React from 'react';
import { useSession } from 'next-auth/client';
import Header from './Header';
import styles from '../styles/Home.module.css';

function Dashboard() {
  const [session] = useSession();
  return (
    <>
      <Header />
      <div className={`bg-primary-100 flex flex-row justify-between h-screen ${styles.soon}`}>
        <div className="w-full">
          <img className="md:w-full h-full xsm:w-full border-r-none" src="./blog.gif" alt="blog" />
        </div>
        <div className={`text-center w-1/2  ${styles.comingSoon}`}>
          {session && (
            <div className="flex flex-col">
              <p className="text-xl font-light ">
                Welcome
                {' '}
                {(session.user.name).toLowerCase()}
                , Have fun!!!
              </p>
            </div>
          )}
          {!session && (
            <p className="text-xl font-light">
              Please first Signin
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
