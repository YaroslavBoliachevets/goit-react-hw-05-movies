import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCast } from 'services/api';
import { Gallery, Actor } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const [base_url] = useState('https://image.tmdb.org/t/p/w500');

  const params = useParams();
  console.log(params);

  useEffect(() => {
    getMovieCast(params.movieId).then(({ cast }) => {
      setCast(cast);
    });
  }, [params]);

  useEffect(() => {
    if (cast === null) return;

    console.log(cast);
  }, [cast]);

  return (
    <>
      <Gallery>
        {cast &&
          cast.map(({ name, character, profile_path }) => {
            return (
              <Actor key={name}>
                <img src={base_url + profile_path} alt="Actor" width="150px" />
                <p>{name}</p>
                <p>{character}</p>
              </Actor>
            );
          })}
      </Gallery>
    </>
  );
};

export default Cast;
