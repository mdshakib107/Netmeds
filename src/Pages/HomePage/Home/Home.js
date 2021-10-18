import React from 'react';
import Banar from '../Banar/Banar';
import Header from '../Header/Header';
import TrendingProduct from '../TrendingProduct/TrendingProduct';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banar></Banar>
            <TrendingProduct></TrendingProduct>

        </div>
    );
};

export default Home;