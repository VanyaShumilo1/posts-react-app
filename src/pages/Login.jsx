import React, {useContext} from 'react';
import MyInput from "../components/UI/inputs/MyInput";
import MyButton from "../components/UI/buttons/MyButton";
import {AuthContext} from "../context";

const Login = () => {

    const {setIsAuth} = useContext(AuthContext)

    const login = (event) => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }

    return (
        <div className="Login">
            <h1>Login</h1>
            <form onSubmit={login}>
                <MyInput placeholder={"Login"}/>
                <MyInput type={"password"} placeholder={"Password"}/>
                <MyButton>Log in</MyButton>
            </form>

        </div>
    );
};

export default Login;