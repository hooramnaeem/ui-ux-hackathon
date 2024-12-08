'use client'
import Footer from "../components/Footer";
import PropTypes from "prop-types";
import React from "react";
import "./style.css";

// Define the type for ProductCard props
interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  discountedPrice: string;
}

const Navbar = () => (
  <nav className="navbar">
    <ul className="breadcrumb">
      <li>Home</li>
      <li>Pages</li>
      <li className="active">Shop Grid Default</li>
    </ul>
    <h1 className="page-title">Shop Grid Default</h1>
  </nav>
);

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price, discountedPrice }) => (
  <div className="product-card">
    <div className="product-image-wrapper">
      <img className="product-image" src={image} alt={title} />
    </div>
    <h3 className="product-title">{title}</h3>
    <div className="product-prices">
      <span className="price">{price}</span>
      <span className="discounted-price">{discountedPrice}</span>
    </div>
  </div>
);

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  discountedPrice: PropTypes.string.isRequired,
};


export const Grid = () => {
  const products = [
    {
      image: "./images/image-9.png",
      title: "Vel elit euismod",
      price: "$42.00",
      discountedPrice: "$26.00",
    },
    {
      image: "./images/image-1165.png",
      title: "Ultricies condimentum imperdiet",
      price: "$42.00",
      discountedPrice: "$26.00",
    },
    {
      image: "./images/image-1173.png",
      title: "Vitae suspendisse sed",
      price: "$42.00",
      discountedPrice: "$26.00",
    },
    {
      image: "./images/image-4.png",
      title: "Sed at fermentum",
      price: "$42.00",
      discountedPrice: "$26.00",
    },
    {
      image: "./images/image-1164.png",
      title: "Ultrices mauris sit",
      price: "$42.00",
      discountedPrice: "$26.00",
    },
    {
      image:
        "./images/image-6.png",
      title: "Lectus vulputate faucibus",
      price: "$42.00",
      discountedPrice: "$26.00",
    },
    {
      image: "./images/image-10.png",
      title: "Cras scelerisque velit",
      price: "$42.00",
      discountedPrice: "$26.00",
    },
    {
      image: "./images/image-8.png",
      title: "Sollicitudin amet orci",
      
      price: "$42.00",
      discountedPrice: "$26.00",
    },
    {
      image: "./images/image-9.png",
      title: "Vestibulum magna laoreet",
      price: "$42.00",
      discountedPrice: "$26.00",
    },
  ];

  return (
    

    <div className="grid-default">
      <Navbar />
      <div className="products-grid">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
        
    <Footer />
      </div>
    </div>
  );
};

export default Grid