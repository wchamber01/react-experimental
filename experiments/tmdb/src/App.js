import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Movie from './pages/Movie';
import Spinner from './components/Spinner';

export default function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:movieTitle" element={<Movie />} />
      </Routes>
    </Suspense>
  );
}
