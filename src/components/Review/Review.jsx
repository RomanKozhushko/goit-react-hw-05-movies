import { fetchRewiesMovies } from 'API/api-services';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsItem } from '../Review/ReviewsItem';

export const Review = () => {
  const [movieReviews, setMovieReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchRewiesMovies(movieId).then(data => {
      setMovieReviews(data.results);
    });
  }, [movieId]);

  return (
    <>
      {movieReviews && movieReviews.length ? (
        <ul>
          {movieReviews.map(item => {
            return (
              <li key={item.id}>
                <ReviewsItem reviews={item}></ReviewsItem>
              </li>
            );
          })}
        </ul>
      ) : (
        <p> No data</p>
      )}
    </>
  );
};
