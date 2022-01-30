import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { Button } from ".";

describe('<Buttom />', () => {
    it('should render the buttom with the text "More posts"', ()=> {
        render(<Button text="More posts"  />)
    
        expect.assertions(1);

        const button = screen.getByRole('button', {name: /more posts/i });
        expect(button).toBeInTheDocument();
    });

    it('should call function on button click', ()=> {
        const fn = jest.fn(); 
        render(<Button text="More posts" onClick={fn} />)
        

        const button = screen.getByRole('button', {name: /more posts/i });
        userEvent.click(button);
        expect(fn).toHaveBeenCalledTimes(1);
    });

    it('should be disabled when desabled is true', ()=> {
        render(<Button text="More posts" disabled={true} />)
    
        const button = screen.getByRole('button', {name: /more posts/i })
    
        expect(button).toBeDisabled();
    });
    
    it('should be enable when desabled is false', ()=> {
        render(<Button text="More posts" disabled={false} />)
    
        const button = screen.getByRole('button', {name: /more posts/i })
    
        expect(button).toBeEnabled();
    });
});