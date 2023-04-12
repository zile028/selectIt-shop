import React, {useEffect} from 'react';
import UserServices from "../../services/UserServices";

function HomePage() {

    useEffect(() => {
        UserServices.getUser("zile028@gmail.com")
            .then((res) => {
                console.log(res.data)
            })
    }, [])


    return (
        <div>HOME</div>
    );
}

export default HomePage;