import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllCars } from 'redux/cars/cars.operations';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const Favorites = lazy(() => import('pages/FavoritePage/FavoritePage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  return (
    <Layout>
      <Suspense fallback={<p>loading</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cars" element={<MainPage />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};
