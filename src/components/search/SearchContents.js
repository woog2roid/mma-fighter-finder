import React, { useState, useCallback } from 'react';
import qs from 'qs';
import styled from 'styled-components';
import { ColorCollection } from '../../utils/ColorCollection';
import { FontWeight } from '../../utils/FontWeight';

const SearchContents = ({ location }) => {
    const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
    });
    const fighter = query.fighter;
    
    return (
        <div>
        </div>
    );
};

export default SearchContents;