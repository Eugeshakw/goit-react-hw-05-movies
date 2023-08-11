import Header from '../header/header'
import React from 'react';
import { Outlet } from 'react-router-dom';


const Layout = () => {
    return (
        <>
        <Header/>
        <Outlet/>
        </>
    )
}

export default Layout;