import Image from "next/image";

export default function About() {
  return (
    <section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
    style={{ position: "relative", width: "100%", height: "100%" }}
>
    {/* Background Rectangle */}
    <div 
        style={{
            position: "absolute",
            width: "552px",
            height: "409px",
            backgroundColor: "#2B3CAB",
            borderRadius: "6px",
            left: "375px",
            top: "530px",
            zIndex: 0
        }}
    ></div>

    {/* Image */}
    <div 
        className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"
        style={{
            position: "absolute",
            left: "390px",
            top: "530px",
            zIndex: 1
        }}
    >
        <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
            style={{
                width: "555px",
                height: "390px",
                borderRadius: "6px",
                backgroundColor: "#FFFFFF"
            }}
        />
    </div>
</div>

      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="font-JosefinSans sm:text-4xl text-3xl mb-4 text-[#151875] w-[550px] h-[159px] leading-[14px]">
          Know About Our Ecommerce Business, History
          <br className="hidden lg:inline-block" />
        </h1>
        <p className="mb-8 leading-relaxed" 
        style={{ 
        width: "550px", 
        height: "49px", 
        color: "#8A8FB9", 
        fontFamily: "Lato, sans-serif", 
        fontWeight: 600, 
        fontSize: "16px" 
    }}>
    {/* Yahan content likhein */}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero eaque voluptatem, delectus sunt consectetur sint vel nisi quisquam temporibus mollitia officia dolorem illum placeat, qui velit voluptate illo quasi doloribus.
        </p>
        <div className="flex justify-center">
    <button 
        className="flex items-center justify-center border-0 focus:outline-none" 
        style={{
            width: "145px", 
            height: "44px", 
            backgroundColor: "#FB2E86", 
            borderRadius: "3px"
        }}
    >
        <span 
            style={{
                width: "86px", 
                height: "26px", 
                color: "#FFFFFF", 
                fontFamily: "Lato, sans-serif", 
                fontWeight: 600, 
                fontSize: "16px", 
                textAlign: "center",
                lineHeight: "26px"
            }}
        >
            Contact Us
        </span>
    </button>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="font-JosefinSans sm:text-4xl text-3xl mb-4 text-[#151875] w-[550px] h-[159px] leading-[14px]">
      </h1>
      </div>
    </div>
  </section>
  
  );
}