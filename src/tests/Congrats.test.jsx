import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Congrats from "../conmponents/Congrats";
import { findByTestAttr } from "../../test/testUtils";
import CheckPropTypes from "check-prop-types";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProps = { success: false };

const setUp = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...props} />);
};

test("renders without error", () => {
  const wrapper = setUp();
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});

test('renders no text when "success" props is false', () => {
  const wrapper = setUp({ success: false });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.text()).toBe("");
});

test('renders non-empty message when "success" props is true', () => {
  const wrapper = setUp({ success: true });
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
