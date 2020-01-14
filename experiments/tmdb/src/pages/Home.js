import React from 'react';

import NowPlaying from '../components/movies/NowPlaying';

import css from '../css/Home.module.css';
import Upcoming from '../components/movies/Upcoming';

export default function Home() {
  return (
    <div className={css.container}>
      <NowPlaying />
      <Upcoming />
    </div>
  );
}
