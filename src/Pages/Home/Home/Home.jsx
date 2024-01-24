import React from 'react';
import Banner from './Sections/Banner';
import FeaturedProperties from './Sections/FeaturedProperties';
import AllProperties from './Sections/AllProperties';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllProperties></AllProperties>
            <FeaturedProperties></FeaturedProperties>
        </div>
    );
};

export default Home;