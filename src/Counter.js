import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Increment, Decrement } from "./Actions";
const Counter = () => {
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(Increment());
  };
  const handleDecrement = () => {
    dispatch(Decrement());
  };
  const state = useSelector((state) => state);
  return (
    <div>
      <h1>{state}</h1>
      <button
        onClick={() => {
          handleIncrement();
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          handleDecrement();
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
