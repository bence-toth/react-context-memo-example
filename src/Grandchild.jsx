import { useContext } from "react";
import { TimestampContext } from "./App";

const Grandchild = () => {
  const { timestamp, date } = useContext(TimestampContext);

  return (
    <div>
      Grandchild says the time is {timestamp}, in readable format: {date}
    </div>
  );
};

export default Grandchild;
