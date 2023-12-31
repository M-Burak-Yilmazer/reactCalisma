import { useState } from "react";

const MouseEvent = () => {
  const [coordx, setCoordx] = useState(0);
  const [coordy, setCoordy] = useState(0);
  const [visible, setVisible] = useState(false);
  const handleMove = (e) => {
    console.log("x", e.pageX);
    setCoordx(e.pageX);
    setCoordy(e.pageY);
  };

  return (
    <div className="text-center d-flex flex-column container align-items-center mt-4">
      <h2 className="text-uppercase text-success bg-danger text-white">
        mouse events
      </h2>
      <div
        onMouseEnter={() => {
          setVisible(true);
        }}
        onMouseLeave={() => setVisible(false)}
        className="bg-success text-light w-50 p-4"
      >
        ToDo Item 1{/* Conditional rendering */}
        {visible && <div>Hint</div>}
      </div>

      <div className="bg-success text-light w-50 p-4 mt-4">iki</div>
      <div
        onMouseMove={handleMove}
        className="bg-success text-light w-50 p-4 mt-4"
      >
        üc
      </div>
      <p>
        x: {coordx} ve y: {coordy}{" "}
      </p>
    </div>
  );
};

export default MouseEvent;
