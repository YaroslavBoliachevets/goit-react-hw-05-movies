import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Movies from './Movies';
import MovieDetails from './MovieDetails';
import Cast from './Cast';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />}></Route>
        <Route path="movies" element={<Movies />}></Route>
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route
            path="reviews"
            element={<div>REVIEWSSSSSSSSSSS REVIEWSSSSS</div>}
          ></Route>
        </Route>

        <Route path="*" element={<div>Page not found</div>}></Route>
      </Route>
    </Routes>
  );
};
