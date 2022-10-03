import { useEffect, useState } from 'react';
import {
  Gallery,
  GalleryItem,
  MovieLink,
} from './Home.styled';
import {fetchTranding} from "../../services/api";

export default function Home() {
  const [tranding, setTranding] = useState([]);

  useEffect(() => {
    fetchTranding().then(tranding => {
      setTranding(tranding);
    });
  }, []);

  return (
    <>
      <div>Tranding Today</div>
      <Gallery>
        {tranding.results && tranding.results.map(movie => (
                  <GalleryItem key={movie.id}>
                  <MovieLink to={`/movies/${movie.id}`}>
                    {movie.name} {movie.title}
                  </MovieLink>
                </GalleryItem>
        ))}
      </Gallery>
    </>
  );
}