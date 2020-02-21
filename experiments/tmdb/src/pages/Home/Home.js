import React from 'react';

import NowPlaying from './NowPlaying';
import Upcoming from './Upcoming';

import css from './css/Home.module.css';

export default function Home() {
  return (
    <>
      <div className={css.dynamicPaddingTop}></div>
      <main className={css.container}>
        <h2>Now Playing</h2>
        <div className="description">Movies now playing in theaters.</div>
        <NowPlaying />
        <h2>Upcoming</h2>
        <div className="description">Movies coming soon to theaters.</div>
        <Upcoming />
      </main>
    </>
  );
}
