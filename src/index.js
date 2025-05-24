import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements,Route ,RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Home';
import AboutUs from "./AboutUs";
import Services from "./Services";
import BusinessCardDetail from './BusinessCardDetail';
import GymMembershipCardDetail from './GymMembershipCardDetail';
import StudentIdCardDetail from './StudentIdCardDetail';
import EmployeeIdCardDetail from './EmployeeIdCardDetail';
import EventPassCardDetail from './EventPassCardDetail';
import MedicalIdCardDetail from './MedicalIdCardDetail';
import { DetailsProvider } from './DetailsContext';
import BCard from './BCard';
import GCard from './GCard';
import SCard from './SCard';
import ECard from './ECard';
import EPCard from './EPCard';
import MCard from './MCard';

import ContactUs from './ContactUs';


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<Layout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path="/About Us" element={<AboutUs/>} />
      <Route path="/Services" element={<Services/>} />
      <Route path="/Contact Us" element={<ContactUs/>} />
      <Route path='/Business Card' element={<BusinessCardDetail/>}/>
        <Route path='/BCard' element={<BCard/>}/>
      <Route path='/Gym Membership Card' element={<GymMembershipCardDetail/>}/>
        <Route path='/GCard' element={<GCard/>}/>
      <Route path='/Student Id Card' element={<StudentIdCardDetail/>}/>
        <Route path='/SCard' element={<SCard/>}/>
      <Route path='/Employee Id Card' element={<EmployeeIdCardDetail/>}/>
        <Route path='/ECard' element={<ECard/>}/>
      <Route path='/Event Pass Card' element={<EventPassCardDetail/>}/>
        <Route path='/EPCard' element={<EPCard/>}/>
      <Route path='Medical Id Card' element={<MedicalIdCardDetail/>}/>
        <Route path='/MCard' element={<MCard/>}/>
      <Route path='/Contact US' element={<ContactUs/>}/>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DetailsProvider>
    <RouterProvider router={router}>
    </RouterProvider>
    </DetailsProvider>
  </React.StrictMode>
);
reportWebVitals();