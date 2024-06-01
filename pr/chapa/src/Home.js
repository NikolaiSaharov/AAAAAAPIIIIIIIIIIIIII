import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_KEY = "CQCZADV-A6EM78D-GB7RYVT-2YM7NKF";

function Home() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (query.trim() !== '') {
      navigate(`/search?query=${query}`);
    }
  };

  return (
    <Row className="justify-content-center mt-5">
      <Col md={6}>
        <Form onSubmit={handleSearch}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Поиск фильмов/сериалов</Form.Label>
            <Form.Control
              type="text"
              placeholder="Введите название"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Поиск
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default Home;