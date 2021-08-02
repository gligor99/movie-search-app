import React from "react";
import { Card, Container, Row, Col,  } from 'react-bootstrap'

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg";

const Movie = ({ movie }) => {

  const poster = movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

  return (
    <div className="movie">
      <Container fluid="true">
        <Row>
          <Col md="auto">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" width="200" height="400" alt={`The movie titled: ${movie.Title}`} src={poster} />
              <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>
                  {movie.Year}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};


export default Movie;