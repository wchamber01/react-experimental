import React from 'react';

import NowPlaying from '../../components/movies/NowPlaying';
import Upcoming from '../../components/movies/Upcoming';

import css from './Home.module.css';

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
