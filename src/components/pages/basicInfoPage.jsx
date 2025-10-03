import {React,  useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormField = ({ id, name, label, placeholder, type = 'text', required = true, value, onChange }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label}
      {required && <span className="text-red-500">*</span>}
    </label>
    <div className="mt-1 flex rounded-md shadow-sm">
      <input
        type={type}
        name={name}
        id={id}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="block w-full rounded-md border-gray-300 py-2 px-3 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border"
      />
    </div>
  </div>
);


const BasicInfoPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      workEmail: '',
      password: '',
      confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    navigate('/verify-email', {
      state: {
        email: formData.workEmail
      }
    });
  };

  return (
    <div className="flex-1 min-h-screen bg-gray-50 p-6 sm:p-12 lg:p-16">

      <header className="flex justify-end text-sm mb-12">
        <span className="text-gray-700">Already on Enum? </span>
        <a href="#" className="ml-1 font-medium text-indigo-600 hover:text-indigo-800">
          Log in
        </a>
      </header>


      <div className="flex justify-center">
        <div className="max-w-4xl w-full flex space-x-12">


          <div className="w-5/12">
            <h1 className="text-4xl font-semibold text-gray-900 mb-6">
              Let's meet you
            </h1>


            <div className="space-y-4">
              <div className="font-semibold text-gray-900 border-l-2 border-indigo-600 pl-4">
                Basic info
              </div>
              <div className="text-gray-500 border-l-2 border-gray-300 pl-4">
                Email verification
              </div>
            </div>
          </div>


          <div className="w-7/12 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Basic Info
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <FormField id="firstName" name="firstName" label="First name" placeholder="Enter first name" value={formData.firstName} onChange={handleChange} />
                <FormField id="lastName" name="lastName" label="Last name" placeholder="Enter last name" value={formData.lastName} onChange={handleChange} />

                <FormField
                  id="workEmail"
                  name="workEmail"
                  label="Work email"
                  placeholder="e.g. name@company.com"
                  type="email"
                  value={formData.workEmail}
                  onChange={handleChange}
                />

                <FormField id="password" name="password" label="Password" placeholder="Enter password" type="password" value={formData.password} onChange={handleChange} />
                <FormField id="confirmPassword" name="confirmPassword" label="Confirm password" placeholder="Confirm password" type="password" value={formData.confirmPassword} onChange={handleChange} />
              </div>


              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  onClick={() => navigate('/verify-email')}
                  className="text-indigo-600 font-semibold hover:text-indigo-800 py-2 px-4 rounded-md"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>


      <div className="mt-16 flex justify-center">
        <div className="w-96 flex items-center space-x-1">
          <div className="h-1 bg-indigo-600 w-1/3 rounded-full"></div>
          <div className="h-1 bg-gray-300 w-1/3 rounded-full"></div>
          <div className="h-1 bg-gray-300 w-1/3 rounded-full"></div>
        </div>
      </div>

    </div>
  );
};

export default BasicInfoPage;
