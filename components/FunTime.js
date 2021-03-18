import React from 'react';
import { useSession } from 'next-auth/client';

function FunTime() {
  const [session] = useSession();
  return (
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
  );
}

export default FunTime;
