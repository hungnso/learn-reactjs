import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "./counterSlice";

CounterFeature.propTypes = {};

function CounterFeature(props) {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  const handleplus = () => {
    const action = increase();
    dispatch(action);
  };
  const handlediv = () => {
    const action = decrease();
    dispatch(action);
  };

  return (
    <div>
      Counter Feature : {count}
      <div>
        <button onClick={handleplus}> Plus</button>
        <button onClick={handlediv}> Div</button>
      </div>
    </div>
  );
}

export default CounterFeature;
