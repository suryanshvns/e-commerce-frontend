import React from 'react';

const Homepage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-900 text-white text-center py-4">
        <h1 className="text-3xl font-semibold">Medical Website</h1>
      </header>
      <div className="container mx-auto flex-grow">
        <h1 className="text-2xl font-bold text-center my-6">Welcome to Our Medical Center</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">About Us</h2>
            <p className="text-gray-700">We are dedicated to providing the best medical care with a team of experienced professionals and state-of-the-art facilities. Our mission is to improve the health and well-being of our community.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Our Services</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>General Medicine</li>
              <li>Pediatrics</li>
              <li>Orthopedics</li>
              <li>Cardiology</li>
              <li>Dermatology</li>
              <li>Emergency Care</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-700">Address: 123 Health St, Wellness City, TX 12345</p>
            <p className="text-gray-700">Phone: (123) 456-7890</p>
            <p className="text-gray-700">Email: contact@medicalcenter.com</p>
          </div>
        </div>
      </div>
      <footer className="bg-blue-900 text-white text-center py-4">
        <p>&copy; 2024 Medical Center. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
