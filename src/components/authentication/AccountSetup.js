import React from "react";
import { isLoggedIn } from "../../helper/auth";
import Registration from "./Registration";
import Login from './Login';

const AccountSetup = () => {
    return (<>{(isLoggedIn) ? <Login /> : <Registration />}</>)
}

export default AccountSetup