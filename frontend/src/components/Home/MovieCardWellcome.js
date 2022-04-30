import React from 'react';
import './css/card.css';
//import EditMovie from './EditMovie';

import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

class MovieCard extends React.Component {
	render() {
		return (
			<div className="card-folder">
				<Card>
					<CardBody>
						<CardTitle>{this.props.movie.title}</CardTitle>
						<CardSubtitle>{this.props.movie.director}</CardSubtitle>
					</CardBody>
					<CardImg
						className="card-image"
						src={`https://image.tmdb.org/t/p/w500/${this.props.movie.poster_path}`}
						alt="movie image"
					/>
					<CardBody className="card-letters">
						<CardText>{`${this.props.movie.overview.substring(0, 200)}...`}</CardText>
						<CardText>
							<span>{this.props.movie.genre}</span>
							<span>{this.props.movie.vote_average}</span>
						</CardText>

						<CardText>{this.props.movie.updated_at}</CardText>
					</CardBody>
				</Card>
			</div>
		);
	}
}

export default MovieCard;
