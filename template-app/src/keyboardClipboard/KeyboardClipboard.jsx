import { useState } from "react";

const KeyboardClipboard = () => {
  const [content, setContent] = useState("");

  const handleKeyDown = (e) => {
    console.log(e.keyCode);
    if (
      (e.keyCode >= 48 && e.keyCode <= 57) ||
      (e.keyCode >= 96 && e.keyCode <= 105)
    ) {
      alert("please dont enter a number");
      e.preventDefault();
    }
  };
  const handlePaste = (e) => {
    console.log(e.target);
    e.target.className = "form-control border border-primary border-4";
  };
  const handleCopy = (e) => {
    alert("dis is illegal");
    e.preventDefault();
  };

  return (
    <div className="container">
      <h2 className="text-center">Keyboard Clipboard</h2>
      <input
        onChange={(e) => {
          setContent(e.target.value.toLocaleUpperCase());
        }}
        onKeyDown={handleKeyDown}
        value={content}
        type="text"
        className="form-control"
      />
      <div className="mt-4">
        <h3>copied Content</h3>
        <p onCopy={handleCopy}>{content.toLocaleLowerCase()}</p>
      </div>
      <textarea
        className="form-control"
        name=""
        id=""
        cols="30"
        rows="10"
        onPaste={handlePaste}
      ></textarea>
    </div>
  );
};

export default KeyboardClipboard;
