import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCast } from 'services/api';
import { Gallery, Actor } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const [base_url] = useState('https://image.tmdb.org/t/p/w500');
  const imageNotFound =
    'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930';

  const params = useParams();
  const location = useLocation();
  console.log('cast', location.state);

  useEffect(() => {
    getMovieCast(params.movieId).then(({ cast }) => {
      setCast(cast);
    });
  }, [params]);

  useEffect(() => {
    if (cast === null) return;
  }, [cast]);

  return (
    <>
      <Gallery>
        {cast &&
          cast.map(({ name, character, profile_path }) => {
            return (
              <Actor key={name}>
                <img
                  src={profile_path ? base_url + profile_path : imageNotFound}
                  alt="Actor"
                  width="150px"
                />
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
