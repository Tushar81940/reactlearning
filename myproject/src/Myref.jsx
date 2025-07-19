import React, { useRef } from 'react';

function InputFocus() {
  const inputRef = useRef(null); // Step 1

  const handleClick = () => {
    inputRef.current.focus(); // Step 3
  };

  return (
    <div>
      <input ref={inputRef} type="text" /> {/* Step 2 */}
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}
export default InputFocus