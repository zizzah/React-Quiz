/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";

const Mode = ({ dispatch }) => {
  const [option, setOption] = useState(null); // Set initial value to match an option

  const handleChange = (e) => {
    setOption(e.target.value); // Update state with selected value
    dispatch({ type: "mode", payload: e.target.value }); // Dispatch action with selected value
  };

  return (
    <>
    <div className="app">
    <h3> Please select the level you want to attempt 👇 </h3>
    <select onChange={handleChange} className="btn btn-ui">
      <option value={null}>select</option>
      <option value="beginner">beginner</option>
      <option value="intermediate">intermediate</option>
      <option value="senior">senior</option>
      <option value="bible">bible</option>
      <option value="maths">maths</option>
      <option value="english">english</option>


    </select>
   </div>
    </>
  );
};

export default Mode;
