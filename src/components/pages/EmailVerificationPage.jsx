import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';


const CodeInputDigit = ({ value, onChange, onKeyDown, inputRef }) => (
  <input
    type="text"
    maxLength="1"
    value={value}
    onChange={onChange}
    onKeyDown={onKeyDown}
    ref={inputRef}
    className="w-10 h-10 text-center text-xl font-semibold border-b-2 border-gray-300 focus:border-indigo-600 focus:ring-0 mx-1 transition duration-150"
    style={{ caretColor: 'transparent' }}
  />
);


const EmailVerificationPage = () => {
  const location = useLocation();
  const verifiedEmail = location.state?.email || 'your email address';

  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(116);
  const inputRefs = useRef([]);


  useEffect(() => {
    if (timeLeft === 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };




  return (
    <div className="flex-1 min-h-screen bg-gray-50 p-6 sm:p-12 lg:p-16">

      {/* Top Header Section */}
      <header className="flex justify-end text-sm mb-12">
        <span className="text-gray-700">Already on Enum? </span>
        <a href="#" className="ml-1 font-medium text-indigo-600 hover:text-indigo-800">
          Log in
        </a>
      </header>


      <div className="flex justify-center lg:justify-start">
        <div className="max-w-4xl w-full flex flex-col lg:flex-row lg:space-x-12">


          <div className="w-full lg:w-5/12">
            <h1 className="text-4xl font-semibold text-gray-900 mb-6">
              Let's meet you
            </h1>



            <div className="space-y-4">
              <div className="text-gray-500 border-l-2 border-gray-300 pl-4">
                Basic info
              </div>
              <div className="font-semibold text-gray-900 border-l-2 border-indigo-600 pl-4">
                Email verification
              </div>
            </div>
          </div>


          <div className="w-full lg:w-7/12 bg-white p-8 rounded-lg shadow-lg mt-8 lg:mt-0">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Email verification
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Enter the code we sent to <strong className="text-gray-900">{verifiedEmail}</strong> to verify your email.
            </p>


            <div className="flex justify-start mb-6">
              {code.map((digit, index) => (
                <CodeInputDigit
                  key={index}
                  value={digit}

                  inputRef={(el) => (inputRefs.current[index] = el)}
                />
              ))}
            </div>


            <div className="text-sm text-indigo-600 font-semibold mb-8">
              {formatTime(timeLeft)}
            </div>



            <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800 text-sm">
              Re-enter your email address
            </a>
          </div>
        </div>
      </div>


      <div className="mt-16 flex justify-center">
        <div className="w-96 flex items-center space-x-1">
          <div className="h-1 bg-indigo-600 w-1/3 rounded-full"></div>
          <div className="h-1 bg-indigo-600 w-1/3 rounded-full"></div>
          <div className="h-1 bg-gray-300 w-1/3 rounded-full"></div>
        </div>
      </div>

    </div>
  );
};

export default EmailVerificationPage;