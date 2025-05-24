import React from "react";
import Navbar from "./components/Navbar";
import BusinessCardDetail from "./BusinessCardDetail";
import GymMembershipCardDetail from "./GymMembershipCardDetail";
import StudentIdCardDetail from "./StudentIdCardDetail";
import EmployeeIdCardDetail from "./EmployeeIdCardDetail";
import EventPassCardDetail from "./EventPassCardDetail";
import MedicalIdCardDetail from "./MedicalIdCardDetail";
import { DetailsProvider } from './DetailsContext';

import "./App.css";

function App() {
  return (
    <DetailsProvider>
    <div>
      
      <Navbar />
      <BusinessCardDetail />
      <GymMembershipCardDetail />
      <StudentIdCardDetail />
      <EmployeeIdCardDetail />
      <EventPassCardDetail />
      <MedicalIdCardDetail />
    </div>
    </DetailsProvider>
  );
}

export default App;