import { Link, Outlet } from 'react-router-dom';
import { MovieCard, Img, Info, BackBtn } from './MovieDetails.styled';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieByID } from 'services/api';
import makeGenres from 'utils/makeGenres';
import makeImg from 'utils/makeImg';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState(null);
  const [img, setImg] = useState(null);

  const params = useParams();

  useEffect(() => {
    getMovieByID(params.movieId).then(setMovie);
  }, []);


  useEffect(() => {
    setGenres(makeGenres(movie));
    setImg(makeImg(movie));
  }, [movie]);

  return (
    <>
      <BackBtn> Go back</BackBtn>

      {
        <MovieCard>
          <Img src={img} alt="x"  />
          <Info>
            <h2>
              {movie.title} {movie.name}
            </h2>
            <p>User Score: {movie.vote_average * 10} %</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <p>{genres}</p>
          </Info>
        </MovieCard>
      }

      <div>
        <h2>Additional information:</h2>
        <ul>
          <li>
            <Link to={'cast'}>Cast</Link>
          </li>
          <li>
            <Link to={'reviews'}>Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
