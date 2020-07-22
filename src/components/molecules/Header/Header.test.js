import React from "react";
import { create } from "react-test-renderer";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "./Header";

describe("Header testing", () => {

  test("Matches the snapshot", () => {
    const input = create(<Header />);
    expect(input.toJSON()).toMatchSnapshot();
  });

  test("Header is present", () => {
    const {getByTestId}=  render(<Header />);
    const header = getByTestId("headerid");
    expect(header).toBeInTheDocument();
  });

  test("Header text content", () => {
    const {getByTestId}=  render(<Header />);
    const header = getByTestId("headerid");
    expect(header.textContent).toEqual("TodoList")
  });

});