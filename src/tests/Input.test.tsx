import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { findByTestAttr, storeFactory } from "../../test/testUtils";
import Input from "../conmponents/Input";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input />);
  return wrapper;
};

describe("render", () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    const initialState = { success: false };
    wrapper = setup(initialState);
  });
  describe("word has not been guessed", () => {
    test("renders component without error", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });
    test("renders input box", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(1);
    });
    test("renders submit button", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.length).toBe(1);
    });
  });

  describe("word has been guessed", () => {
    test("renders component without error", () => {
      //
    });
    test("dows not render input box", () => {
      //
    });
    test("dows not render submit button", () => {
      //
    });
  });
});

// describe("update state", () => {});
