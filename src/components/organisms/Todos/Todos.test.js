import React from "react";
import { create } from "react-test-renderer";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Todos from "./Todos";
import { ulid } from 'ulid';


describe("Todos testing", () => {

    let props = [{
        todos: {
            id: ulid(),
            title: "title",
            completed: false
        },
        markComplete:jest.fn(),
        delTodo:jest.fn() 
    }]
  test("Matches the snapshot", () => {
    const input = create(<Todos todos={props}  />);
    expect(input.toJSON()).toMatchSnapshot();
  });

  test("Todos is present", () => {
    const {getByTestId}=  render(<Todos  todos={props} />);
    const header = getByTestId("todosid");
    expect(header).toBeInTheDocument();
  });

});