

const First = () => {

    return (
      <div className="relative w-full h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-orange-400 flex flex-col md:justify-between md:items-center md:flex-row p-6">
        <div className="text-white font-bold p-10 w-full md:w-[50%]">
          <h1 className="text-3xl md:text-4xl lg:text-6xl leading-tight"
          data-aos="fade-left" >
            Your school journey 
            <span className="text-yellow-300 font-bold text-4xl border-b-4 border-white ml-2">starts</span>
          </h1>
          <h2 className="text-gray-100 text-3xl md:text-5xl lg:text-7xl mt-4" data-aos="fade-right">
            Todays kids deserve the best education
          </h2>
          <button className="mt-6 px-6 py-3 text-lg md:text-2xl lg:text-3xl bg-white text-blue-700 font-bold border-2 border-blue-700 rounded-full shadow-lg transition-all duration-300 hover:bg-blue-700 hover:text-white active:bg-blue-900" 
          data-aos="fade-up">
            Apply for Admission
          </button>
        </div>
        <div className="w-full md:w-[50%] lg:w-[40%] flex justify-center" 
        data-aos="zoom-in">
          <img className="max-w-full h-auto rounded-lg shadow-xl" src="/img3.webp" alt="School Kids" />
        </div>
      </div>
    );
  };
  
  export default First;
  