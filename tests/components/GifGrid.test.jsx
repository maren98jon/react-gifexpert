import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/componentes";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe('Pruebas en <GifGrid />', () => { 

    const category = 'Holanda';

    test('debe de mostrar el loading inicialmente', () => { 

        useFetchGifs.mockReturnValue({
            images:[],
            isLoading: true
        });

        render(<GifGrid category={category}/>);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));

     });

     test('debe de mostrar items cuando se cargan las imagenes', () => { 

        const gifs = [{
            id: 'ABC',
            title: 'Holanda',
            url: 'https://maren.dev/holanda.jpg'
        },
        {
            id: 'BCD',
            title: 'Belgica',
            url: 'https://maren.dev/belgica.jpg'
        }];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category}/>);

        expect(screen.getAllByRole('img').length).toBe(2);


      });

 });