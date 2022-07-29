import { Route, Routes } from 'react-router-dom';
import { LoginPages } from '../auth';
import { HeroRoutes } from '../heroes';


export const AppRouter = () => {
  return (
    <>
      <Routes>
      
        <Route path="login" element={<LoginPages />} />

        <Route path="/*" element={<HeroRoutes />} />
      
      </Routes>
    </>
  );
};
