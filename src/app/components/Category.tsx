import {
    FaPhoneAlt,
    FaLaptop,
    FaApple,
    FaCamera,
    FaHeadphones,
    FaGamepad,
    FaArrowLeft,
    FaArrowRight,
  } from "react-icons/fa";
  
  const Category = () => {
    return (
      <section className="py-10 px-4">
        <div className="w-full flex justify-center items-center mt-10 mb-10">
          <div className="w-[80%]">
            {/* Top Section */}
            <div className="w-full h-1 bg-gray-200 mb-2"></div> {/* Red Bar */}
  
            <div className="flex justify-between items-center mb-7">
              <div>
                <span className="border-l-8 border-red-500 text-red-500 font-bold pl-2">
                  Categories
                </span>
                <h2 className="text-4xl font-bold mt-2 text-black">
                  Browse By Categories
                </h2>
              </div>
              {/* Arrows */}
              <div className="flex items-center space-x-4">
                <FaArrowLeft className="text-2xl cursor-pointer text-gray-500 hover:text-black" />
                <FaArrowRight className="text-2xl cursor-pointer text-gray-500 hover:text-black" />
              </div>
            </div>
  
            {/* Category Buttons */}
            <div className="w-[90%] grid grid-cols-9 sm:grid-cols-9 lg:grid-cols-6 gap-9">
              {[
                {
                  name: "SmartPhones",
                  icon: <FaPhoneAlt className="text-3xl" />,
                },
                {
                  name: "Computers",
                  icon: <FaLaptop className="text-3xl" />,
                },
                {
                  name: "SmartWatch",
                  icon: <FaApple className="text-3xl" />,
                },
                {
                  name: "Cameras",
                  icon: <FaCamera className="text-3xl" />,
                },
                {
                  name: "Headphones",
                  icon: <FaHeadphones className="text-3xl" />,
                },
                {
                  name: "Gaming",
                  icon: <FaGamepad className="text-3xl" />,
                },
              ].map((category, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col items-center justify-center w-32 h-32 border-2 border-gray-400 bg-white text-center cursor-pointer hover:bg-red-500 transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="text-black group-hover:text-white">
                    {category.icon}
                  </div>
                  {/* Text */}
                  <span className="mt-2 text-black font-semibold group-hover:text-white">
                    {category.name}
                  </span>
                </div>
              ))}
            </div>
  
            {/* Bottom Light Gray Line */}
            <div className="w-full mx-auto mt-6 bg-gray-200 h-1 rounded"></div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Category;
  