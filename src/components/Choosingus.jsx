import { list } from "../constant/data";

const ChoosingUs = () => {
    return (
      <div className="bg-gradient-to-br from-purple-800 via-indigo-600 to-blue-500 py-16 px-6 md:px-16">
        <h1 
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-center text-white drop-shadow-lg mb-12"
          data-aos="fade-up-right"
        >
          Why People Choose Us?
        </h1>
  
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-white text-lg">
          {list.map((item, index) => (
            <li
              key={index}
              className="bg-gradient-to-br from-gray-800 via-gray-900 to-black bg-opacity-30 backdrop-blur-lg border border-gray-600 p-6 rounded-2xl shadow-xl text-center font-semibold hover:scale-105 transition-all duration-300 relative overflow-hidden group cursor-pointer"
              data-aos="fade-up-left"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#3f5efb] to-[#fc466b] opacity-0 group-hover:opacity-80 transition-all duration-500"></span>
              <span className="relative z-10">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ChoosingUs;
  