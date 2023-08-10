import Grandchild from "./Grandchild";

const Child = () => {
  return (
    <div>
      Child
      <Grandchild />
    </div>
  );
};

export default Child;
