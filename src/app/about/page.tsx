import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Common from "../components/common";

const AboutPage = () => {
  return (
    <>
    <Header />
    <h1 className="text-[#101750] font-josefin text-4xl font-extrabold mb-[-40px] ml-12">About Us</h1>
    <Common/>
    
    <div className="px-6 lg:px-20 py-10 font-josefin text-[#151875]">
      <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">

      <div className="">
          <Image
            src="/images/about.png"
            alt="Ecommerce Meeting"
            width={500}
            height={500}
            className="rounded-lg shadow-md"
          />
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-6">
            Know About Our Ecommerce Business, History
          </h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in
            ligula et libero sodales suscipit. Morbi arcu eros, tincidunt non
            turpis non, bibendum porttitor nisi.
          </p>
          <Link href="/contact-us">
            <button className="px-6 py-2 bg-pink-500 text-white font-semibold rounded-md shadow-md hover:bg-pink-600">
              Contact Us
            </button>
          </Link>
        </div>
       
        
      
      </section>
      

      {/* Features Section */}
      <section className="my-16 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "/images/icon1.png", title: "Free Delivery" },
            { icon: "/images/icon2.png", title: "100% Cash Back" },
            { icon: "/images/icon3.png", title: "Quality Product" },
            { icon: "/images/icon4.png", title: "24/7 Support" },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <Image
                src={feature.icon}
                alt={feature.title}
                width={60}
                height={60}
                className="mb-4 mx-auto"
              />
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>
          ))}
        </div>
        
      </section>

      {/* Testimonials Section */}
      <section className="my-16 text-center ">
        <h2 className="text-3xl font-bold mb-8">Our Client Say!</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
          {[
            { name: "", image: "/images/client1.png" },
            { name: "", image: "/images/client2.png" },
            { name: "", image: "/images/client3.png" },
          ].map((client, index) => (
            <div key={index} className="flex flex-col items-center ">
              <Image
                src={client.image}
                alt={client.name}
                width={100}
                height={100}
                className=" object-cover shadow-md mb-4 "
              />
              
              
            </div>
          ))}
            <h1 className="font-bold font-josefin text-[#101750] text-2xl ml-128 whitespace-nowrap">Selina Gomez</h1>

        </div>
        <p className="mt-6 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non odio
          eleifend nisl sollicitudin aliquet ut non felis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.
        </p>
      </section>
    </div>
   
    <Footer />
    </>
  );
};

export default AboutPage;
