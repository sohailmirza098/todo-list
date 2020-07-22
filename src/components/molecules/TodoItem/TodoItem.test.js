import React from "react";
import { create } from "react-test-renderer";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TodoItem from './TodoItem';
import { ulid } from 'ulid';

describe("Todos testing", () => {
    let props = {
        "data-testid": "todoid",
        key: ulid(),
        todo: {
            id: 1,
            title: "title",
            completed: false
        },
        markComplete: jest.fn(),
        delTodo: jest.fn()
    }

  test("Matches the snapshot", () => {
    const input = create(<TodoItem  key={ props.key } todo={props.todo} />);
    expect(input.toJSON()).toMatchSnapshot();
  });

  test("TodoItem is present", () => {
    const {getByTestId}=  render(<TodoItem key={ props.key } todo={props.todo}/>);
    const header = getByTestId("todoid");
    expect(header).toBeInTheDocument();
  });

});