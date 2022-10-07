import {lazy} from 'react';
import { Route, Routes,  } from 'react-router-dom';
import Layout from './Layout';

const Movies = lazy(() => import('./Movies'));
const Home = lazy(() => import('./Home'));
const MovieDetails = lazy(()=> import('./MovieDetails'));
const Cast = lazy(()=> import('./Cast'));
const Reviews = lazy(()=> import('./Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />}></Route>
        <Route path="movies" element={<Movies />}></Route>
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>
        <Route path="*" element={<div><i>Page not found, but you can see</i><Home /></div> }></Route>
      </Route>
    </Routes>
  );
};
