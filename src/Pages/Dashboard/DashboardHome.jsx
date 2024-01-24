import React from 'react';
import { Outlet } from 'react-router-dom';

const DashboardHome = () => {
    return (
        <div>
           <Outlet></Outlet>
        </div>
    );
};

export default DashboardHome;