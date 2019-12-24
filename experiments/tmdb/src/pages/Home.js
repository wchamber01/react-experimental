import React from 'react';

import NowPlaying from '../components/movies/NowPlaying';

import css from '../css/Home.module.css';

export default function Home() {
  return (
    <div className={css.container}>
      <NowPlaying />
    </div>
  );
}
