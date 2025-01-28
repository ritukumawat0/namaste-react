import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// this is basic testing in react

describe("contact us page test case", () => {

  // helper function

  // beforeAll(()=>{
  //   console.log('Before all test case');
  // })

  // afterAll(()=>{
  //   console.log('After all test case');
  // })

  // beforeEach(()=>{
  //   console.log('Before each test case');
  // })

  // afterEach(()=>{
  //   console.log('After each test case');
  // })
  
  it("should load heading inside contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("should load button inside contact us component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("should load button inside contact us component", () => {
    render(<Contact />);
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });

  it("should load name label inside contact us component", () => {
    render(<Contact />);
    const Name = screen.getByLabelText("Name");
    expect(Name).toBeInTheDocument();
  });

  it("should load All inputs inside contact us component", () => {
    render(<Contact />);
    const inputs = screen.getAllByRole("textbox");
    expect(inputs.length).toBeTruthy();
  });
});
