import React from "react";
import { create } from "react-test-renderer";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TextInput from "./TextInput";

describe("Remove Button testing", () => {

  test("Matches the snapshot", () => {
    const input = create(<TextInput />);
    expect(input.toJSON()).toMatchSnapshot();
  });

  test("Textbox is present", () => {
    const {getByTestId, getByText} =  render(<TextInput />);
    const text = getByTestId("texttodo");
    expect(text).toBeInTheDocument();
  });

  test("Textbox placeholder", () => {
    const {getByTestId, getByPlaceholderText} =  render(<TextInput />);
    const text = getByPlaceholderText("Add Todo...");
    expect(text.placeholder).toEqual("Add Todo...")
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