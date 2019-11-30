import React, { Suspense } from 'react';
import { Router } from '@reach/router';

import Header from './components/Header';
import Spinner from './components/Spinner';
import NowPlaying from './components/movies/NowPlaying';
import Movie from './components/movies/Movie';

export default function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Spinner />}>
        <Router>
          <NowPlaying path="/" />
          <Movie path=":movieTitle/:movieId" />
        </Router>
      </Suspense>
    </>
  );
}
