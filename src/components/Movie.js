import propTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({
  coverImg,
  title,
  rating,
  genres,
  runtime,
  year,
  summary,
  id,
  movie_style,
}) {
  return (
    <div className={styles.movie} style={movie_style}>
      <img src={coverImg} alt={title} className={styles.movie_img} />
      <div>
        <h2 className={styles.movie_title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p className={styles.movie_summary}>
          {summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}
        </p>
        <ul className={styles.movie_genres}>
          {genres && genres.map((g) => <li key={g}> {g} </li>)}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  coverImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  rating: propTypes.number.isRequired,
  genres: propTypes.arrayOf(propTypes.string),
};

export default Movie;
