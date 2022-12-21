import React from 'react';
import SearchForm from "./components/SearchForm/SearchForm";
import {Route, Routes} from "react-router-dom";
import Home from "./containers/Home/Home";
import Movie from "./components/Movie/Movie";


function App() {
    return (
        <div className="App">
            <SearchForm/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/shows/:id' element={<Movie/>}/>
            </Routes>
        </div>
    );
}

export default App;
