import { Link, Outlet } from 'react-router-dom';
import { MovieCard, Img, Info, BackBtn } from './MovieDetails.styled';
import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getMovieDetails } from 'services/api';
import makeGenres from 'utils/makeGenres';
import makeImg from 'utils/makeImg';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState(null);
  const [img, setImg] = useState(null);

  const params = useParams();
  const location = useLocation();

  // console.log(location.state.from);

  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    getMovieDetails(params.movieId);
    getMovieDetails(params.movieId).then(setMovie);
  }, [params]);

  useEffect(() => {
    setGenres(makeGenres(movie));
    setImg(makeImg(movie));
  }, [movie]);

  return (
    <>
      <BackBtn to={backLinkHref}> Go back</BackBtn>

      {
        <MovieCard>
          <Img src={img} alt="movie" />
          <Info>
            <h2>
              {movie.title} {movie.name}
            </h2>
            <p>User Score: {movie.vote_average}</p>
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
            <Link to={'cast'} state={{ from: backLinkHref }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to={'reviews'} state={{ fron: backLinkHref }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
