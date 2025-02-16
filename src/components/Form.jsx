import { FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Form = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 to-indigo-800 px-4 py-10">
      <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0"
      data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <img src="/img7.webp" alt="Enrollment" className="w-80 md:w-[90%] rounded-3xl shadow-lg" />
      </div>
      <div className="w-full md:w-1/2 bg-gradient-to-br from-gray-800 via-gray-900 to-black bg-opacity-70 backdrop-blur-md p-6 md:p-10 rounded-3xl shadow-xl border border-white/30 text-white">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-6"
        data-aos="">Enrollment Form</h1>
        
        <form className="space-y-6">
          <div className="relative"
          data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
            <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300" />
            <input 
              type="text" 
              placeholder="Your Full Name" 
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-gradient-to-br from-gray-800 via-gray-900 to-black bg-opacity-30bg-opacity-10 border border-white/30 focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-300"
            />
          </div>
          <div className="relative"
          data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
            <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300" />
            <input 
              type="tel" 
              placeholder="Mobile No." 
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-gradient-to-br from-gray-800 via-gray-900 to-black bg-opacity-30 bg-opacity-10 border border-white/30 focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-300"
            />
          </div>
          <div className="relative"
          data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
            <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300" />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-gradient-to-br from-gray-800 via-gray-900 to-black bg-opacity-30 bg-opacity-10 border border-white/30 focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-300"
            />
          </div>
          <div className="relative"
          data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
            <FaMapMarkerAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300" />
            <input 
              type="text" 
              placeholder="Your Address" 
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-gradient-to-br from-gray-800 via-gray-900 to-black bg-opacity-30 bg-opacity-10 border border-white/30 focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-300"
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg rounded-xl transition-all duration-300"
            data-aos="fade-up"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
