import React, { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [keyPressed, setKeyPressed] = useState("");
  const handleClick = () => {
    setCount(count + 1);
  };

  const handleDoubleClick = () => {
    setCount(count - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    alert(`Form submitted! Hello, ${name || "User"} 👋`);
    setName("");
  };

  const handleKeyPress = (event) => {
    setKeyPressed(event.key);
  };

  const handleMouseEnter = () => {
    setKeyPressed("Mouse entered the button!");
  };

  const handleMouseLeave = () => {
    setKeyPressed("Mouse left the button!");
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "Arial",
      }}
    >
      <h1>React JS Advanced Event Handling</h1>
      <h3>Count: {count}</h3>

      <button
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "8px",
          cursor: "pointer",
          margin: "10px",
        }}
      >
        Click / Double Click Me
      </button>

      <p>{keyPressed}</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyPress={handleKeyPress}
          style={{
            padding: "8px",
            width: "200px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <button
          type="submit"
          style={{
            marginLeft: "10px",
            padding: "8px 15px",
            backgroundColor: "#2196F3",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
