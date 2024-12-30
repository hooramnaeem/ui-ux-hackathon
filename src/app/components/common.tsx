import Link from "next/link"


function Common(){
    return(
        <div>
      
        <div className="bg-gray-200 py-8  ">
          <div className="max-w-[1200px] mx-auto px-4">
            <h1 className=" text-3xl font-bold font-josefin text-[#101750] mb-2"> </h1>
            <p className="text-sm font-josefin text-black">
               <Link  href="/" className= " cursor-pointer font-josefin text-black">Home </Link>  <Link href="/pages" className="  cursor-pointer text-black font-josefin">.pages</Link>{" "}
              <Link  href="/contact-us" className=" cursor-pointer text-[#FB2E86] font-josefin">.Contact Us</Link>
            </p>
          </div>
        </div></div>
    )
}
export default Common