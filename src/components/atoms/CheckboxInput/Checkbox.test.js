import React from "react";
import { create } from "react-test-renderer";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Checkbox from "./Checkbox";

describe("Checkbox testing", () => {

  test("Matches the snapshot", () => {
    const input = create(<Checkbox />);
    expect(input.toJSON()).toMatchSnapshot();
  });

  test("Checkbox is present", () => {
    const {getByRole}=  render(<Checkbox />);
    const checkbox = getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
  });

  test("Checkbox not marked", () => {
    const {getByRole}=  render(<Checkbox />);
    const checkbox = getByRole("checkbox");
    expect(checkbox.checked).toEqual(false);
  });

  test("Checkbox marked",()=>{
    const {getByRole}=  render(<Checkbox />);
    const checkbox = getByRole("checkbox");
    fireEvent.click(checkbox)
    expect(checkbox.checked).toEqual(true)
  });

  test("Checkbox onclick",()=>{
    const mockClickMethod = jest.fn();
    const {getByRole}=  render(<Checkbox onClick={mockClickMethod()}/>);
    fireEvent.click(getByRole("checkbox"));
    expect(mockClickMethod).toHaveBeenCalledTimes(1);
  });

  
});