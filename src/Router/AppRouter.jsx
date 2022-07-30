import { Route, Routes } from 'react-router-dom';
import { LoginPages } from '../auth';
import { HeroRoutes } from '../heroes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {
  return (
    <>
      <Routes>
        
        <Route path="login" element={
          <PublicRoute >
            <LoginPages />
          </PublicRoute >
        } />

        <Route path="/*" element={
          <PrivateRoute >
            <HeroRoutes />
          </PrivateRoute >
        } />

        {/* <Route path="login" element={<LoginPages />} /> */}
        {/* <Route path="/*" element={<HeroRoutes />} /> */}
      </Routes>
    </>
  );
};
