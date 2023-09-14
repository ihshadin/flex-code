import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './About';

describe('About Component', () => {
    it('renders correctly', () => {
        render(<About />);
        // Add your assertions here

        // Example assertion: Check if the component renders the title
        expect(screen.getByText('FlexCode')).toBeInTheDocument();
        expect(screen.getByText('(unlock the power of problem solving)')).toBeInTheDocument();
    });

    it('displays a list of technologies', () => {
        render(<About />);
        // Add your assertions here to check if the list of technologies is displayed correctly

        // Example assertion: Check if HTML is in the list
        expect(screen.getByText('HTML')).toBeInTheDocument();

        // You can add more assertions to check other technologies
    });
});

