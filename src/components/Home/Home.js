import { Container, Gallery, GalleryItem, MovieLink, Img, MovieName, MovieGenges } from './Home.styled';

export default function Home() {
  return (
    <Container>
      <div>Tranding Today</div>
      <Gallery>
        <GalleryItem>
          <MovieLink to={"/movies/1"}>
            <Img href="" alt="xxxxx" />
            <MovieName>Movie's Name</MovieName>
            <MovieGenges>movie's ganres</MovieGenges>
          </MovieLink>
        </GalleryItem>

		<GalleryItem>
          <MovieLink>
            <Img href="" alt="xxxxx" />
            <MovieName>Movie's Name</MovieName>
            <MovieGenges>movie's ganres</MovieGenges>
          </MovieLink>
        </GalleryItem>

		<GalleryItem>
          <MovieLink>
            <Img href="" alt="xxxxx" />
            <MovieName>Movie's Name</MovieName>
            <MovieGenges>movie's ganres</MovieGenges>
          </MovieLink>
        </GalleryItem>

		<GalleryItem>
          <MovieLink>
            <Img href="" alt="xxxxx" />
            <MovieName>Movie's Name</MovieName>
            <MovieGenges>movie's ganres</MovieGenges>
          </MovieLink>
        </GalleryItem>

		<GalleryItem>
          <MovieLink>
            <Img href="" alt="xxxxx" />
            <MovieName>Movie's Name</MovieName>
            <MovieGenges>movie's ganres</MovieGenges>
          </MovieLink>
        </GalleryItem>
      </Gallery>
    </Container>
  );
}
