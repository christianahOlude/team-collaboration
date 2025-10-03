import React from 'react';

// Icon for the banner (using lucide-react style SVG for consistency)
const SettingsIcon = (props) => (
    <svg className={props.className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.82 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.82 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.82-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.82-3.31 2.37-2.37a1.724 1.724 0 002.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const Banner = () => {
    return (
        <div className="relative overflow-hidden bg-indigo-700 text-white p-6 sm:p-8 rounded-xl shadow-lg mb-8">
            {/* Content Container */}
            <div className="relative z-10 max-w-4xl">
                <h2 className="text-xl sm:text-2xl font-bold mb-2">
                    Your learning hub is almost ready!
                </h2>
                <p className="text-indigo-100 mb-6 max-w-lg text-sm sm:text-base">
                    To give your learners and partner institutions the best experience, we recommend setting up your hub preferences today.
                </p>

                {/* Action Button - Inverted style (white background, purple text) */}
                <button
                    onClick={() => console.log('Navigating to Configuration')}
                    className="bg-white text-indigo-700 font-semibold py-2 px-6 rounded-lg transition duration-150 hover:bg-indigo-50 hover:text-indigo-800 shadow-md text-sm"
                >
                    Configure hub
                </button>
            </div>

            {/* Large Gear/Cog Icon (Simulated outline based on the image) */}
            <div className="absolute right-[-40px] top-[-40px] sm:right-[-20px] sm:top-[-20px] opacity-20">
                <SettingsIcon className="w-40 h-40 text-white stroke-1" />
            </div>
        </div>
    );
};

export default Banner;
