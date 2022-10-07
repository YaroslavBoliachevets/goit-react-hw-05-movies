import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchTranding } from '../../services/api';
// import {apiGenres} from '../../utils/genres';
// import {AiFillFire} from 'react-icons/ai';

import {
  Title,
  TitleIcon,
} from './Home.styled';
import Gallery from '../Gallery';

export default function Home() {
  const [tranding, setTranding] = useState();
  const location = useLocation();
  // const [base_url] = useState('https://image.tmdb.org/t/p/w500');

  // const imageNotFound =
  //   'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930';

  useEffect(() => {
    fetchTranding().then(setTranding);
  }, []);

  if (!tranding) {
    return null;
  }

  return (
    <>
      <div>
        <Title>
          <TitleIcon />
          Tranding Today
        </Title>
      </div>
      <Gallery movies={tranding.results} location={location}/>
    </>
  );
}
