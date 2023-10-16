// import logo from './logo.svg';
// import './App.css';
import Nav from './Nav';
import MainPage from './MainPage';
import AttendeesList from './AttendeesList';
import LocationForm from './LocationForm';
import ConferenceForm from'./ConferenceForm';
import AttendConferenceForm from './AttendConferenceForm';
import PresentationForm from './PresentationForm';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';


// function App(props) {
//   if (props.attendees === undefined) {
//     return null;
//   }
//   return (
//     <>
//       <Nav />
//       <div className="container">
//         <LocationForm />
//         {/* <AttendeesList attendees={props.attendees} /> */}
//       </div>
//     </>
//   );
// }
function App(props) {
  if (props.attendees === undefined) {
    return null;
  }
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
          <Routes>
            <Route index element={<MainPage />} />
            <Route path="/conferences/new" element={<ConferenceForm />} />
            <Route path="/attendees/new" element={<AttendConferenceForm />} />
            <Route path="/locations/new" element={<LocationForm />} />
            <Route path="/attendees" element={<AttendeesList attendees={props.attendees} />} />
            <Route path="/presentations/new" element={<PresentationForm />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

// was between div tags
// {/* <table className="table table-striped">
// <thead>
//   <tr>
//     <th>Name</th>
//     <th>Conference</th>
//   </tr>
// </thead>
// <tbody>
//   {/* for (let attendee of props.attendees) {
//     <tr>
//       <td>{ attendee.name }</td>
//       <td> { attendee.conference } </td>
//     </tr>
//   } */}
//   {props.attendees.map(attendee => {
//     return (
//       <tr key = { attendee.href }>
//         <td>{ attendee.name }</td>
//         <td>{ attendee.conference }</td>
//       </tr>
//     );
//   })}
// </tbody>
// </table> */}
