import React from 'react';
import logo from "../assets/logo.png"

const SidebarStep = ({ title, description, isActive }) => {
  return (
    <div className="flex items-start">
      <div className="flex flex-col items-center mr-4">

        <div className={`w-4 h-4 rounded-full border-2 ${isActive ? 'border-white' : 'border-gray-500'}`}></div>

        <div className="w-0.5 bg-white flex-grow my-1"></div>
      </div>


      <div className="pb-8">
        <h3 className="text-lg font-medium text-white">{title}</h3>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </div>
  );
};


const EnumSidebar = () => {
  const steps = [
    {
      title: "Let's meet you",
      description: "With your name and work email",
      isActive: true,
    },
    {
      title: "Add company",
      description: "Create your space on Enum",
      isActive: false,
    },
    {
      title: "Invite your team",
      description: "Start collaborating with your team",
      isActive: false,
    },
  ];

  return (
    <div className="min-h-screen p-8 bg-blue-700 w-full max-w-sm">
      <div className="mb-12">
        <img src={logo} alt="Enum Logo" className="w-30 h-10" />
      </div>


      {steps.map((step, index) => (
        <div key={index} className="flex">
          <div className="flex flex-col items-center mr-4">
            <div className={`w-4 h-4 rounded-full border-2 ${step.isActive ? 'border-white' : 'border-gray-400'}`}></div>

            {index < steps.length - 1 && (
              <div className="w-0.5 bg-gray-400 flex-grow my-1" style={{ height: '3rem' }}></div>
                )}
          </div>


          <div className={`pb-8 ${index === steps.length - 1 ? 'mt-[-3px]' : ''}`}>
            <h3 className="text-lg font-medium text-white">{step.title}</h3>
            <p className="text-sm text-gray-300">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );

};

export default EnumSidebar;