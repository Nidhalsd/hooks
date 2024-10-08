import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './MovieCard.css'; 

const MovieCard = ({ movie }) => {
    return (
        <Card style={{ width: '18rem' }} className="mb-4 movie-card">
            <Card.Img variant="top" src={movie.posterURL} alt={`${movie.title} poster`} />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                    {movie.description}
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                    <Button variant="primary">Watch Now</Button>
                    <span className="badge bg-secondary">Rating: {movie.rating}</span>
                </div>
            </Card.Body>
        </Card>
    );
};

export default MovieCard;
