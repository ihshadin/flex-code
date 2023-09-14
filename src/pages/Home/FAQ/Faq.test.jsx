import React from "react";
import { render, screen } from "@testing-library/react";
import Faq from "./Faq";

describe('banner Component', () => {
    it('render the banner component', () => {
        render(<Faq />);

        expect(screen.getByText("What is FlexCode?")).toBeInTheDocument();
        expect(screen.getByText("01")).toBeInTheDocument();
        expect(screen.getByText("How do I join FlexCode?")).toBeInTheDocument();
        expect(screen.getByText("02")).toBeInTheDocument();
    });
});