import React from "react";

const SlotM = (props) => {
  let x = props.x;
  let y = props.y;
  let z = props.z;

  if (x === y && y === z) {
    return (
      <div className="matching">
        <h1>
          {x} {y} {z}
        </h1>
        <h1 className="text-blue-500"> This is Matching. </h1>
      </div>
    );
  } else {
    return (
      <div className="notmatching">
        <h1>
          {x} {y} {z}
        </h1>
        <h1 className="text-yellow-500"> This is Not Matching. </h1>
      </div>
    );
  }
};

const App = () => {
  return (
    <div className="text-5xl flex justify-between text-purple-500">
      <h1>
        Welcome to{" "}
        <span className="font-bold text-indigo-500">Slot Machine Game</span>
      </h1>
      <div className="slotmachine">
        <SlotM x="😊" y="😊" z="😊" />
        <hr className="border-b-2 border-green-500" />
        <SlotM x="🫶" y="😍" z="😊" />
        <hr className="border-b-2 border-blue-500" />
        <SlotM x="😍" y="😍" z="😍" />
        <hr className="border-b-2 border-yellow-500" />
        <SlotM x="😍" y="😍" z="🫶" />
        <hr className="border-b-2 border-red-500" />
        <SlotM x="🫶" y="🫶" z="🫶" />
        <hr className="border-b-2 border-purple-500" />
      </div>
    </div>
  );
};

export default App;
