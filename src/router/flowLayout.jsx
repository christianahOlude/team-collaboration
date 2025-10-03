import React from 'react';
import EnumSidebar from '../reuseable/sideBar.jsx';
import { Outlet } from 'react-router-dom';

const FlowLayout = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">

      <div className="hidden lg:block lg:w-80 lg:min-h-screen">
        <EnumSidebar />
      </div>

      <div className="w-full lg:flex-1">
        <Outlet/>
      </div>

    </div>
  );
};

export default FlowLayout;