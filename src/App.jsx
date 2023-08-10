import React, { useState, useMemo } from "react";
import Child from "./Child";
import { useEffect } from "react";

const TimestampContext = React.createContext(Date.now());

const App = () => {
  const [timestamp, setTimestamp] = useState(Date.now());
  const [date, setDate] = useState(new Date().toString());
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimestamp(Date.now());
      setDate(new Date().toString());
    }, 150);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((previousCounter) => previousCounter + 1);
    }, 15);

    return () => {
      clearInterval(interval);
    };
  });

  const timestampContextData = useMemo(() => {
    return { timestamp, date };
  }, [timestamp, date]);

  return (
    <TimestampContext.Provider value={timestampContextData}>
      <div>
        Parent knows the time.
        <br />
        Parent also counts: {counter}
        <Child />
      </div>
    </TimestampContext.Provider>
  );
};

export { TimestampContext };

export default App;
