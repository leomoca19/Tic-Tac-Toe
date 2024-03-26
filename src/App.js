import { useState } from "react";
const Square = () => {
  const [val, setVal] = useState();

  const handleClick = () => setVal("X");

  return (
    <button className="square" onClick={handleClick}>
      {val}
    </button>
  );
};

export default Board = () => (
  <>
    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div>
    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div>
    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div>
  </>
);
