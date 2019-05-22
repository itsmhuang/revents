import React from "react";
import EventDashboard from "src/features/event/EventDashboard";
import NavBar from "src/features/nav/NavBar";

function App() {
  return (
    <div>
      <h1>Re-vents</h1>
      <NavBar/>
      <EventDashboard/>
    </div>
  );
}

export default App;
