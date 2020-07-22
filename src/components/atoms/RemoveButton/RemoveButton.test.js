import React from "react";
import { create } from "react-test-renderer";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import RemoveButton from "./RemoveButton";

describe("Remove Button testing", () => {

  test("Matches the snapshot", () => {
    const input = create(<RemoveButton />);
    expect(input.toJSON()).toMatchSnapshot();
  });

  test("RemoveButton is present", () => {
    const {getByRole}=  render(<RemoveButton />);
    const button = getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("RemoveButton has content X", () => {
    const {getByRole}=  render(<RemoveButton />);
    const button = getByRole("button");
    expect(button).toHaveTextContent("x");
  });

  test("RemoveButton onclick",()=>{
    const mockClickMethod = jest.fn();
    const {getByRole}=  render(<RemoveButton onClick={mockClickMethod()}/>);
    fireEvent.click(getByRole("button"));
    expect(mockClickMethod).toHaveBeenCalledTimes(1);
  });
});