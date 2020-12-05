import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, storeFactory } from "../../test/testUtils";
import Input from "../conmponents/Input";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />);
  return wrapper;
};

describe("render", () => {
  describe("word has not been guessed", () => {
    test("renders component without error", () => {});
    test("renders input box", () => {});
    test("renders submit button", () => {});
  });

  describe("word has been guessed", () => {
    test("renders component without error", () => {});
    test("dows not render input box", () => {});
    test("dows not render submit button", () => {});
  });
});

// describe("update state", () => {});
