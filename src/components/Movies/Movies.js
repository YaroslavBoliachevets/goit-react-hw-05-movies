import { Outlet } from 'react-router-dom';
import { Box, InputSearchMovie, SearchBtn } from './Movies.styled';

export default function Movies() {
  return (
    <Box>
      <InputSearchMovie
        name="findMovies"
        placeholder="Movie search"
      ></InputSearchMovie>
      <SearchBtn type="button">Search</SearchBtn>
      <Outlet/>
    </Box>
  );
}
