import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class List extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: [],
			deleted: false
		};
	}

	componentDidMount() {
		const url = `http://api.themoviedb.org/3/movie/popular?api_key=12f10783333f61bb21ed19aa9667e3fe`;
		console.log(url);
		axios
			.get(url)
			.then((res) => {
				console.log(res.data);
				const movies = res.data;
				this.setState({
					movies: movies
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}

	removeMovie = (e) => {
		console.log('it works with remove!');
		if (typeof this.props.removeClick === 'function') {
			this.props.removeClick(e);
		} else {
			console.log("Doesn't work with remove");
		}
	};

	render() {
		if (this.state.deleted === true) {
			return <Redirect to="/home" />
		}
		let movies = this.state.movies.map((e) => (
			<ul onClick={this.editMovie}>
				<li data-id={e.id}>{e.title}</li>
				<li data-id={e.id}>{e.type}</li>
				<li data-id={e.id}>{e.description}</li>
				<button onClick={this.removeMovie}>Delete</button>
			</ul>
		));

		return <div>{movies}</div>;
	}
}

export default List;
