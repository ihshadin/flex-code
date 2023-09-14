import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import Footer from './Footer';

describe('Banner Component', () => {
    it('renders correctly Banner', () => {
        render(<MemoryRouter>
            <Footer />
        </MemoryRouter>);
        // Add your assertions here

        // Example assertion: Check if the component renders the title
        expect(screen.getByText('Contact Us')).toBeInTheDocument();
    });
});

