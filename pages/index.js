import Head from 'next/head';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import BlueSection from '../components/BlueSection';
import Minority from '../components/Minority';

export default function Home() {
// uenabling use session to track user session

  const [session] = useSession();
  const Router = useRouter();

  // pushing the user to the dashboard once signed in

  if (session) {
    Router.push('/dashboard');
  }

  // useEffect for AOS page animation for every single render

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>

      {/* Chanding the head title and using red hat display font */}

      <Head>
        <title>Minority Sign-up</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display&display=swap" rel="stylesheet" />
      </Head>

      {/* main section of the landing page */}

      <div className={`landing ${styles.landing}`}>

        {/* Minority logo component */}

        <Minority />

        {/* The blue box section */}

        <BlueSection />
      </div>
    </>
  );
}
