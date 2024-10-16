import React from 'react';
import Nav from '../Nav/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../../Footer/Footer';

const Main = ({ count }) => {
    return (
        <div >
            <Nav count={count} />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;