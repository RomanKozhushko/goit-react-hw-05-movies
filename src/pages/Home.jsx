import { useEffect, useState } from 'react';
import { FilmList } from '../components/FilmList/FilmList';
import { fetchPopMovies } from '../API/api-services';


export default function Home() {
  const [popMoviesList, setPopMoviesList] = useState([]);
  
  useEffect(() => {
    
    fetchPopMovies().then(data => {
        setPopMoviesList(data.results);
        console.log(data.results);
    });
  }, []);

  return <FilmList filmList={popMoviesList} />;
}