"use client";

import Footer from "../(landing)/(homepage)/components/Footer";
import Navbar from "../(landing)/(homepage)/components/Navbar";
import React from 'react';

interface Props {
    children: React.ReactNode
}

const MarketingLayout = ({ children }: Props) => {
    return (
        <>
            <Navbar />
            <main className="mx-auto w-full z-40 relative">
                {children}
            </main>
            <Footer />
        </>
    );
};

export default MarketingLayout
