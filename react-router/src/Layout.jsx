import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <>
            <Header/>
            <Outlet/>
            {/* This comes from React-router -dom . Header and Footer will remain same . In between things will change .*/}
            <Footer/>
        </>
    )
}

export default Layout
