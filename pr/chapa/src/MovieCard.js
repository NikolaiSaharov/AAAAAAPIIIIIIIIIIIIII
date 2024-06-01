import React from 'react';
import { Card, Col } from 'react-bootstrap';
import styled from 'styled-components';

function MovieCard({ movie }) {
  return (
    <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
      <StyledCard>
        {movie.poster && movie.poster.url && <Card.Img variant="top" src={movie.poster.url} alt={movie.name} />}
        <Card.Body>
          <Card.Title>{movie.name}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
        </Card.Body>
      </StyledCard>
    </Col>
  );
}

const StyledCard = styled(Card)`
  border: none;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  .card-img-top {
    width: 100%;
    height: auto;
    border-radius: 10px 10px 0 0;
  }
  .card-title {
    font-size: 1rem;
  }

  .card-text {
    font-size: 0.8rem; 
  }

  .card-img-top {
    height: 200px; 
    object-fit: cover; 
  }

  .card-body {
    padding: 1.25rem;
  }
`;

export default MovieCard;