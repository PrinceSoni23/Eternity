'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const products = [
  {
    title: 'Nityora Dashboard',
    description:
      'Experience the next generation of analytics with Nityora Dashboard—a cutting-edge AI platform that delivers comprehensive, real-time insights, customizable reports, and predictive analytics to empower smarter business decisions.',
    image:
      '/dash.avif',
    link: '/analytics', // <-- your route here
  },
  {
    title: 'Nityora AI Caller',
    description:
      'Revolutionize your customer engagement with Nityora AI Caller, an advanced AI-powered communication tool that seamlessly automates customer interactions using state-of-the-art voice recognition, natural language processing, and intelligent response generation for efficient and personalized experiences.',
    image:
      '/aicall.jpg',
    link: '/ai_caller', // <-- your route here
  },
];

const ProductCards = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 flex flex-col items-center justify-start space-y-16 relative overflow-hidden">
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-xl">
          Explore Nityora AI Products
        </h1>
        <p className="mt-4 text-white text-lg max-w-2xl mx-auto font-medium">
          POWERING BUSINESSES WITH INTELLIGENT AUTOMATION AND REAL-TIME INSIGHTS.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 gap-14 max-w-6xl w-full relative z-10">
        {products.map((product, index) => (
          <Link
            href={product.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group rounded-3xl cursor-pointer block"
          >
            {/* Glow on Hover */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-0 blur-xl group-hover:opacity-100 transition duration-700 z-0"></div>

            {/* Card Content */}
            <div className="relative z-10 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl h-[460px] transition-transform duration-500 transform group-hover:scale-[1.03]">
              {/* Background Image */}
              <Image
                width={600}
                height={460}
                src={product.image}
                alt={product.title}
                className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

              {/* Top-to-bottom gradient fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent z-20" />

              {/* Card Content */}
              <div className="relative z-30 p-8 h-full flex flex-col justify-end space-y-4">
                <h2 className="text-2xl md:text-3xl font-extrabold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                  {product.title}
                </h2>
                <p className="text-base text-gray-300 leading-relaxed drop-shadow-md font-medium">
                  {product.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Decorative Flares */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-pink-500/20 rounded-full blur-[180px] opacity-30 -z-10" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[180px] opacity-30 -z-10" />
    </div>
  );
};

export default ProductCards;
