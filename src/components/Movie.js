import propTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({coverImg, title, rating, genres, runtime,year, summary,id}){
    return <div>
    <img src={coverImg} alt={title} />
    <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
    </h2>
    <h3>rating: {rating}</h3> 
    <h3>genres</h3>
    <ul>
        {genres && genres.map((g) => <li key={g}> {g} </li>) }
    </ul>    
</div>;
}

Movie.propTypes = {
    id: propTypes.number.isRequired,
    coverImg: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    rating: propTypes.number.isRequired,
    genres: propTypes.arrayOf(propTypes.string),
};


export default Movie;