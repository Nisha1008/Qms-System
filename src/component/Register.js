import React, { useState } from 'react'
import './register.css'
import { NavLink, useNavigate } from 'react-router-dom'

const Register = () => {

    const history = useNavigate();
    const [inputval, setInputval] = useState({
        name: "",
        email: "",
        password: ""
    })

    console.log(inputval);
    const [data, setData] = useState([]);
    const getData = (e) => {
        e.preventDefault();

        const { name, value } = e.target;
        console.log(name, value);
        setInputval(() => {
            return {
                ...inputval,
                [name]: value
            }
        })
    }



    const addData = (e) => {
        e.preventDefault();
        const { name, email, password } = inputval;

        if (name === "") {
            alert("name is required");
        }
        else if (email === "") {
            alert("email is required");
        } else if (!email.includes('@')) {
            alert("please enter a valid email adress");
        }
        else if (password === "") {
            alert("password is required");
        }
        else if (password.length < 5) {
            alert("password length must be greater than 5");
        } else {
            alert("Registered successfully");
            history("/login");
            localStorage.setItem("UserInfo", JSON.stringify([...data, inputval]))
        }

    }




    return (
        <>
            <main className='main'>
                <form method="post" className='form'>
                    <h1 className='header'>Register Form</h1>
                    <div className="mainDiv">
                        <div className='pic' style={{ marginTop: "60px" }}>
                            <img src="logo2.jpeg" alt="tpadlpic" className='imgtpadl' />
                        </div>


                        <div className='forminput'>
                            <label htmlFor="name" className='text'> Name</label>
                            <input type="text" name="name" placeholder="Name" onChange={getData} className='inputcontent' />
                            <label htmlFor="email" className='text'>Email</label>
                            <input type="email" name="email" id="" placeholder="Email" onChange={getData} className='inputcontent' />
                            <label htmlFor="password" className='text'>Password</label>
                            <input type="password" name="password" id="" placeholder="Password" onChange={getData} className='inputcontent' />
                            <button type="submit" className='btn2' onClick={addData}>Submit</button>
                            <span style={{ marginLeft: "15px", color: "white" }} ><NavLink to="/login">Login</NavLink></span >

                        </div>
                    </div>
                </form>
            </main>
        </>
    )
}
export default Register