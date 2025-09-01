import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call your login API here
    console.log('Logging in with:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-800 via-indigo-900 to-blue-900 opacity-80 animate-pulse"></div>

      {/* Login Card */}
      <div className="relative bg-gray-800 p-10 rounded-3xl shadow-2xl w-full max-w-lg mx-4 z-10 border border-gray-700">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold text-white mb-2">Welcome Back</h2>
          <p className="text-gray-400">Sign in to your account</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-300">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gray-700 text-white px-5 py-3 rounded-xl border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-gray-700 text-white px-5 py-3 rounded-xl border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold text-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
          >
            Sign In
          </button>
        </form>
        <div className="text-center mt-6">
          <a href="#" className="text-sm text-gray-400 hover:text-indigo-400 transition duration-300">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;