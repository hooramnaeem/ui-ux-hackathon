// src/pages/index.tsx
"use client";

import Head from 'next/head';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MissionsSection from './components/MissionSection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

const HomePage = () => (
  <>
    <Head>
      <title>Space Explorer - Discover the Universe</title>
      <meta name="description" content="Explore planets, space missions, and technologies." />
      <meta name="author" content="Muqaddas Fatima" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Space Explorer - Discover the Universe" />
      <meta property="og:description" content="Explore planets, space missions, and technologies." />
      <meta property="og:image" content="/images/space-thumbnail.jpg" />
      <meta property="og:url" content="https://yourwebsite.com" />
    </Head>
    <Navbar />
    <HeroSection />
    <MissionsSection />
    <BlogSection />
    <Footer />
    <ScrollToTopButton />
  </>
);

export default HomePage;

