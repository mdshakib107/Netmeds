import React from 'react';
import Banar from '../Banar/Banar';
import HelthBlog from '../HealthBlog/HelthBlog';
import LabTest from '../LabTestHome/LabTestHome';
import Medicines from '../Products/ProductMedicine/Medicines/Medicines';
import Wellnesses from '../Products/ProductWellness/Wellnesses/Wellnesses';
import TrendingProduct from '../TrendingProduct/TrendingProduct';

const Home = () => {
    return (
        <div>

            <Banar></Banar>
            <TrendingProduct></TrendingProduct>
            <Medicines></Medicines>
            <Wellnesses></Wellnesses>
            <LabTest></LabTest>
            <HelthBlog></HelthBlog>



        </div>
    );
};

export default Home;