import React from 'react';
import { render, screen } from '@testing-library/react';
import Banner from './Banner';
import { MemoryRouter } from "react-router-dom";

describe('Banner Component', () => {
    it('renders correctly Banner', () => {
        render(<MemoryRouter>
            <Banner />
        </MemoryRouter>);
        // Add your assertions here

        // Example assertion: Check if the component renders the title
        expect(screen.getByText('Get Start Now')).toBeInTheDocument();
    });
});

