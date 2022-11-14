import React from 'react';
import Footer from '../components/common/Footer';
import Nav from '../components/common/Nav';
import OutOfService from '../components/main/OutOfService';
import Search from '../components/main/Search';

const Main = () => {
    return (
        <>
            <Nav />
            {/*<Search /> */}
            <OutOfService />
            <Footer />
        </>
    );
};

export default Main;