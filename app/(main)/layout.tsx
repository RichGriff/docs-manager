import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import React from 'react';
import { type PropsWithChildren } from 'react';

const MainLayout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default MainLayout;
