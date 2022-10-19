import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { BackButton } from '../components/BackButton/BackButton';
import { fetchDetailsMovies } from '../API/api-services';
import { MovieCard } from '../components/MovieCard/MovieCard';

export default function MovieView() {
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchDetailsMovies(movieId).then(data => {
      setMovie(data);
    });
  }, [movieId]);

  return (
    <>
      <BackButton />
      {movie && <MovieCard movie={movie} />}
      <hr />

      <ul>
        <li>
          <Link
            state={location.state}
            to="cast"
            style={{
              color: 'lightpink',
              display: 'block',
              padding: '15px',
              fontSize: '26px',
              fontWeight: 'bold',
            }}
          >
            Cast
          </Link>
        </li>
        <li>
          <Link
            state={location.state}
            to="reviews"
            style={{
              color: 'lightpink',
              display: 'block',
              padding: '15px',
              fontSize: '26px',
              fontWeight: 'bold',
            }}
          >
            Review
          </Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}



 return (
    <>
      <BackButton />
      {movie && <MovieCard movie={movie} />}
      <hr />

      <ul>
        <li>
          <Link
            state={location.state}
            to="cast"
            style={{
              color: 'lightpink',
              display: 'block',
              padding: '15px',
              fontSize: '26px',
              fontWeight: 'bold',
            }}
          >
            Cast
          </Link>
        </li>
        <li>
          <Link
  