import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchPages } from '../../../src/heroes/pages/SearchPages';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));

describe('pruebas en el search pages', () => { 

    beforeEach(() => jest.clearAllMocks() ); //para limpiar cualquier mock
    
    test('debe mostrarse correctamenta con valores por defecto', () => { 
        const { container } = render(
            <MemoryRouter >
                <SearchPages />
            </MemoryRouter>
        );

        expect( container ).toMatchSnapshot();
    });

    test('debe de mostrar a batman y el input con valor del queryString', () => { 
        const { container } = render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPages />
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        expect( input.value ).toBe('batman');

        const img = screen.getByRole('img');
        expect( img.src ).toContain('/assets/heroes/dc-batman.jpg');

        const alert = screen.getByLabelText('showDiv');
        expect( alert.style.display ).toBe('none');
    });

    test('debe de mostar un error si no se encuentra  el heroe (batman123)', () => {
        const { container } = render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPages />
            </MemoryRouter>
        );

        const alert = screen.getByLabelText('showDiv');
        expect( alert.style.display ).toBe('');
    });

    test('debe de llamar el navigate a la pantalla nueva', () => {

        const initialValue = 'superman';

        const { container } = render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPages />
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        fireEvent.change( input, { target: { name: 'searchText', value: initialValue }})
        //console.log( input.value );

         const form = screen.getByRole('form');
         fireEvent.submit( form );
        
        expect( mockedUseNavigate ).toHaveBeenCalledWith(`?q=${initialValue}`);

    });
    
});