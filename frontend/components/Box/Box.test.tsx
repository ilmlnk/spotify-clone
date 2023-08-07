import React from "react";
import { render } from '@testing-library/react';
import Box from "./Box";

describe('Box Component', () => {
    it('renders children correctly', () => {
        const { getByText } = render(<Box>Hello World!</Box>);
        const textElement = getByText('Hello World!');
        expect(textElement).toBeInTheDocument();
    });

    it('applies additional className', () => {
        const { container } = render(<Box className="custom-class">Example Content</Box>);
        const boxElement = container.firstChild as HTMLElement;
        expect(boxElement).toHaveClass('bg-neutral-900 rounded-lg h-fit w-full custom-class');
    });

    it('applies default and custom classes', () => {
        const { container } = render(
            <Box className='example-class'>Example Content</Box>
        );
        const boxElement = container.firstChild as HTMLElement;
        expect(boxElement).toHaveClass('bg-neutral-900 rounded-lg h-fit w-full');
        expect(boxElement).toHaveClass('example-class');
    });
})