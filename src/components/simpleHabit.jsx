//Hook
import React, { useCallback, useEffect, useRef, useState } from "react";

const SimpleHabit = (props) => {
  const [count, setCount] = useState(0);
  const spanRef = useRef();

  //계속 호출되면 값이 바뀌기 때문에 useCallback 사용
  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });

  //[count]는 count가 바뀔때마다 useEffect 실행한다는 뜻.
  // [ ]는 처음에만 호출한다는 것
  useEffect(() => {
    console.log(`mounted & updated: ${count}`);
  }, [count]);

  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
