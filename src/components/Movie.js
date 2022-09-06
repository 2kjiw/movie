import React from 'react';
import PropTypes from 'prop-types';
import './Movie.scss';

const Movie = ({id, title, year, summary, poster, genres}) => {
    return (
        <div className='movie'>
            <img src={poster} alt={title} title={title} />
            <div className='movie_data'>
                <h3 className='movie_title'>{title}</h3>
                <h5 className='movie_year'>{year}</h5>
                <h4>장르</h4>
                <ul className="movie_genres">
                    {genres.map((genre, index) => {
                        return <li key={index} className='movie_genre'>{genre}</li>
                    })}
                </ul>
                <p className='movie_summary'>{summary.slice(0,180)}</p>
            </div>
        </div>
    );
};

Movie.propTypes = {
    id: PropTypes.number.isRequired, //isRequired:필수사항 필수로 가져오기
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired, //string:문자
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired, //배열구조로 가져오기
}

export default Movie;