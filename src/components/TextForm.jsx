import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClear = () => {
    let newText = text.toLowerCase();
    setText("");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="cotainer">
        {/* <!-- As a link --> */}
        <h1>{props.heading}</h1>
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            value={text}
            onChange={handleOnChange}
            id="myBox"></textarea>
          {/* <label for="myBox">Comments</label> */}
        </div>
        <button className="btn btn-primary my-3" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleClear}>
          Clear Text
        </button>
      </div>
      <div className="container my-3 ">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length - 1} letters and {text.length} characters
        </p>
        <h3>Time required to read words {0.008 * text.split(" ").length}</h3>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}

// const handleUpClick = () => {
//     console.log("UpperCase Was Clicked"+text);
//     let newText=text.toUpperCase();
//     setText(newText);
//   };
//   const handleOnChange = (event) => {
//     console.log("Onchange Was Clicked");
//     setText(event.target.value);
//   };
//   const [text, setText] = useState("Enter Text Here");
//   //   setText("Rohan")
