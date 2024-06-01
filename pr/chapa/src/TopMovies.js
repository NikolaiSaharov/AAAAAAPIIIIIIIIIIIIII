import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import MovieCard from './MovieCard';
import axios from 'axios';


const API_KEY = "CQCZADV-A6EM78D-GB7RYVT-2YM7NKF";

const getTopMovies = async () => {
  const response = await axios.get('https://api.kinopoisk.dev/v1.3/movie?sortField=year&sortType=-1&limit=10', {
    headers: {
      'X-API-KEY': API_KEY,
    },
  });
  return response.data.docs;
};

function TopMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTopMovies().then(setMovies).catch(console.error);
  }, []);

  return (
    <Row className="justify-content-center">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </Row>
  );
}

export default TopMovies;