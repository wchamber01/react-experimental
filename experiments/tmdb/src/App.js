import React, { Suspense } from 'react';
import { Router } from '@reach/router';

import Header from './components/Header';
import NowPlaying from './components/movies/NowPlaying';

export default function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <NowPlaying path="/" />
        </Router>
      </Suspense>
    </>
  );
}
