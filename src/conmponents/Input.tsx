import React from "react";
import { useSelector } from "react-redux";
import { Success, RootStore } from "../reducers/types";

const Input: React.FC = () => {
  const success = useSelector<RootStore, Success>((state) => state.success);

  return (
    <div data-test="component-input">
      {success && (
        <form className="form-inline">
          <input
            data-test="input-box"
            className="mb-2 mx-ms-3"
            type="text"
            placeholder="enter guess"
          />
          <button
            data-test="submit-button"
            className="btn btn-primaly mb-2"
            type="submit"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Input;
