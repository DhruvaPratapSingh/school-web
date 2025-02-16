const Courses = () => {
    return (
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Section */}
          <div data-aos="fade-right">
            <h1 className="text-3xl md:text-4xl font-bold text-yellow-400">
              Ready to Learn Something Extra?
            </h1>
            <p className="text-gray-300 mt-4">
              Expand your knowledge with expert-led courses tailored for real-world applications.
              Stay ahead with in-depth training, hands-on projects, and interactive learning.
            </p>
            <ul className="mt-6 space-y-3 text-lg">
              <li>✅ 24/7 Student Support</li>
              <li>✅ Hands-on Practical Sessions</li>
              <li>✅ Personalized Learning Paths</li>
            </ul>
          </div>
  
          {/* Right Section (Image) */}
          <div className="flex justify-center" data-aos="fade-left">
            <img src="/img2.webp" alt="Courses" className="rounded-2xl w-full max-w-md shadow-lg" />
          </div>
        </div>
      </div>
    );
  };
  
  export default Courses;
  