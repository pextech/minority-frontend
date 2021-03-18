/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import 'react-toastify/dist/ReactToastify.css';
import Minority from '../components/Minority';

export default function Home() {
  const [session, loading] = useSession();
  const [name, setName] = useState('');
  const [phoneNumber, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [submit, setSubmitted] = useState(false);
  const [errors, setError] = useState(true);
  const [skip, setSkip] = useState(false);

  const validate = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
  const updateProfile = async (event) => {
    event.preventDefault();
    toast.warning('Checking inputs', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    if (validate === false) {
      toast.error('email must be valid', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setError(true);
    }
    if (email.length < 10) {
      toast.error('email must be valid', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setError(true);
    }
    if (phoneNumber.length < 10) {
      toast.error('phone number must be valid', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setError(true);
    }
    if (phoneNumber.length >= 10 && email.length >= 10) {
      const url = 'https://minority-backend.herokuapp.com/api/v1/user/register';
      axios.post(url, {
        fullName: session.user.name,
        email,
      }).then(() => {
        toast.success('Registered successfuly!!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setEmail('');
        setName('');
        setPhone('');
        setTimeout(() => {
          setSkip(true);
          setError(false);
          setSubmitted(true);
        }, 1000);
      }).catch(() => {
        toast.error('The email is already registered', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
    }
  };

  return (
    <>

      {submit === false && errors === true && session && skip === false && (
      <>
        <Header className="bg-gray-200 flex flex-around px-10 py-4" />
        <div className={`landing ${styles.landing}`}>
          <Minority />
          <div className={`bg-blue-600 w-1/2 p-10 rounded-md ${styles.blueSection}`}>
            {/* right */}
            <div className="flex flex-row justify-between">
              {' '}
              <div>
                <p className="text-gray-200 text-sm mt-4">Not so fast</p>
                <p className="text-gray-200 text-xl mt-4">Update your profile first</p>
              </div>
              <img src={session.user.image} className="w-20 h-20 rounded-full" alt="user" />
            </div>

            <form className="flex flex-col" onSubmit={updateProfile}>
              <div className="absolute mt-6 w-1/4">
                <input
                  type="text"
                  value={name}
                  placeholder={(session.user.name).toLocaleLowerCase()}
                  className={`input ${styles.textBox}`}
                  readOnly
                />
                <svg
                  className={`svg ${styles.icon}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div className="absolute mt-28 w-1/4">
                <input
                  type="email"
                  value={email}
                  placeholder="your email"
                  className={`input ${styles.textBox}`}
                  onChange={(e) => { e.preventDefault(); setEmail(e.target.value); }}
                  required
                />
                <svg
                  className={`svg ${styles.icon}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="absolute mt-48 w-1/4">
                <input
                  type="phone"
                  value={phoneNumber}
                  placeholder="your Phone"
                  className={`input ${styles.textBox}`}
                  onChange={(e) => { e.preventDefault(); setPhone(e.target.value); }}
                  required
                />
                <svg
                  className={`svg ${styles.icon}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {' '}

              </div>
              <div className="mt-72 flex flex-row justify-around">
                <button type="submit" className={`${styles.github} btn1`}>Create account</button>
                <button
                  type="button"
                  className={` ${styles.github} btn2`}
                  onClick={() => { setError(false); setSubmitted(true); setSkip(true); }}
                >
                  Skip
                </button>
              </div>

            </form>
          </div>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </>
      )}
      {session && skip === true && submit === true && errors === false && (
      <>
        <Header className="bg-gray-200 flex flex-around px-10 py-4" />
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
            <div className="flex flex-col">
              <p className="text-xl font-light flex-row-reverse justify-center">
                {' '}
                Welcome
                {' '}
                <span
                  className="text-blue-500 hover:text-blue-800"
                >
                  {(session.user.name).toLowerCase()}
                </span>
                , Have fun!!!
                {' '}
              </p>
              {/* <img src="./emoji.gif" className="w-10 h-10 " alt="emoji" /> */}
            </div>
            )}
            {!session && (
            <p className="text-xl font-light mt-28">
              Please first Signin
            </p>
            )}
          </div>
        </div>
      </>
      )}
      {!session
            && (
            <Dashboard />
            )}

    </>
  );
}
