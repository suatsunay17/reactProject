import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Header } from './Header';
import { BrowserRouter } from 'react-router-dom';

describe('Header Component', () => {

    test('should navigate to home page', async () => {
        global.window = { location: { pathname: null } };
        
            render(
                <BrowserRouter>
                    <Header isAuthenticated={false}/>
                </BrowserRouter>
            );

            await userEvent.click(screen.queryByText('Printopia'));

            expect(global.window.location.pathname).toContain('/');

        })
})

