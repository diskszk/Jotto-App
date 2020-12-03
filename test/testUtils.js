import CheckPropTypes from "check-prop-types";

export const findByTestAttr = (wrapper, value) => {
  return wrapper.find(`[data-test="${value}"]`);
};
