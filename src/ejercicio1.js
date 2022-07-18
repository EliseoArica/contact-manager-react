import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

/* Root Container */
const root = ReactDOM.createRoot(document.getElementById('root'));

/* Components and JS algorythms */
let counter = 0;
let minutes = 0;

function show() {
  counter ++;
  let oneMinuteElapsed = counter % 60 == 0;
  let zero = minutes < 10 ? "0" : "";
  let zero2 = counter < 10 ? "0" : "";
  if (oneMinuteElapsed) {
    minutes ++;
    counter = 0;
  }
  const el =  <p>
                <strong>Timer: <br />
                {zero + minutes}:{zero2 + counter}</strong>
              </p>;
  root.render(el);
}

setInterval(show, 1000);