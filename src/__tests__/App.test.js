import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "../App";

// Your tests here
test("displays a top-level heading with the text `Hi, I'm ________`", () => {
  render(<App />);
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });

  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image with correct src and alt", () => {
  render(<App />);
  const profileImage = screen.getByAltText(/portrait of/i);
  expect(profileImage).toBeInTheDocument();
  expect(profileImage).toHaveAttribute(
    "src",
    "https://example.com/my-photo.jpg"
  );
});

test('displays a second-level heading with the text "About Me"', () => {
  render(<App />);
  const secondHeading = screen.getByRole("heading", {
    name: /About Me/i,
    exact: false,
    level: 2,
  });
    expect(secondHeading).toBeInTheDocument()
});

test("displays a paragraph with biography", () => {
    render(<App />)
    const biographyParagraph = screen.getByText(/passionate developer/i)
    expect(biographyParagraph).toBeInTheDocument()
})

test("displays a GitHub link with the correct href", () => {
    render(<App />)
    const githubLink = screen.getByRole("link", {
        name: /github/i
    })
    expect(githubLink).toBeInTheDocument()
    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/Jeff-m9"
    );
})

test("displays a LinkedIn link with the correct href", () => {
  render(<App />);
  const linkedinLink = screen.getByRole("link", {
    name: /linkedin/i,
  });
  expect(linkedinLink).toBeInTheDocument();
  expect(linkedinLink).toHaveAttribute(
    "href",
    "https://linkedin.com/in/Jeff-m9"
  );
});
