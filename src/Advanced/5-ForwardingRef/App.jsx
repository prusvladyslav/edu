import React, { useEffect, useRef } from "react";

const UseRefHook = (props) => {
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);

  const submitBtnRef = useRef(null);

  useEffect(() => {
    userNameRef.current.focus();
  }, []);

  const handleKeyPress = (e, inputType) => {
    if (e.key === "Enter") {
      switch (inputType) {
        case "username":
          passwordRef.current.focus();
          break;

        case "password":
          submitBtnRef.current.focus();
          e.preventDefault();
          break;
        default:
          break;
      }
    }
  };

  const handleSubmit = () => {
    alert("submitted");
  };

  const { style } = props;
  return (
    <div style={style}>
      <h2>Example for using useRef Hook</h2>
      <h3>Login</h3>

      <Input
        type="text"
        name="username"
        ref={userNameRef}
        onKeyDown={(e) => handleKeyPress(e, "username")}
      />

      <Input
        type="password"
        name="password"
        ref={passwordRef}
        onKeyDown={(e) => handleKeyPress(e, "password")}
      />
      <button ref={submitBtnRef} onClick={handleSubmit}>
        Login
      </button>
    </div>
  );
};

export default UseRefHook;
