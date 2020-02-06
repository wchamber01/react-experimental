import React from 'react';

import { NowPlaying, Upcoming } from '../../components/movies';

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
