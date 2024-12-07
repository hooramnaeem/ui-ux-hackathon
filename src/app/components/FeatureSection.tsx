import { FaTruck, FaHeadphones, FaCheckCircle } from 'react-icons/fa'; // Importing icons for each feature

const FeatureSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="w-full flex justify-center items-center mt-10 mb-10">
        <div className="w-[80%]">
          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
            {/* Feature 1: Free & Fast Delivery */}
            <div className="flex flex-col items-center">
              <div className="bg-gray-300 p-4 rounded-full">
                <FaTruck className="text-4xl text-black" />
              </div>
              <h3 className="mt-4 font-semibold text-lg">Free & Fast Delivery</h3>
              <p className="text-sm text-gray-800">Free delivery for all orders over $140</p>
            </div>

            {/* Feature 2: 24/7 Customer Service */}
            <div className="flex flex-col items-center">
              <div className="bg-gray-300 p-3 rounded-full">
                <FaHeadphones className="text-4xl text-black" />
              </div>
              <h3 className="mt-4 font-semibold text-lg">24/7 Customer Service</h3>
              <p className="text-sm text-gray-800">Friendly 24/7 customer support</p>
            </div>

            {/* Feature 3: Money Back Guarantee */}
            <div className="flex flex-col items-center">
              <div className="bg-gray-300 p-3 rounded-full">
                <FaCheckCircle className="text-4xl text-black" />
              </div>
              <h3 className="mt-4 font-semibold text-lg">Money Back Guarantee</h3>
              <p className="text-sm text-gray-800">We return money within 30 days</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
