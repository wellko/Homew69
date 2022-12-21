import React, {useState} from 'react';
import {Autocomplete, TextField} from "@mui/material";
import {fetchMovies} from "../../store/MoviesThunks";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {selectMovies} from "../../store/MoviesSlice";
import {useNavigate} from "react-router-dom";

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
        navigate('shows/' + (Movies[0].show.id).toString())
    }


    return (
        <div>
            <form onSubmit={onSubmit}>
                <Autocomplete
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
                    options={Movies.map((option: OptionProps) => option.show.name)}
                    renderInput={(params) => <TextField {...params} label="Search"/>}/>
                <button type='submit'>Search</button>
            </form>

        </div>
    );
};

export default SearchForm;