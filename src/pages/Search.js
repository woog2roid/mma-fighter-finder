import React from 'react';
import Footer from '../components/common/Footer';
import Nav from '../components/common/Nav';
import Contents from '../components/search/SearchContents';

const Search = ({location}) => {
    return (
        <>
            <Nav />
            <Contents location={location}/>
            <Footer />
        </>
    );
};

export default Search;