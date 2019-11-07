import React, { Suspense } from 'react';

import Header from './components/Header';
import NowPlaying from './components/movies/NowPlaying';

export default function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <NowPlaying />
      </Suspense>
    </>
  );
}
