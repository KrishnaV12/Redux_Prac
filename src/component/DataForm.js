import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const DataForm = () => {
  const curElem = useSelector((state) => {
    return state.curElem;
  });
  return (
    <div>
      <h1>Your Skills</h1>
      <h1>skill:{curElem.skill}</h1>
      <h2>skill:{curElem.skill1}</h2>

      <Link to="/">BasicForm</Link>
    </div>
  );
};
export default DataForm;