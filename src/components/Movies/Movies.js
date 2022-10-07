import { Outlet } from 'react-router-dom';
import {
  Box,
  InputSearchMovie,
  SearchBtn,
} from './Movies.styled';
import Gallery from '../Gallery';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesBySearch } from 'services/api';

function Movies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParamsValue = searchParams.get('query') ?? '';
  useEffect(() => {
    if (query !== searchParamsValue) {
      getMoviesBySearch(searchParamsValue).then(setMovies);
    }
  }, [searchParamsValue, query]);

  const handleChange = event => {
    const { value } = event.currentTarget;
    setQuery(value);
    setSearchParams(value !== '' ? { query: value } : {});
  };

  const onSubmit = event => {
    event.preventDefault();
    getMoviesBySearch(query).then(setMovies);
    setQuery('');
  };

  return (
    <>
      <Box>
        <form onSubmit={onSubmit}>
          <InputSearchMovie
            name="findMovies"
            placeholder="Movie search"
            value={searchParamsValue}
            onChange={handleChange}
          ></InputSearchMovie>
          <SearchBtn type="submit">Search</SearchBtn>
        </form>

        <Outlet />
      </Box>

      {movies && ((movies.results.length > 0) ? (
        <Gallery movies={movies.results}/>
      ) : (
        <h3>No info</h3>
      ))}
    </>
  );
}
export default Movies;
