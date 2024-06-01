import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import MovieCard from './MovieCard';
import axios from 'axios';

const API_KEY = "CQCZADV-A6EM78D-GB7RYVT-2YM7NKF";

const searchMovies = async (query) => {
  try {
    const response = await axios.get(`https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=10&query=${query}`, {
      headers: {
        'X-API-KEY': API_KEY,
      },
    });
    return response.data.docs;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

function SearchMovies() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('query');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (query) {
      searchMovies(query).then(setMovies);
    }
  }, [query]);

  return (
    <Row>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} /> 
      ))}
    </Row>
  );
}

export default SearchMovies;