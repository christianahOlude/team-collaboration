import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FlowLayout from './router/flowLayout.jsx';
import BasicInfoPage from './components/pages/basicInfoPage';
import EmailVerificationPage from './components/pages/EmailVerificationPage.jsx';
import AddCompanyPage from './components/pages/addCompanyPage';

export default function App() {
  return (
    <Routes>
      <Route element={<FlowLayout />}>

        <Route path="/" element={<BasicInfoPage />} />

        <Route path="/verify-email" element={<EmailVerificationPage />} />

        <Route path="/add-company" element={<AddCompanyPage />} />

        {/*<Route path="/dashboardLayout" element={<App/>} />*/}


      </Route>
    </Routes>
  );
}

