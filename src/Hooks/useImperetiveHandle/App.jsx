import React, { useRef } from "react";
import TextInput from "./TextInput";
const Phone = () => {
  const phoneEl = useRef(null);

    const handlePhone = () => {
 

        phoneEl.current.verify();
        phoneEl.current.validate();

    }

  return (
    <div>
      <TextInput ref={phoneEl} onChange={handlePhone} />
    </div>
  );
}

export default Phone;
