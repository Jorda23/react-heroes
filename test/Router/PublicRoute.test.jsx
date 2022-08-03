import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { PublicRoute } from "../../src/Router/PublicRoute";
import { MemoryRouter, Routes, Route } from 'react-router-dom'

describe('pruebas en <PublicRoute />', () => { 
    
    test('debe de mostar el children si no está autenticado', () => { 

        const contextValue = {
            logged: false
        }

        render (
            <AuthContext.Provider value={ contextValue }>
                <PublicRoute >
                    <h1>Ruta Publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
        )

        expect( screen.getByText('Ruta Publica') ).toBeTruthy();
    });

    test('debe de navegar si esta autenticado', () => {
        const contextValue = {
            logged: true,
            user: {
                name: 'Brandly',
                id: 'roc3462s'
            }
        }

        render (
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/login']}>

                    <Routes >
                        <Route path='login' element={
                            <PublicRoute >
                                <h1>Ruta Publica</h1>
                            </PublicRoute>
                        } />

                        <Route path='marvel' element={ 
                            <h1>Pagina de marvel</h1> 
                        }/>
                    </Routes>
                    
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect( screen.getByText('Pagina de marvel') ).toBeTruthy();
    });
});