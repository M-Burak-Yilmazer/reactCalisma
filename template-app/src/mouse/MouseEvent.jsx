import { useState } from "react";

const MouseEvent = () => {
  const [visible, setVisible] = useState(false);

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
        ToDo Item 1
        {/* Conditional rendering */}
        {visible && <div>Hint</div>}
      </div>

      <div className="bg-success text-light w-50 p-4 mt-4">iki</div>
      <div className="bg-success text-light w-50 p-4 mt-4">üc</div>
      <p>X ve Y</p>
    </div>
  );
};

export default MouseEvent;
