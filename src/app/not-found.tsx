import Link from 'next/link';
import Header from "../app/components/Header";
 import Common from "../app/components/common";
 import Image from 'next/image';
 import notFound from'../../public/images/notFound.png'
import Footer from './components/Footer';


const Custom404 = () => (
  
  <div className="bg-white">
    
    <Header/>
    <h1 className="text-3xl font-josefin font-bold mb-[-40px] ml-11">404 - Page Not Found</h1>
    <Common/>
    <div className=' sm:ml_0 lg:ml-80'>
    <Image
    src={notFound}
    alt='not found image'
    width={600}
    height={600}
    />
    </div>

    <div className='ml-[500px]   w-[165px] h-[44px]'>
     <Link href="/" >
       <button className=' bg-pink-700 rounded-sm text-white font-lato text-lg font-bold px-6 py-3 ' >Back To Home</button>
      </Link> 
      </div>


          {/* Logos Section */}
          <div className="w-full py-12">
            <div className="max-w-screen-xl mx-auto flex justify-center mb-10">
              <Image
                src="/images/logo.png"
                alt="Logos"
                width={800} 
                height={100} 
                className="object-contain"
              />
            </div>
            <Footer/>
          </div>
  </div>
  
);

export default Custom404;




