import React, { forwardRef, useImperativeHandle } from "react";
const TextInput = forwardRef((props, ref) => {
  const verify = () => {
    console.log("Verify");
    
  };

  const validate = () => {
    console.log("Validate");
  };

  useImperativeHandle(ref, () => ({ verify, validate }), []);

  return <input {...props} type="text" />;
});

export default TextInput;
