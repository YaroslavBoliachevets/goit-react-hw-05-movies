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

  async function getMovieCast(id) {
    const responce =await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=5692dca6012d3660a336300872bd664c&language=en-US`);

    return await responce.data;
  }

  async function getReviews(id) {
    const responce = await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=5692dca6012d3660a336300872bd664c&language=en-US&page=1`);

    return await responce.data
  }

  async function getMoviesBySearch(query) {
    const responce = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=5692dca6012d3660a336300872bd664c&language=en-US&query=${query}&page=1&include_adult=false`);
    return responce.data;
  }

  async function getMovieDetails(id) {
    const responce = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=5692dca6012d3660a336300872bd664c&language=en-US`);
    return responce.data;
  }

  export {fetchTranding, getMovieByID, getMovieCast, getReviews, getMoviesBySearch, getMovieDetails};
