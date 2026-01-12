import { useState, useEffect } from "react";
import "./Counter.css";

const Counter = () => {
  const [number, setNumber] = useState(0);
  return (
    <div className="container =">
      <span>{number}</span>
      <div className="counter-wrapper">
        <button className="kurang" onClick={() => setNumber(number - 1)}>
          Kurang
        </button>
        <button className="tambah" onClick={() => setNumber(number + 1)}>
          Tambah
        </button>
      </div>
    </div>
  );
};

export default Counter;
