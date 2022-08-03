import { render, screen } from '@testing-library/react';
import { AppRouter } from '../../src/Router/AppRouter';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../src/auth';

describe('Pruebas en AppRouter', () => {
    
    test('Debe de mostar el login si no esta autenticado', () => {

        const contextValue = {
            logged: false,
        }

      render (
        <MemoryRouter initialEntries={['/marvel']}>
            <AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider> 
        </MemoryRouter>
      );
     
     //screen.debug();
      expect( screen.getAllByText('Login').length ).toBe(2);
    
    });

    test('debe de mostar el componente de marvel si esta autenticado', () => {
        const contextValue = {
            logged: true,
            user: {
                id: 'ABC',
                name: 'Cosmo'
            }
        }

      render (
        <MemoryRouter initialEntries={['/login']}>
            <AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider> 
        </MemoryRouter>
      );
     
        //screen.debug();
        expect( screen.getAllByText('Marvel').length ).toBeGreaterThanOrEqual(1); //mas de una vez
    });

});