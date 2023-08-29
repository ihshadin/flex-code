import React from 'react';
import AdminSideBar from './AdminSideBar/AdminSideBar';
import AdminMainContent from './AdminMainContent/AdminMainContent';

const AdminDashboard = () => {
    return (
        <div className='min-h-screen md:flex flexcode-container'>
            <AdminSideBar></AdminSideBar>
            <AdminMainContent></AdminMainContent>
        </div>
    );
};

export default AdminDashboard;