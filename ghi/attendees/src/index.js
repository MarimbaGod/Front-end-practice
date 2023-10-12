import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

async function loadAttendees() {
  const response = await fetch('http://localhost:8001/api/attendees/');
  if (response.ok) {
    const data = await response.json();
    console.log(data);
  } else {
    console.error(response);
  }
}
loadAttendees();


// OLD ATTEMPT from memory
// async function loadAttendees() {
//   const response = await fetch('http://localhost:8001/api/attendees/');
//   console.log(response);

//   if (!response.ok) {
//     console.log("Response Error")
//   } else {
//     const data = await response.json();
//     console.log(data);
//   }
// }
// loadAttendees();
