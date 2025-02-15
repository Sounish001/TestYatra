import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header & Navigation */}
      <header className="flex justify-between items-center p-6 shadow-md">
        <div className="text-2xl font-bold text-blue-600">TestYatra</div>
        <nav className="space-x-4">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#pricing" className="hover:text-blue-600">Pricing</a>
          <a href="#features" className="hover:text-blue-600">Features</a>
          <a href="#contact" className="hover:text-blue-600">Contact Us</a>
          <a href="#login" className="hover:text-blue-600">Login/Signup</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-hero bg-cover bg-center text-black py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            Your AI-powered Exam Creation & Practice Portal
          </h1>
          <p className="mb-6 text-lg">
            Create custom tests from PDFs, practice online, and get instant performance analytics!
          </p>
          <a href="#upload" className="bg-blue-600 px-8 py-3 rounded-full font-semibold">
            Get Started
          </a>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 border rounded-lg shadow-md bg-white">
              <div className="text-blue-600 text-4xl mb-4">🤖</div>
              <h3 className="font-bold text-xl mb-2">AI-based PDF Conversion</h3>
              <p className="text-gray-600">Extract and format questions using advanced OCR and NLP.</p>
            </div>
            <div className="p-6 border rounded-lg shadow-md bg-white">
              <div className="text-blue-600 text-4xl mb-4">📝</div>
              <h3 className="font-bold text-xl mb-2">Exam Interface Simulation</h3>
              <p className="text-gray-600">Experience a real exam environment with our interactive portal.</p>
            </div>
            <div className="p-6 border rounded-lg shadow-md bg-white">
              <div className="text-blue-600 text-4xl mb-4">⚡</div>
              <h3 className="font-bold text-xl mb-2">Instant Scoring & Analytics</h3>
              <p className="text-gray-600">Get immediate feedback and detailed performance reports.</p>
            </div>
            <div className="p-6 border rounded-lg shadow-md bg-white">
              <div className="text-blue-600 text-4xl mb-4">💰</div>
              <h3 className="font-bold text-xl mb-2">Affordable Pricing</h3>
              <p className="text-gray-600">Multiple pricing options to suit every need.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Pricing</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Pay-Per-Test Model */}
            <div className="border rounded-lg p-6 shadow-md bg-white">
              <h3 className="text-2xl font-bold mb-2">Pay-Per-Test</h3>
              <p className="text-gray-600 mb-4">Ideal for one-off users</p>
              <div className="text-4xl font-bold mb-4">
                ₹49 <span className="text-sm font-normal">/ test</span>
              </div>
              <ul className="text-left mb-4 space-y-2">
                <li>Instant AI conversion</li>
                <li>Standard exam interface</li>
                <li>Basic analytics</li>
              </ul>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full">Buy Now</button>
            </div>
            {/* Bundled Packages */}
            <div className="border rounded-lg p-6 shadow-md bg-white">
              <h3 className="text-2xl font-bold mb-2">Bundled Packages</h3>
              <p className="text-gray-600 mb-4">Save more with bulk purchases</p>
              <div className="space-y-4">
                <div className="border p-4 rounded-lg">
                  <h4 className="font-bold">Starter Pack</h4>
                  <p className="text-xl font-bold">5 tests for ₹225</p>
                  <p className="text-sm text-gray-500">₹45 per test</p>
                </div>
                <div className="border p-4 rounded-lg">
                  <h4 className="font-bold">Advanced Pack</h4>
                  <p className="text-xl font-bold">10 tests for ₹400</p>
                  <p className="text-sm text-gray-500">₹40 per test</p>
                </div>
                <div className="border p-4 rounded-lg">
                  <h4 className="font-bold">Institutional Pack</h4>
                  <p className="text-xl font-bold">25+ tests for ₹900</p>
                  <p className="text-sm text-gray-500">Custom packages available</p>
                </div>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full mt-4">Buy Now</button>
            </div>
            {/* Subscription Plans */}
            <div className="border rounded-lg p-6 shadow-md bg-white">
              <h3 className="text-2xl font-bold mb-2">Subscription Plans</h3>
              <p className="text-gray-600 mb-4">For regular and power users</p>
              <div className="space-y-4">
                <div className="border p-4 rounded-lg">
                  <h4 className="font-bold">Monthly Subscription</h4>
                  <p className="text-xl font-bold">₹500/month</p>
                  <p className="text-sm text-gray-500">15 tests + priority support & analytics</p>
                </div>
                <div className="border p-4 rounded-lg">
                  <h4 className="font-bold">Annual Subscription</h4>
                  <p className="text-xl font-bold">₹5000/year</p>
                  <p className="text-sm text-gray-500">Up to 200 tests + premium features</p>
                </div>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full mt-4">Buy Now</button>
            </div>
          </div>
          {/* Freemium Trial */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-2">Freemium Trial</h3>
            <p className="text-gray-600 mb-4">Try one free test conversion with limited features.</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full">Start Free Trial</button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Testimonials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg shadow-md bg-white">
              <p className="italic text-gray-600 mb-4">
                "TestYatra transformed the way I practice exams. It's fast, efficient, and user-friendly!"
              </p>
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4" />
                <div>
                  <p className="font-bold">Amit Kumar</p>
                  <p className="text-sm text-gray-500">Student</p>
                </div>
              </div>
            </div>
            <div className="p-6 border rounded-lg shadow-md bg-white">
              <p className="italic text-gray-600 mb-4">
                "A brilliant platform for educators to design tests with ease and precision."
              </p>
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4" />
                <div>
                  <p className="font-bold">Riya Sharma</p>
                  <p className="text-sm text-gray-500">Educator</p>
                </div>
              </div>
            </div>
            <div className="p-6 border rounded-lg shadow-md bg-white">
              <p className="italic text-gray-600 mb-4">
                "I love the instant feedback and detailed analytics. A game changer!"
              </p>
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4" />
                <div>
                  <p className="font-bold">Rahul Verma</p>
                  <p className="text-sm text-gray-500">Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="contact" className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">TestYatra</h3>
              <p className="text-sm">© 2025 TestYatra. All rights reserved.</p>
            </div>
            <div className="space-x-4">
              <a href="#" className="hover:text-blue-400">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400">Terms of Service</a>
              <a href="#" className="hover:text-blue-400">About Us</a>
              <a href="#" className="hover:text-blue-400">Contact Us</a>
            </div>
          </div>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
