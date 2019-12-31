import React from 'react';

import NowPlaying from '../components/movies/NowPlaying';

import useWindowWidth from '../lib/useWindowWidth';

import css from '../css/Home.module.css';

export default function Home() {
  const width = useWindowWidth();

  return (
    <div className={css.container}>
      <NowPlaying width={width} />
    </div>
  );
}
