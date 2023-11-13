import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import React from 'react';
import { type PropsWithChildren } from 'react';

const MainLayout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Navbar />
            <div className='min-h-screen'>
                {children}
            </div>
            <Footer />
        </>
    );
};

export default MainLayout;
