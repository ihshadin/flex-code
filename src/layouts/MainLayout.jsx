import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../pages/Shared/NavBar/NavBar';
import Footer from '../pages/Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <>
            <NavBar />
            <main className='min-h-[calc(100%-515px)]'>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default MainLayout;