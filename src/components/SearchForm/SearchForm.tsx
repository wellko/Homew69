import React, {useState} from 'react';
import {Autocomplete, TextField} from "@mui/material";
import {fetchMovies} from "../../store/MoviesThunks";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {selectMovies} from "../../store/MoviesSlice";
import {useNavigate} from "react-router-dom";
import Spinner from "../Spinner/Spinner";

interface OptionProps {
	show: {
		name: string,
	}
}

const SearchForm = () => {
	const [searching, setSearching] = useState<string | null>(null);

	const [inputValue, setInputValue] = React.useState('');

	const Movies = useAppSelector(selectMovies);

	const navigate = useNavigate();

	const dispatch = useAppDispatch();

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		navigate('shows/' + (Movies.movie[0].show.id).toString())
	}


	return (
		<div className='container mt-5 mb-3'>
			<form onSubmit={onSubmit}>
				<div className='row'>
					<Autocomplete
						className='w-75'
						onChange={(event: any, newValue: string | null) => {
							setSearching(newValue);
						}}
						freeSolo
						value={searching}
						inputValue={inputValue}
						onInputChange={(event, newInputValue) => {
							setInputValue(newInputValue);
							dispatch(fetchMovies(newInputValue))
						}}
						options={Movies.movie.map((option: OptionProps) => option.show.name)}
						renderInput={(params) => <TextField {...params} label="Search"/>}/>
					<button disabled={Movies.loading} className='btn btn-outline-dark col-1'
							type='submit'>{Movies.loading ? <Spinner/> : 'Search'}</button>
				</div>
			</form>

		</div>
	)
		;
};

export default SearchForm;