import React from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/client';
import Head from 'next/head';

export default function Header() {
  const [session] = useSession();

  const handleSignout = (e) => {
    e.preventDefault();
    signOut();
  };
  return (
    <>
      <Head>
        <title>Minority Create-account</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-row justify-between
      bg-white px-10 py-2 shadow-lg"
      >
        {session && (
        <>
          <Link href="/">
            <img
              src={session.user.image}
              className="w-10 h-10 mx-10
              rounded-full"
              style={{ cursor: 'pointer' }}
              alt="user"
            />
          </Link>

          <div className="flex flex-row justify-between">
            {' '}
            <a
              href="/"
              onClick={handleSignout}
              className="my-2 text-blue-500
            hover:text-blue-800"
            >
              Sign out
            </a>
          </div>
        </>
        ) }
        {!session && (
        <>
          <Link href="/">
            <img
              src="./mp_asset_icon.svg"
              className="w-10 h-10 mx-10 rounded-full
             bg-gradient-to-r from-pink-500 to-yellow-500"
              style={{ cursor: 'pointer' }}
              alt="logo"
            />
          </Link>

          <div className="flex flex-row justify-between">
            {' '}
            <a
              href="/"
              className="text-blue-500
            hover:text-blue-800 my-2"
            >
              Sign in
            </a>
          </div>
        </>
        ) }
      </div>
    </>
  );
}
