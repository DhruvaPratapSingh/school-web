import { data } from "./../constant/data";
import Card from "./Card";

const Features = () => {
  return (
    <div className="py-10 bg-gradient-to-br from-gray-600 via-gray-500 to-black min-h-screen flex flex-col items-center">
      <div className="flex justify-center items-center flex-col">
        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white bg-opacity-80 px-4 py-2 rounded-lg shadow-md"
          data-aos="fade-left"
        >
          School Features
        </h1>
        <p  className="text-xl md:text-2xl lg:text-2xl font-bold text-gray-300 bg-opacity-10 px-4 py-2 rounded-lg shadow-md"
          data-aos="fade-right"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, asperiores.</p>
      </div>

      {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 w-[90%]">
        {data.map((item) => (
          <Card key={item.id} title={item.title} img={item.img} desc={item.desc} />
        ))}
      </div>
    </div>
  );
};

export default Features;
