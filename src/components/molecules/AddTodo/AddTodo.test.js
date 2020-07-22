import React from "react";
import { create } from "react-test-renderer";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AddTodo from "./AddTodo";

describe("AddTodo testing", () => {

  test("Matches the snapshot", () => {
    const input = create(<AddTodo />);
    expect(input.toJSON()).toMatchSnapshot();
  });

  test("AddTodo is present", () => {
    const {getByTestId}=  render(<AddTodo />);
    const addTodo = getByTestId("addtodoid");
    expect(addTodo).toBeInTheDocument();
  });

//   test("Header text content", () => {
//     const {getByTestId}=  render(<Header />);
//     const header = getByTestId("headerid");
//     expect(header.textContent).toEqual("TodoList")
//   });

});