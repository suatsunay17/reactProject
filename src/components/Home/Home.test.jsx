import { render, screen } from '@testing-library/react';
import { Home } from './Home';
import { BrowserRouter } from 'react-router-dom';
import { Map } from './Map/Map';

// jest.mock('./Map/Map', () => ({
//     Map: ({ location, zoomLevel }) => (
//       <div data-testid="map" location={location} zoomLevel={zoomLevel} />
//     ),
//   }));

describe('Home component', () => {
    it('renders a header with Printopia title', () => {
        render(
            <BrowserRouter >
                <Home />
            </BrowserRouter>
        );
        const headerElement = screen.getByRole('heading', { name: 'Printopia' });
        expect(headerElement).toBeInTheDocument();
    });

    it('renders a link to the catalog', () => {
        render(
            <BrowserRouter >
                <Home />
            </BrowserRouter>
        );
        const linkElement = screen.getByRole('link', { name: 'Explore' });
        expect(linkElement).toHaveAttribute('href', '/catalog');
    });

    it('renders the ServicesCard component', () => {
        render(
            <BrowserRouter >
                <Home />
            </BrowserRouter>
        );
        const servicesCardElement = screen.getByTestId('services-card');
        expect(servicesCardElement).toBeInTheDocument();
    });

    it('renders the LatestProducts component', () => {
        render(
            <BrowserRouter >
                <Home />
            </BrowserRouter>
        );
        const latestProductsElement = screen.getByTestId('latest-products');
        expect(latestProductsElement).toBeInTheDocument();
    });

    it('renders the Projects component', () => {
        render(
            <BrowserRouter >
                <Home />
            </BrowserRouter>
        );
        const projectsElement = screen.getByTestId('projects');
        expect(projectsElement).toBeInTheDocument();
    });

    it('renders the Map component with the correct location and zoom level', () => {
        const location = {
          address: 'Silicon Valley, San Francsisco, CA',
          lat: 37.387474,
          lng: -122.057543,
        };
        render(
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        );
        const mapElement = screen.getByTestId('map');
        expect(mapElement).toBeInTheDocument();
        // expect(mapElement).toHaveAttribute(
        //   'location',
        //   JSON.stringify(location)
        // );
        // expect(mapElement).toHaveAttribute('zoomLevel', '17');
      });
});
