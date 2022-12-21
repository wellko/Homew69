import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {fetchMovie} from "../../store/MovieThunks";
import {useParams} from "react-router-dom";
import {selectMovie} from "../../store/MovieSlice";
import Spinner from "../Spinner/Spinner";

const Movie = () => {
	const {id} = useParams();

	const movie = useAppSelector(selectMovie);

	const dispatch = useAppDispatch();


	useEffect(() => {
		dispatch(fetchMovie(id!))
	}, [dispatch, id])

	return (
		<div className='container'>
			{movie.loading ? <Spinner/> : (
				<div className='row'>
					<div className="card shadow-lg col-3">
						<img className="card-img-top" src={movie.oneMovie.image?.medium} alt="there is no poster yet"/>
						<div className="card-body">
							<p className='card-header'>Name:<b>{movie.oneMovie.name}</b></p>
							<p className="card-text border-top">{movie.oneMovie.genres.map((item) => item + ', ')}</p>
							<p className="card-text border-top">Language : {movie.oneMovie.language}</p>
						</div>
					</div>
					<p className="col-9 border-top" dangerouslySetInnerHTML={{__html: movie.oneMovie.summary}}></p>
				</div>)}
		</div>
	);
};

export default Movie;