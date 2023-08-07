import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';
import { describe } from 'node:test';

describe("Button Component", () => {
    it('renders without errors', () => {
        const { getByText } = render(<Button>Click me!</Button>);
        const buttonElement = getByText('Click me!');
        expect(buttonElement).toBeInTheDocument();
    });

    it('applies the correct class when disabled', () => {
        const { getByText } = render(<Button disabled>Disabled Button</Button>);
        const buttonElement = getByText('Disabled Button');
        expect(buttonElement).toHaveClass('cursor-not-allowed opacity-50');
    })
})