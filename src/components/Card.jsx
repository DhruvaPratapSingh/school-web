const Card = ({ title, img, desc, id }) => {
  return (
    <div
     className="bg-gradient-to-br from-gray-800 via-gray-900 to-black bg-opacity-30 backdrop-blur-lg border border-gray-600 w-full max-w-[350px] h-auto flex flex-col items-center p-6 rounded-3xl shadow-xl transform hover:scale-105 transition-all duration-500"
     key={id}
      data-aos="zoom-in"
    >
      <img className="rounded-2xl w-full h-40 object-contain shadow-md" src={img} alt={title} />
      <h1 className="font-bold text-xl md:text-2xl lg:text-3xl text-yellow-400 mt-4">{title}</h1>
      <p className="text-gray-300 text-center px-4 mt-2">{desc}</p>
    </div>
  );
};

export default Card;
