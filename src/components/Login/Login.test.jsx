import { render, screen, fireEvent } from '@testing-library/react';
import { AuthContext } from "../../contexts/AuthContext";
import { Login } from "./Login";

const mockLoginSubmit = jest.fn();

const setup = () => {
  render(
    <AuthContext.Provider value={{ onLoginSubmit: mockLoginSubmit }}>
      <Login />
    </AuthContext.Provider>
  );
};

describe('Login', () => {
  it('renders login form correctly', () => {
    setup();
    expect(screen.getByText(/login page/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /log in here/i })).toBeInTheDocument();
  });

  it('submits login form when the button is clicked', () => {
    setup();
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@test.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'test123' } });
    fireEvent.click(screen.getByRole('button', { name: /log in here/i }));
    expect(mockLoginSubmit).toHaveBeenCalledTimes(1);
  });
});
