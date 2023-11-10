import { Navbar } from '@/components/Navbar';
import React from 'react';
import { type PropsWithChildren } from 'react';

const MainLayout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default MainLayout;
