import React from 'react';
import Footer from '../components/common/Footer';
import Nav from '../components/common/Nav';
import Data from '../components/search/SearchContents';

const Search = ({location}) => {
    return (
        <>
            <Nav />
            <Data location={location}/>
            <Footer />
        </>
    );
};

export default Search;