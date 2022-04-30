import React from 'react';
import MoviesList from './MoviesList';

import './css/home.css';
import UserHead from '../Header/UserHead';
import AddMovie from './AddMovie';
import axios from 'axios';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		axios.get('http://api.themoviedb.org/3/movie/popular?api_key=12f10783333f61bb21ed19aa9667e3fe').then((results) => {
			console.log(results);

			this.setState({ movies: results.data['results'] });
			console.log(this.state.movies);
		});
	}
	onAddMoviePressed = (value) => {
		this.setState({
			movies: this.state.movies.concat(value)
		});
	};
	onEditMoviePressed = (value) => {
		this.setState({
			movies: this.state.movies.concat(value)
		});
	};
	render() {
		return (
			<div className="App">
				<UserHead />

				<div className="movie-frame">
					<AddMovie addMovieFunction={(value) => this.onAddMoviePressed(value)} />
				</div>
				<MoviesList />

			</div>
		);
	}
}

export default Home;
