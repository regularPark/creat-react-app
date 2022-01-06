import {useParams} from "react-router-dom";
import { useState, useEffect, useCallback } from 'react';

function Detail(){
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);


    const {id} = useParams();
    const getMovie = useCallback(async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        setLoading(false);        

    }, [id])
    useEffect(() => {
         getMovie();
    }, [getMovie]);
    console.log(movie);
    return (
    <div>
    {loading ? (<h1>Loading...</h1>) : (
        <div>
            <img src={movie.large_cover_image} alt={movie.title}/>
            <h1>{movie.title_long}</h1>
            <h2>Rating: {movie.rating}</h2>
            <h2>Runtime: {movie.runtime}</h2>
            <h2>genres {movie.genres && movie.genres.map((g) => <li key={g}> {g} </li>) }</h2>
            <hr/>
            <p>{movie.description_full}</p>
        </div>
        )
    }
    </div>
    );
}

export default Detail;