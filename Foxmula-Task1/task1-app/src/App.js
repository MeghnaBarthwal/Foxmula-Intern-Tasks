import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increaseNum } from "./actions/index";
import "./index.css";

const App = () => {
  const increment = useSelector((state) => state.increment);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div className="parent">
        <div className="display_left">
          <button onClick={() => dispatch(increaseNum())}>Click Me</button>
        </div>
        <div className="display_right">
          <div className="box">
            <h1> {increment}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
