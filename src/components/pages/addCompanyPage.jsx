import React, { useState } from 'react';

const FormField = ({ id, label, placeholder, type = 'text', required = true }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label}
      {required && <span className="text-red-500">*</span>}
    </label>
    <div className="mt-1 flex rounded-md shadow-sm">
      <input
        type={type}
        name={id}
        id={id}
        required={required}
        placeholder={placeholder}
        className="block w-full rounded-md border-gray-300 py-2 px-3 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border"
      />
    </div>
  </div>
);


const DetailsForm = ({ onNext }) => (
  <div className="p-4">
    <h2 className="text-xl font-semibold text-gray-900 mb-4">Details</h2>
    <form onSubmit={(e) => { e.preventDefault(); onNext(); }}>
      <FormField id="companyName" label="Company name" placeholder="Enter company name" required={true} />

      {/* Dropdowns/Selects are placeholders */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Industry</label>
        <select className="mt-1 block w-full rounded-md border-gray-300 py-2 px-3 text-gray-900 border">
          <option>Select Industry</option>
        </select>
      </div>

      <FormField id="website" label="Website" placeholder="e.g. https://www.company.com" required={false} />
      <FormField id="siteName" label="Site name" placeholder="Enter site name" required={false} />

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Company size</label>
        <select className="mt-1 block w-full rounded-md border-gray-300 py-2 px-3 text-gray-900 border">
          <option>Select Size</option>
        </select>
      </div>

      <div className="mt-8 pt-4 border-t border-gray-100 flex justify-end">
        <button type="submit" className="text-indigo-600 font-semibold hover:text-indigo-800 py-2 px-4 rounded-md">
            Next
        </button>
      </div>
    </form>
  </div>
);


const ShortDescriptionForm = ({ onNext }) => (
  <div className="p-4">
    <h2 className="text-xl font-semibold text-gray-900 mb-4">Short description</h2>
    <form onSubmit={(e) => { e.preventDefault(); onNext(); }}>
        <p className="text-gray-600 mb-6">Give a short description of your company.</p>

        <textarea
            id="companyDescription"
            rows="8"
            maxLength={1000}
            placeholder="Enter text here"
            className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border resize-none"
        ></textarea>
        <p className="mt-2 text-xs text-gray-500 text-right">
          0/1000 characters
        </p>

        <div className="mt-8 pt-4 border-t border-gray-100 flex justify-end">
            <button type="submit" className="text-indigo-600 font-semibold hover:text-indigo-800 py-2 px-4 rounded-md">
                Next
            </button>
        </div>
    </form>
  </div>
);


const UsageTag = ({ label, isSelected, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`
      px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 shadow-sm
      ${isSelected
        ? 'bg-indigo-100 text-indigo-700 border border-indigo-500' // Selected style
        : 'bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200'} // Default style
    `}
  >
    {label}
  </button>
);

const UsagePreferenceForm = ({ onNext }) => {
      const [selectedUsage, setSelectedUsage] = useState(["To train employees", "To train customers", "To manage hub"]);

    const usageOptions = [
        "To train employees", "To train partners", "To sell assessments",
        "To train customers", "To sell courses", "To hire talent",
        "To sell question banks", "To manage talent", "To manage hub",
        "To host live classes", "To manage events", "For credentialing",
        "To create courses", "To manage programs"
    ];

    const toggleUsage = (tag) => {
        setSelectedUsage(prevSelected =>
        prevSelected.includes(tag)
            ? prevSelected.filter(item => item !== tag)
            : [...prevSelected, tag]
        );
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Usage preference</h2>
            <p className="text-gray-600 text-sm mb-6">
                How you will like to use Enum
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
                {usageOptions.map((tag, index) => (
                    <UsageTag
                        key={index}
                        label={tag}
                        isSelected={selectedUsage.includes(tag)}
                        onClick={() => toggleUsage(tag)}
                    />
                ))}
            </div>

            <div className="mt-8 pt-4 border-t border-gray-100 flex justify-end">
                <button
                    type="button"
                    onClick={onNext}
                    className="inline-flex items-center justify-center rounded-md text-indigo-600 font-semibold hover:text-indigo-800 py-2 px-4 transition duration-150"
                >
                    Next
                </button>
            </div>
        </div>
    );
};


const LogoUploadForm = ({ onNext }) => {

    const [isDragging, setIsDragging] = useState(false);

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        console.log("File dropped:", e.dataTransfer.files[0]?.name);
    };

    const handleFileSelect = (e) => {
        console.log("File selected:", e.target.files[0]?.name);
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Logo</h2>
            <p className="text-gray-600 mb-6">Upload your company logo.</p>

            <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`
                    flex flex-col items-center justify-center p-12 text-center 
                    rounded-xl border-2 border-dashed transition-colors duration-200
                    ${isDragging ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300 hover:border-indigo-400'}
                `}
            >
                <div className="p-4 rounded-full bg-gray-100 mb-4">
                    <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m1 0v-1c0-1.1.9-2 2-2h1c1.1 0 2 .9 2 2v1m-6 0h6m-7-5h5M10 9a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                </div>

                <p className="text-sm text-gray-600 mb-1">
                    Drop your image here or
                    <label htmlFor="file-upload" className="font-semibold text-indigo-600 hover:text-indigo-800 cursor-pointer ml-1">
                        Browse
                    </label>
                </p>
                <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    accept=".jpg,.jpeg,.png,.pdf"
                    onChange={handleFileSelect}
                />

                <p className="text-xs text-gray-500">
                    JPG, PNG or PDF. (300kb max)
                </p>
            </div>


            <div className="mt-8 pt-4 border-t border-gray-100 flex justify-end">
                <button
                    onClick={onNext}
                    className="inline-flex items-center justify-center rounded-md text-indigo-600 font-semibold hover:text-indigo-800 py-2 px-4 transition duration-150"
                >
                    Complete
                </button>
            </div>
        </div>
    );
};



const AddCompanyPage = () => {

  const [currentStep, setCurrentStep] = useState('Usage preference');

  const stepComponents = {
    'Details': <DetailsForm onNext={() => setCurrentStep('Short description')} />,
    'Short description': <ShortDescriptionForm onNext={() => setCurrentStep('Usage preference')} />,
    'Usage preference': <UsagePreferenceForm onNext={() => setCurrentStep('Logo')} />,
    'Logo': <LogoUploadForm onNext={() => console.log('Final Submission! Navigate to Invite team.')} />,
  };

  const stepList = ['Details', 'Short description', 'Usage preference', 'Logo'];

  const getStepComponent = () => {
      return stepComponents[currentStep];
  };

  const getNavLinkClasses = (stepName) => {
      const isCurrent = currentStep === stepName;
      const isCompleted = stepList.indexOf(currentStep) > stepList.indexOf(stepName);

      let classes = "border-l-2 pl-4 cursor-pointer transition-all duration-150";

      if (isCurrent) {
          classes += " font-semibold text-indigo-600 border-indigo-600";
      } else if (isCompleted) {
          classes += " text-gray-700 border-indigo-600 hover:text-indigo-600";
      } else {
          classes += " text-gray-500 border-gray-300 hover:text-gray-700";
      }
      return classes;
  };

  const getProgressBarWidth = () => {
    const mainProgress = 2;
    return `${(mainProgress / 3) * 100}%`;
  };


  return (
    <div className="flex-1 min-h-screen bg-gray-50 p-6 sm:p-12 lg:p-16">


      <header className="flex justify-end text-sm mb-12">
        <span className="text-gray-700">Already on Enum? </span>
        <a href="#" className="ml-1 font-medium text-indigo-600 hover:text-indigo-800 transition duration-150">
          Log in
        </a>
      </header>


      <div className="flex justify-center lg:justify-start">
        <div className="max-w-4xl w-full flex flex-col lg:flex-row lg:space-x-12">


          <div className="hidden lg:block w-3/12 pr-12 pt-4 border-r border-gray-200 bg-white min-h-screen fixed left-0 top-0 h-full">
            <div className="px-10">

              <div className="text-2xl font-bold text-indigo-600 mb-12">
                <svg className="w-8 h-8 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18s-3.332.477-4.5 1.253"/>
                </svg>
                <span className="text-indigo-900">enum</span>
              </div>


              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="relative pt-1">
                    <div className="w-3 h-3 rounded-full bg-indigo-600 ring-4 ring-indigo-200 mt-1"></div>
                    <div className="h-10 w-px bg-indigo-600 absolute left-1/2 transform -translate-x-1/2 top-4"></div>
                  </div>
                  <div className="ml-4 -mt-1">
                    <h3 className="font-semibold text-sm text-indigo-600">Let's meet you</h3>
                    <p className="text-xs text-gray-500">With your name and work email</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="relative pt-1">
                    <div className="w-3 h-3 rounded-full bg-indigo-600 ring-4 ring-indigo-200 mt-1"></div>
                    <div className="h-10 w-px bg-gray-300 absolute left-1/2 transform -translate-x-1/2 top-4"></div>
                  </div>
                  <div className="ml-4 -mt-1">
                    <h3 className="font-semibold text-sm text-indigo-600">Add company</h3>
                    <p className="text-xs text-gray-500">Create your space on Enum</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="relative pt-1">
                    <div className="w-3 h-3 rounded-full bg-gray-300 mt-1"></div>
                  </div>
                  <div className="ml-4 -mt-1">
                    <h3 className="font-semibold text-sm text-gray-500">Invite your team</h3>
                    <p className="text-xs text-gray-500">Start collaborating with your team</p>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div className="w-full lg:w-9/12 lg:ml-auto">
            <div className="max-w-4xl w-full flex flex-col lg:flex-row lg:space-x-12 lg:pl-12">


              <div className="w-full lg:w-5/12">
                <h1 className="text-4xl font-semibold text-gray-900 mb-6">
                  Add company
                </h1>
                <p className="text-gray-600 mb-10 text-sm leading-relaxed">
                  Nice work, <strong className="font-semibold text-gray-900">David</strong>. Just one more step — Now, let's complete your setup with your organization's info.
                </p>


                <nav className="space-y-4">
                    {stepList.map(stepName => (
                        <div
                            key={stepName}
                            className={getNavLinkClasses(stepName)}
                            onClick={() => setCurrentStep(stepName)}
                        >
                            {stepName}
                        </div>
                    ))}
                </nav>
              </div>


              <div className="w-full lg:w-7/12 bg-white rounded-xl shadow-2xl ring-1 ring-gray-100 mt-8 lg:mt-0">

                {getStepComponent()}
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="fixed bottom-0 left-0 right-0 h-2 bg-gray-200">
        <div
          className="h-full bg-indigo-600 transition-all duration-500 ease-in-out"
          style={{ width: getProgressBarWidth() }}
        ></div>
      </div>

    </div>
  );
};

export default AddCompanyPage;
