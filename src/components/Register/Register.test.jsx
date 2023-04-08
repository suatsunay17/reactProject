import { render, fireEvent, screen } from '@testing-library/react';
import { Register } from './Register';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const mockRegisterSubmit = jest.fn();

const setup = () => {
    render(
        <AuthContext.Provider value={{ onRegisterSubmit: mockRegisterSubmit }}>
            <Register />
        </AuthContext.Provider>
    )
}

describe('Register component', () => {
    test('renders Register Page heading', () => {
        setup();
        const headingElement = screen.getByText('Register Page');
        expect(headingElement).toBeInTheDocument();
    });

    it('renders register form correctly', () => {
        setup();
        expect(screen.getByText(/register page/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByTestId('password-input')).toBeInTheDocument();
        expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /register here/i })).toBeInTheDocument();
    });

    it('submits register form when the button is clicked', () => {
        setup();
        fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@test.com' } });
        fireEvent.change(screen.getByTestId('password-input'), { target: { value: 'test123' } });
        fireEvent.change(screen.getByLabelText(/confirm password/i), { target: { value: 'test123' } });
        fireEvent.click(screen.getByRole('button', { name: /register here/i }));
        expect(mockRegisterSubmit).toHaveBeenCalledTimes(1);
    });
});

