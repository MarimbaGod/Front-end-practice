// import logo from './logo.svg';
// import './App.css';
import Nav from './Nav';
import AttendeesList from './AttendeesList';
import LocationForm from './LocationForm';


function App(props) {
  if (props.attendees === undefined) {
    return null;
  }
  return (
    <>
      <Nav />
      <div className="container">
        <LocationForm />
        {/* <AttendeesList attendees={props.attendees} /> */}
      </div>
    </>
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
