import { useState } from 'react';

const Career = () => {
  const [jobs] = useState([
    {
      id: 1,
      title: "Senior News Reporter",
      location: "New York, NY",
      salary: "$65k-85k",
      type: "Full-time",
      department: "News Room",
      requirements: "5+ years journalism experience",
      description: "Looking for experienced reporter to cover breaking news and investigative stories"
    },
    {
      id: 2,
      title: "Digital Content Editor",
      location: "Remote/Hybrid",
      salary: "$55k-75k",
      type: "Full-time",
      department: "Digital Media",
      requirements: "3+ years digital editing",
      description: "Managing online content and social media presence"
    },
    {
      id: 3,
      title: "Photojournalist",
      location: "Washington DC",
      salary: "$50k-70k",
      type: "Full-time",
      department: "Visual Media",
      requirements: "Portfolio required",
      description: "Capture compelling images for news stories"
    },
    {
      id: 4,
      title: "International Correspondent",
      location: "Multiple Locations",
      salary: "$70k-90k",
      type: "Full-time",
      department: "International News",
      requirements: "Multilingual preferred",
      description: "Cover global news and international affairs"
    },
    {
      id: 5,
      title: "Investigative Journalist",
      location: "Chicago, IL",
      salary: "$60k-85k",
      type: "Full-time",
      department: "Special Reports",
      requirements: "Investigation experience",
      description: "Lead in-depth investigative stories"
    },
    {
      id: 6,
      title: "News Anchor",
      location: "Los Angeles, CA",
      salary: "$75k-95k",
      type: "Full-time",
      department: "Broadcast",
      requirements: "On-camera experience",
      description: "Present news broadcasts and conduct interviews"
    }
  ]);

  return (
    <div className="w-full min-h-screen">
    {/* Responsive Banner Section */}
    <div className="bg-gray-100 py-8 md:py-12 mb-6 md:mb-8">
      <div className="container mx-auto px-4 sm:px-6">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-3 md:mb-4">
          Join Our Team
        </h1>
        <p className="text-sm md:text-base text-gray-600 text-center max-w-2xl mx-auto px-2">
          We're looking for talented individuals to help us build amazing products.
          Explore our open positions below.
        </p>
      </div>
    </div>

    {/* Responsive Job Listings */}
    <div className="container mx-auto px-4 sm:px-6 mb-8 md:mb-12">
      <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">
        Open Positions
      </h2>
      <div className="grid grid-cols-1 gap-4 md:gap-6">
        {jobs.map(job => (
          <div key={job.id} 
               className="border rounded-lg p-4 md:p-6 hover:shadow-lg transition-shadow bg-white">
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              {job.title}
            </h3>
            <div className="text-sm md:text-base text-gray-600 space-y-2">
              <p className="flex items-center gap-2">
                <span>📍</span> {job.location}
              </p>
              <p className="flex items-center gap-2">
                <span>💰</span> {job.salary}
              </p>
              <p className="flex items-center gap-2">
                <span>⏰</span> {job.type}
              </p>
            </div>
            <button className="w-full mt-4 bg-blue-600 text-white px-4 py-2 md:py-3 rounded text-sm md:text-base hover:bg-blue-700 transition-colors">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>

    {/* Responsive Contact Form Section */}
    <div className="bg-gray-100 py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center">
          Can't find what you're looking for?
        </h2>
        <div className="max-w-xl mx-auto">
          <form className="space-y-4">
            <input 
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 md:py-3 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input 
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 md:py-3 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea 
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-2 md:py-3 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button className="w-full bg-blue-600 text-white px-6 py-2 md:py-3 rounded text-sm md:text-base hover:bg-blue-700 transition-colors">
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Career;