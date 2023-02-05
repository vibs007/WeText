import React, { useState } from "react";

export default function FormText(props) {
  const [text, setText] = useState("");
  

  // btn btn-success mx-2 mt-1
  const handleUpClick = () => {
    console.log("UpCase clicked");
    if (text === "") {
      alert("Type Some text");
    }
    let upperText = text.toUpperCase();

    setText(upperText);
    props.showAlert("Text Capitalized successfully", "success")
  };

  const handleLowClick = () => {
    console.log("LowCase clicked");
    if (text === "") {
      alert("Type Some text");
    }
    let upperText = text.toLowerCase();

    setText(upperText);
  };

  const handleClear = () => {
    setText("");
  };

  const onChangeUpCase = (event) => {
    console.log("onChange");
    setText(event.target.value);
  };

  return (
    <div
      className="container"
      style={{ color: props.mode === "light" ? "#022615" : "white" }}
    >
      <div className="mb-3 mt-5">
        <h2>{props.title}</h2>
        <textarea
          className="form-control"
          data-bs-theme="dark"
          id="exampleFormControlTextarea1"
          rows="5"
          placeholder="Enter some text"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#022615",
            color: props.mode === "light" ? "#022615" : "white",
          }}
          value={text}
          onChange={onChangeUpCase}
        ></textarea>
      </div>
      <div className="container">
        <button
          className="btn btn-success mx-2 mt-1"
          onClick={handleUpClick}
          style={{
            backgroundColor: props.mode === "light" ? "#edfaf0" : "#022615",
            color:props.mode==='light'?'black':'white'
          }}
        >
          UpCase
        </button>
        <button
          className="btn btn-success mx-2 mt-1 "
          style={{
            backgroundColor: props.mode === "light" ? "#edfaf0" : "#022615",
            color:props.mode==='light'?'black':'white'
          }}
          onClick={handleLowClick}
        >
          LowCase
        </button>
        <button
          className="btn btn-success mx-2 mt-1"
          onClick={handleClear}
          style={{
            backgroundColor: props.mode === "light" ? "#edfaf0" : "#022615",
            color:props.mode==='light'?'black':'white'
          }}
        >
          Clear
        </button>
      </div>

      <div className="mb-2 mt-4">
        <h2>Your Text Summary</h2>
        <p className="mt-2">
          <b>{text.length} </b>chararcters <b>{text.split(" ").length} </b>
          Word
        </p>
        <p>
          Text read in <b>{0.008 * text.split(" ").length}</b> minutes
        </p>
      </div>
      <div className="mb-2 mt-4">
        <h2>Text Preview</h2>
        <p className="mt-2">
          {text.length > 0 ? text : "Type Some text to Preview"}
        </p>
      </div>
    </div>
  );
}
