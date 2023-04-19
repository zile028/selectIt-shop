import React from 'react';
import {Link} from "react-router-dom";
import {routes} from "../../router/routes";

function MyAccount(props) {
    return (
        <div>My Account <Link to={routes.HOME.path}>HOME</Link></div>
    );
}

export default MyAccount;