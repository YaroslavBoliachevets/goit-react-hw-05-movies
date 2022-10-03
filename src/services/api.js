import axios from 'axios';

async function fetchTranding() {
    const responce = await axios.get(
      'https://api.themoviedb.org/3/trending/all/day?api_key=5692dca6012d3660a336300872bd664c'
    );
    return responce.data;
  }

  async function getMovieByID(id) {
    const responce = await axios.get(`
    https://api.themoviedb.org/3/movie/${id}?api_key=5692dca6012d3660a336300872bd664c&language=en-US`)
    return responce.data;
  }
  export {fetchTranding, getMovieByID};

  // .then(responce => console.log(responce.data))