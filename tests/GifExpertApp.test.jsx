import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en el <GifExpertApp/>', () => {

    test('debe de hacer match con el snapshot', () => { 

        const { container } = render(<GifExpertApp />);
        expect(container).toMatchSnapshot();

     });

     test('onAddCategory debe anyadir una categoria al principio',()=>{

        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        const inputValue = 'Argentina';

        fireEvent.input(input, { target: {value: inputValue}});
        fireEvent.submit(form);

        expect(screen.getAllByText(inputValue));
     })

 });