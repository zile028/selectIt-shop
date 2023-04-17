import React from 'react';
import Heading from '../../component/Heading/Heading';
import bgImage from "../../assets/images/contactbanner.jpg"
import Subscribe from "../../component/Subscribe/Subscribe";

function HomePage() {


    return (
        <>
            <Heading title="Home page" bgImage={bgImage} />
            <div>HOME</div>
            <Subscribe />
        </>
    );
}

export default HomePage;