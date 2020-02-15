import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home, Movie } from './pages';
import { Spinner } from './components/Spinner';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path=":movieId/*" element={<Movie />} />
      </Routes>
      <Footer />
    </Suspense>
  );
}
