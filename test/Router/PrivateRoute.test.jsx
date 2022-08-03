import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../src/auth';
import { PrivateRoute } from '../../src/Router/PrivateRoute';
import { MemoryRouter } from 'react-router-dom'

describe('Pruebas en <PrivateRoute />', () => { 
    
    test('debe de mostar el children si no está autenticado', () => { 

        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged: true, 
            user: {
                id: 'hjlao',
                name: 'I am Groot'
            }
        }

        render (
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/serch?q=batman']}>
                    <PrivateRoute >
                        <h1>Ruta privada</h1>
                    </PrivateRoute >
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect( screen.getByText('Ruta privada') ).toBeTruthy();
        expect( localStorage.setItem ).toHaveBeenCalledWith("lastPath", "/serch?q=batman");
    });

});