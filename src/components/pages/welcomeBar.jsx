import React from 'react';

// Icon for the dropdown arrow
const ChevronDownIcon = (props) => (
    <svg className={props.className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
);

const WelcomeBar = ({ userName = "Femi" }) => {
    return (
        <div className="flex items-center justify-between py-4 sm:py-6 mb-8">
            {/* Welcome Text */}
            <h1 className="text-3xl font-bold text-gray-900">
                Welcome, <span className="text-indigo-700">{userName}</span>
            </h1>

            {/* More Actions Button */}
            <button
                onClick={() => console.log('More actions dropdown triggered')}
                className="flex items-center space-x-2 bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-150 hover:bg-indigo-800 shadow-md text-sm"
            >
                <span>More actions</span>
                <ChevronDownIcon className="w-4 h-4" />
            </button>
        </div>
    );
};

export default WelcomeBar;
