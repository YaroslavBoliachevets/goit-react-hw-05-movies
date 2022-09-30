import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Movies from './Movies';
import MovieDetails from './MovieDetails';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home/>}></Route>
        <Route path="movies" element={<Movies/>}></Route>
        <Route path="movies/1" element={<MovieDetails/>}></Route>
        <Route path="*" element={<div>Page not found</div>}></Route>
      </Route>
    </Routes>
  );
};
