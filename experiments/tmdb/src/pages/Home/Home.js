import React from 'react';

import NowPlaying from './NowPlaying';
import Upcoming from './Upcoming';

import css from './css/Home.module.css';

export default function Home() {
  return (
    <>
      <div className={css.dynamicPaddingTop}></div>
      <div className={css.container}>
        <NowPlaying />
        <Upcoming />
      </div>
    </>
  );
}
