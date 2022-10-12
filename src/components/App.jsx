import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Cast } from '../components/Cast/Cast';
import { Review } from '../components/Review/Review';
import { SharedLayout } from './SharedLayout/SharedLayout.jsx'
import { Loading } from './App.styled'

const NotFound = lazy(() => import('../pages/NotFound'));
const Searchbar = lazy(() => import('./Searchbar.jsx/Searchbar'));
const MovieView = lazy(() => import('../pages/MovieView'));
const Home = lazy(() => import('../pages/Home'));


export const App = () => {
  return (
    <div>
      <Suspense fallback={<Loading>Loading ...</Loading>}>
      <Routes>
          <Route path="/" end element={<SharedLayout />}>
         
          <Route index element={<Home />} />
          <Route path="movies" element={ <Searchbar />} />
          <Route path="movies/:movieId" element={<MovieView />} >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Review />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />}/>
      </Routes>
      </Suspense>
    </div>
  );
};
