 const API_KEY="d4ceabdd4602b50dfbba040823846ef4";
 const requests={
     fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
     fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
     fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
     fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
     fetchComdeyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
     fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
     fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
     fetchDocumentaryMovies:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
 }
 export default requests;