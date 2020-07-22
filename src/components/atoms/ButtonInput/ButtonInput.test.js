import React from "react";
import { create } from "react-test-renderer";
import { render, screen, fireEvent, getByTestId } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ButtonInput from "./ButtonInput";

describe("Input Button testing", () => {

  test("Matches the snapshot", () => {
    const input = create(<ButtonInput />);
    expect(input.toJSON()).toMatchSnapshot();
  });

  test("Input is present", () => {
    const {getByTestId, getByText} =  render(<ButtonInput />);
    const button = getByTestId("submittask");
    expect(button).toBeDefined();
  });

//   test("RemoveButton has content X", () => {
//     const {getByRole}=  render(<RemoveButton />);
//     const button = getByRole("button");
//     expect(button).toHaveTextContent("x");
//   });

//   test("RemoveButton onclick",()=>{
//     const mockClickMethod = jest.fn();
//     const {getByRole}=  render(<RemoveButton onClick={mockClickMethod()}/>);
//     fireEvent.click(getByRole("button"));
//     expect(mockClickMethod).toHaveBeenCalledTimes(1);
//   });
});