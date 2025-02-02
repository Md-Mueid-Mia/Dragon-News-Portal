import React from 'react';

const About = () => {
  const stats = [
    { id: 1, number: "10+", label: "Years of Excellence" },
    { id: 2, number: "50K+", label: "Daily Readers" },
    { id: 3, number: "100+", label: "Journalists" },
    { id: 4, number: "24/7", label: "News Coverage" }
  ];

  const team = [
    {
      id: 1,
      name: "John Smith",
      role: "Editor in Chief",
      image: "https://th.bing.com/th/id/OIP.lPpC8kw0v5KY8AYcwVuHVQHaKA?w=130&h=180&c=7&r=0&o=5&pid=1.7"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Senior Editor",
      image: "https://th.bing.com/th/id/OIP.u8pvplIXrk3uyu-QEbqHXgAAAA?w=135&h=203&c=7&r=0&o=5&pid=1.7"
    },
    {
      id: 3,
      name: "Mike Wilson",
      role: "Lead Reporter",
      image: "https://th.bing.com/th/id/OIP.tklv4lcgitiVzqf3bOPyewHaFS?w=266&h=189&c=7&r=0&o=5&pid=1.7"
    }
  ];

  return (
    <div className="w-full min-h-screen font-poppins">
      {/* Hero Section */}
      <div className="bg-gray-100 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">
            About Dragon News
          </h1>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            Delivering accurate, unbiased news to millions of readers worldwide. Our commitment to journalistic integrity drives everything we do.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600">{stat.number}</div>
                <div className="text-gray-600 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Our Mission</h2>
            <p className="text-gray-600 text-center">
              To provide accurate, timely, and unbiased news coverage that empowers our readers to make informed decisions. We believe in the power of journalism to promote transparency and foster positive change in society.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.id} className="text-center">
                <div >
                    <img className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4" src={member?.image} alt="" />
                </div>
                <h3 className="font-semibold text-xl mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Get in Touch</h2>
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-gray-600">📍 123 News Street, City, Country</p>
              <p className="text-gray-600">📧 contact@dragonnews.com</p>
              <p className="text-gray-600">📱 (123) 456-7890</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;