import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';

import NowPlaying from './pages/Home';
import Movie from './pages/Movie';
import Spinner from './components/Spinner';

export default function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Route exact path="/">
        <NowPlaying />
      </Route>
      <Route path="/:movieTitle">
        <Movie />
      </Route>
    </Suspense>
  );
}
