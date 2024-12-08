'use client'

import React, { useState } from 'react';

interface Product {
  name: string;
  price: number;
  quantity: number;
}

interface OrderSummary {
  subtotal: number;
  shipping: number;
  total: number;
}

const CheckoutPage = () => {
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [shippingAddress, setShippingAddress] = useState({
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('');

  const [orderSummary, setOrderSummary] = useState<OrderSummary>({
    subtotal: 0,
    shipping: 0,
    total: 0,
  });

  const [products, setProducts] = useState<Product[]>([
    { name: 'Product 1', price: 30, quantity: 1 },
    { name: 'Product 2', price: 45, quantity: 1 },
  ]);

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContactInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value);
  };

  const calculateOrderSummary = () => {
    const subtotal = products.reduce((sum, product) => sum + product.price * product.quantity, 0);
    const shipping = 10; // Example static shipping cost
    const total = subtotal + shipping;

    setOrderSummary({
      subtotal,
      shipping,
      total,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateOrderSummary();
    // Submit logic here (e.g., send data to an API)
  };

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <h2>Contact Information</h2>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={contactInfo.name}
          onChange={handleContactChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={contactInfo.email}
          onChange={handleContactChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={contactInfo.phone}
          onChange={handleContactChange}
        />

        <h2>Shipping Address</h2>
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={shippingAddress.address}
          onChange={handleShippingChange}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={shippingAddress.city}
          onChange={handleShippingChange}
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={shippingAddress.state}
          onChange={handleShippingChange}
        />
        <input
          type="text"
          name="zip"
          placeholder="Zip Code"
          value={shippingAddress.zip}
          onChange={handleShippingChange}
        />

        <h2>Payment Method</h2>
        <input
          type="text"
          placeholder="Enter Payment Method"
          value={paymentMethod}
          onChange={handlePaymentChange}
        />

        <h2>Order Summary</h2>
        <p>Subtotal: ${orderSummary.subtotal}</p>
        <p>Shipping: ${orderSummary.shipping}</p>
        <p>Total: ${orderSummary.total}</p>

        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
