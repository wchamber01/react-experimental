import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';

import Spinner from './components/Spinner';
import NowPlaying from './components/movies/NowPlaying';
import Movie from './pages/Movie';

export default function App() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Route exact path="/">
          <NowPlaying />
        </Route>
        <Route path="/:movieTitle">
          <Movie />
        </Route>
      </Suspense>
    </>
  );
}
