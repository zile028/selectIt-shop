import React, {useEffect} from 'react';
import UserServices from "../../services/UserServices";
import Heading from '../../component/Heading/Heading';
import bgImage from "../../assets/images/contactbanner.jpg"

function HomePage() {

    useEffect(() => {
        UserServices.getUser("zile028@gmail.com")
            .then((res) => {
                console.log(res.data)
            })
    }, [])


    return (
        <>
            <Heading title="Home page" bgImage={bgImage} />
            <div>HOME</div>
        </>
    );
}

export default HomePage;