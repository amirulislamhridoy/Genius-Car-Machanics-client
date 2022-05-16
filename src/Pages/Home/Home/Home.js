import React from 'react';
import Helmet from 'react-helmet';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Banner from '../Banner/Banner';
import CarouselLibrary from '../CarouselLibrary/CarouselLibrary';
import Experts from '../Experts/Experts'
import Services from '../Serveices/Services';

const Home = () => {
    return (
        <div>
            {/* <Helmet>
                <title>Home - Ginius Car Machanics</title>
            </Helmet> */}
            <PageTitle title={"Home"}></PageTitle>
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
        </div>
    );
};

export default Home;