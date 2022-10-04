const makeImg = ({poster_path:posterPath}) => {
  const imgSrc = `https://image.tmdb.org/t/p/w500`;
  let imgLink = `${imgSrc}${posterPath}`;
  if (!posterPath) {
    imgLink = 'https://i.ibb.co/BrYLsTv/default-movie-poster-min.jpg';
  }
  // console.log(imgLink);
  return imgLink;
};

export default makeImg;
