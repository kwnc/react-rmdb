import React, { useState, useEffect } from 'react';
// API
import API from "../API";
// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
// Components
import HeroImage from './heroImage';
import Grid from './grid';
import Thumb from './thumb';
import Spinner from './spinner';
import SearchBar from './searchBar';
// Hook
import {useHomeFetch} from "../hooks/useHomeFetch";
// Image
import NoImage from "../images/no_image.jpg"

const Home = () => {
    const {state, loading, error, searchTerm, setSearchTerm} = useHomeFetch();

    console.log(state);

    return (
        <>
            {!searchTerm && state.results[0] ? (
                <HeroImage
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                title={state.results[0].original_title}
                text={state.results[0].overview} />
            ) : null
            }
            <SearchBar setSearchTerm={setSearchTerm} />
            <Grid header={searchTerm ? "Search result" : "Popular movies"}>
                {state.results.map(movie => (
                    <Thumb
                    key={movie.movieId}
                    clickable={true}
                    image={
                        movie.poster_path
                        ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                        : NoImage
                    }
                    movieId={movie.movieId}
                />
                ))}
            </Grid>
            <Spinner/>
        </>
    )
}

export default Home;