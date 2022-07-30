import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth';

//para crear las rutas privadas, cuando una persona no sea a registrado en la app
export const PrivateRoute = ({ children }) => {

    const { logged } = useContext( AuthContext );
    const { pathname, search } = useLocation();

    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath );

    return ( logged ) //(logged === true)  esto es igual a (logged)
    ? children
    : <Navigate to="/login" />
}
