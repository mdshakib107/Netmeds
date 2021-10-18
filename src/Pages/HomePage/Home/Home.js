import React from 'react';
import Banar from '../Banar/Banar';
import Header from '../Header/Header';
import Medicines from '../Products/ProductMedicine/Medicines/Medicines';
import TrendingProduct from '../TrendingProduct/TrendingProduct';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banar></Banar>
            <TrendingProduct></TrendingProduct>
            <Medicines></Medicines>


        </div>
    );
};

export default Home;