'use lient'

import Header from "./components/Header";
import Hero from "./components/Hero";
import Sale from "./components/Sale";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Category from "./components/Category";
import Music from "./components/Music";
import Explore from "./components/Explore";
import Arrival from "./components/Arrival";
import Feature from "./components/FeatureSection"


function Homepage(){
  return(
    <div>
      <Header />
      <Hero />
      <Sale />
      <Category />
      <Products />
      <Music />
      <Explore />
      <Arrival />
      <Feature />
      <Footer />
    </div>
  )
}

export default Homepage;