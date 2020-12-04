import React from "react";
import { shallow } from "enzyme";
import Congrats from "../conmponents/Congrats";
import { findByTestAttr } from "../../test/testUtils";
import CheckPropTypes from "check-prop-types";

const defaultProps = { success: false };

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...props} />);
};

test("renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});

test('renders no text when "success" props is false', () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.text()).toBe("");
});

test('renders non-empty message when "success" props is true', () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, "congrats-message");
  expect(message.text().length).not.toBe(0);
});

test("does not thorw warning with expected props", () => {
  const expectedProps = { success: false };
  const propError = CheckPropTypes(
    Congrats.prototype,
    expectedProps,
    "prop",
    Congrats.name
  );
  expect(propError).toBeUndefined();
});
