import React from 'react';
import { useSession } from 'next-auth/client';
import styles from '../styles/Home.module.css';
import FunTime from './FunTime';

function Fun() {
  const [session] = useSession();
  return (
    <div className={`bg-white flex flex-row justify-between ${styles.soon}`}>
      <div>
        <video
          loop
          muted
          className="w-full h-full border-r-none"
          playsInline
          autoPlay
          track="true"
          preload="auto"
          src="./hm-hero-mobile.mp4"
        />
      </div>
      <div className={`text-center w-1/2 ${styles.comingSoon}`}>
        {session && (
        <FunTime />
        )}
        {!session && (
        <p className="text-xl font-light mt-28">
          Please first Signin
        </p>
        )}
      </div>
    </div>
  );
}

export default Fun;
