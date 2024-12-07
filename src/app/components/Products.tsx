import Image from "next/image";
import { FiHeart } from "react-icons/fi"; // Wishlist icon
import { FaStar, FaEye } from "react-icons/fa"; // Star and Eye icons

function Products() {
  return (
    <div className="w-full flex justify-center items-center mt-10 mb-10">
      <div className="w-[80%]">
        {/* Top Section */}
        <div className="flex justify-between items-center mb-7">
          <div>
            <span className="border-l-8 border-red-500 text-red-500 font-bold pl-2">This Month</span>
            <h2 className="text-4xl font-bold mt-2">Best Selling Products</h2>
          </div>
          <button className="py-2 px-7 bg-red-500 text-white rounded-md hover:bg-red-600">View All</button>
        </div>

        {/* Products Grid */}
        <div className="w-[100%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              id: 1,
              img: "/images/jacket.png",
              name: "The North Coat",
              discountedPrice: "$200",
              originalPrice: "$260",
              rating: 4.7,
              reviews: 78,
            },
            {
              id: 2,
              img: "/images/bag.png",
              name: "Gucci Duffle Bag",
              discountedPrice: "$760",
              originalPrice: "$960",
              rating: 4.9,
              reviews: 90,
            },
            {
              id: 3,
              img: "/images/speaker.png",
              name: "RGB Liquid CPU Cooler",
              discountedPrice: "$140",
              originalPrice: "$160",
              rating: 4.8,
              reviews: 68,
            },
            {
              id: 4,
              img: "/images/shelf.png",
              name: "Small Bookshelf",
              discountedPrice: "$300",
              originalPrice: "$360",
              rating: 4.6,
              reviews: 55,
            },
          ].map((product) => (
            <div key={product.id} className="relative group">
              {/* Product Image */}
              <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center relative">
              <Image src={product.img} width={150} height={100} alt={product.name} />
                
                {/* Wishlist and Eye Icons */}
                <div className="absolute top-2 right-2 space-y-1">
                  <FiHeart className="text-black bg-white p-1 w-6 h-6 rounded-full" />
                  <FaEye className="text-black bg-white p-1 w-6 h-6 rounded-full" />
                </div>

                {/* Add to Cart Button on Hover */}
                <div className="absolute bottom-0 w-full bg-black text-white text-center py-2 opacity-0 group-hover:opacity-100">
                  <button className="w-full">Add to Cart</button>
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col mt-2">
                <span className="font-bold">{product.name}</span>
                {/* Price */}
                <div className="flex items-center space-x-2">
                  <span className="text-red-500 font-bold">{product.discountedPrice}</span>
                  <span className="line-through text-gray-500">{product.originalPrice}</span>
                </div>
                {/* Rating */}
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className={`w-4 h-4 ${
                        index < Math.floor(product.rating) ? "text-yellow-500" : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm">{`(${product.reviews})`}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
