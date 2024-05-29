'use client'; 

import { useState, useEffect } from 'react';

const OnboardingJourney = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/onboarding.json');
      const data = await res.json();
      setData(data);
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-4 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
          <h1 className="text-4xl font-extrabold mb-2">
            {data.welcomeMessage} <span className="text-yellow-300">{data.employeeName}</span>
          </h1>
          <p className="text-lg">{data.introText}</p>
        </div>
        <div className="px-6 py-4 space-y-8">
          {data.sections.map((section, idx) => (
            <div key={idx} className="relative bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="flex">
                <div className="w-1/3">
                  <img src={section.image} alt={section.title} className="w-full h-full object-cover"/>
                </div>
                <div className="w-2/3 p-4">
                  <h2 className="text-2xl font-semibold text-blue-800 mb-2">{section.title}</h2>
                  {section.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="mb-4">
                      <h3 className="text-xl font-medium text-gray-800">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              {idx < data.sections.length - 1 && (
                <div className="absolute inset-x-0 bottom-0 flex justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 3a1 1 0 011 1v12.586l3.293-3.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L11 16.586V4a1 1 0 011-1z" clipRule="evenodd"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="px-6 py-4 flex justify-center">
          <button className="bg-gradient-to-r from-blue-800 to-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-500">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingJourney;
