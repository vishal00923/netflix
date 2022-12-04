const api_key = process.env.REACT_APP_TMDB_KEY;

export const fetchTrending = `/trending/all/week?api_key=${api_key}`;
export const fetchNetflixOriginals = `/discover/tv?api_key=${api_key}&with_networks=123&language=en-US`;
export const fetchTopRated = `/movie/top_rated?api_key=${api_key}&language=en-US&include_adult=true&include_video=true`;
export const fetchActionMovies = `/discover/movie?api_key=${api_key}&with_genres=28&language=en-US&include_adult=true&include_video=true`;
export const fetchComedyMovies = `/discover/movie?api_key=${api_key}&with_genres=35&language=en-US&include_adult=true&include_video=true`;
export const fetchHorrorMovies = `/discover/movie?api_key=${api_key}&with_genres=27&language=en-US&include_adult=true&include_video=true`;
export const fetchRomanceMovies = `/discover/movie?api_key=${api_key}&with_genres=10749&language=en-US&include_adult=true&include_video=true`;
export const fetchDocumentaries = `/discover/movie?api_key=${api_key}&with_genres=&language=en-US&include_adult=true&include_video=true`;
