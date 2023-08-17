import React, { useState } from 'react';
import "./register.css";
import { NavLink, useNavigate } from 'react-router-dom';
const Login = () => {
    const history = useNavigate();

    const [inputVal, setInputVal] = useState({
        email: "",
        password: ""
    })

    console.log(inputVal);

    const getData = (e) => {
        e.preventDefault();
        const { value, name } = e.target;
        console.log(value, name);
        setInputVal(() => {
            return {
                ...inputVal,
                [name]: value
            }
        })
    }

    const addData = (e) => {
        e.preventDefault();
        const getUser = localStorage.getItem("UserInfo");
        console.log(getUser);
        const { email, password } = inputVal;
        if (email === "") {
            alert("email is required")
        } else if (!email.includes("@")) {
            alert("please enter valid email adress")
        } else if (password === "") {
            alert("password filed is required")
        } else if (password.length < 5) {
            alert("password length must be grater than 5")
        } else {
            if (getUser && getUser.length) {
                const userdata = JSON.parse(getUser)
                // console.log(userdata);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password
                });
                if (userlogin.length === 0) {
                    alert("invalid details");
                } else {
                    console.log("user login sucessfully")
                    history("/front")
                }
            }
        }

    }

    return (
        <>
            <main className='main'>
                <form method="post" action="/login" className='form'>

                    <h1 className='header'>SC-QMS</h1>
                    <a href="TPADL.png" className='link'>Smart Central Queue Management System</a><br />
                    <div className="mainDiv">
                        <div className='pic'>
                            <img src="TPADL.png" alt="tpadlpic" className='imgtpadl' />
                        </div>

                        <div className='forminput'>
                            <label className='text'>User ID</label><br />
                            <input type="email" placeholder="User ID" name="email" onChange={getData} className='inputcontent' /><br />

                            <label className='text'>Password</label><br />
                            <input type="password" placeholder='Password' name="password" onChange={getData} className='inputcontent' /><br />

                            <div>
                                <button type="submit" className='btn11' onClick={addData}>Submit</button>
                                <span style={{ marginLeft: "15px", color: "white" }} ><NavLink to="/register">Register</NavLink></span >

                            </div>
                        </div>
                    </div>
                </form>
            </main>
        </>
    )
}

export default Login
