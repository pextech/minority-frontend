import React from 'react';
import styles from '../styles/Home.module.css';

function Minority() {
  return (
    <div className={`${styles.mailchimp}`}>
      {/* left */}
      <img src="./mp_asset_icon.svg" className="w-1/2 h-full " alt="minority" />
    </div>
  );
}

export default Minority;
