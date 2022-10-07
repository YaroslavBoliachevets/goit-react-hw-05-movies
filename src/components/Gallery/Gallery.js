import { useState } from 'react';

import {
  CardsGallery,
  MovieCard,
  MovieLink,
  CardImg,
  Name,
  Genres,
} from './Gallery.styled';

import { useLocation } from 'react-router-dom';

export default function Gallery({movies}) {
  const location = useLocation();
  const [base_url] = useState('https://image.tmdb.org/t/p/w500');
  const imageNotFound =
    'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930';

  return (
    <CardsGallery>
      {movies.map(movie => (
        <MovieCard key={movie.id}>
          <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
            <CardImg
              src={
                movie.poster_path ? base_url + movie.poster_path : imageNotFound
              }
              alt={movie.title}
            />
            <Name>
              {movie.name} {movie.title}
            </Name>
            <Genres>Genres</Genres>
            {/* <Genres>{movie.genre_ids.map((id)=>{return apiGenres.find(apiGenre=> apiGenre.id === id) })}</Genres> */}
          </MovieLink>
        </MovieCard>
      ))}
    </CardsGallery>
  );
}
