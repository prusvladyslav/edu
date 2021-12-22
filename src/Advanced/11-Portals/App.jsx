
import React from 'react';
import ReactDOM from 'react-dom';
export const Portal = () => {
  return (
    <div>
      <h1>123</h1>
      <div>
        {ReactDOM.createPortal(
          <h1>Portal</h1>,document.getElementById('modal')
        )}
      </div>
    </div>
  )
}