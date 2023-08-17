import React, { useRef, useState } from 'react'
import './front.css'
import Timer from './Timer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Front = () => {
    const [form, setForm] = useState({});
    const handleForm = (e) => {
        console.log(e.target.name, e.target.value);
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8080/demo', {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        console.log(data);

        console.log("form submiited succesfully");

    }

    const fname = useRef("");
    const handleRefresh = (e) => {
        e.preventDefault();
        fname.current.value = "";
    }
    const [count, setCount] = useState(34);
    const handleIncre = () => {
        setCount(count + 1);
    }
    return (

        <>
            <form onSubmit={handleSubmit}>
                <div className='heading'>
                    <img src="TPADL.png" alt="logo" />
                    <h2>TP-AJMER DISTRIBUTION LIMITED</h2>
                </div>
                <div className="body">
                    <fieldset>
                        <legend className='legend'>
                            Synchronize Token No.
                        </legend>
                        <div className="contain">
                            <span>Consumer Token No</span> <input type="text" ref={fname} style={{ marginLeft: 40 }} className='input' name='tokenNo' onChange={handleForm} />
                            <button className='refresh' onClick={handleRefresh}>Refresh</button><br />
                            <span>Consumer Details</span><br />
                            <span>Consumer Enquiry Type</span> <input type="text" ref={fname} className='input' name='enquiry' onChange={handleForm} /><br />
                            <div className="checkbox">
                                <input type="checkbox" name='check' ref={fname} onChange={handleForm} /> <span className='check' style={{ marginTop: 10 }}>If Change Req. Consumer Enquiry Type</span><br />
                            </div>
                            <select name="application" id="" className='select' ref={fname} onChange={handleForm}>
                                <option value="Billing" name="application">Billing</option>
                                <option value="Demand Note" name="application">Demand Note</option>
                                <option value="Metering" name="application">Metering</option>
                                <option value="Power Supply" name="application">Power Supply</option>
                                <option value="New Connection" name="application">New Connection</option>
                                <option value="Line Shift" name="application">Line Shift</option>
                                <option value="Payment" name="application">Payment</option>
                                <option value="Sec. Refund" name="application">Sec. Refund</option>
                                <option value="Duplicate Bill" name="application">Duplicate Bill</option>
                                <option value="Others" name="application">Others</option>
                                <option value="Attribute Chnage" name="application">Attribute Chnage</option>
                                <option value="Settlement Case" name="application">Settlement Case</option>
                                <option value="Name Correction" name="application">Name Correction</option>
                                <option value="Adress Correction" name="application">Adress Correction</option>
                                <option value="Name Change" name="application">Name Change</option>
                                <option value="Part Payment" name="application">Part Payment</option>
                                <option value="PDC" name="application">PDC</option>

                                <option value="AVVNL Audit" name="application">AVVNL Audit</option>
                                <option value="TPADL Audit" name="application">TPADL Audit</option>
                                <option value="Mobile App Query" name="application">Mobile App Query</option>
                                <option value="Mobile/ Email Update" name="application">Mobile/ Email Update</option>
                                <option value="Feedback" name="application">Feedback</option>
                                <option value="Appreciation" name="application">Appreciation</option>
                            </select>
                        </div>
                        <br />

                        <div className="postContent">
                            Customer In Queue
                            <p>34</p>
                            <p>35</p>
                            <p>36</p>
                            {/* <textarea className="textarea" rows={7} cols={18} >
                                Customer In Queue
                                24
                            </textarea> */}
                        </div>

                        <div className='time'>
                            <Timer />
                        </div>
                    </fieldset>

                </div>
                <div className="center">
                    <fieldset>
                        <legend className='legend'>Consumer Exit Reason</legend>
                        <div className="btn1" >
                            <span >Consumer Exit Reason</span> <select name="exitreason" id="" ref={fname} onChange={handleForm}>
                                <option value="Grievance Resolved" name="exitreason">Grievance Resolved</option>
                                <option value="Consumer Not Interested" name="exitreason">Consumer Not Interested</option>
                                <option value="Forwarded to TL for Part Payment" name="exitreason">Forwarded to TL for Part Payment</option>
                                <option value="Forwarded to TL for Cash Payment" name="exitreason">Forwarded to TL for Cash Payment</option>
                                <option value="Forwarded to TL for Audit Enquiry" name="exitreason">Forwarded to TL for Audit Enquiry</option>
                                <option value="Forwarded to TL for Notification Processing Appproval " name="exitreason">Forwarded to TL for Notification Processing Appproval </option>
                                <option value="Forwarded to TL for further Escalation" name="exitreason">Forwarded to TL for further Escalation</option>

                                <option value="Directed to TL/option" name="exitreason">Directed to TL/option</option>
                                <option value="Forwarded to TL for Audit Enquiry" name="exitreason">Forwarded to TL for Audit Enquiry</option>
                            </select>
                        </div>
                        <div className='btn'>
                            <Link to="/exitcustomer">
                                <button className='exit'>  Exit Consumer -- </button>
                            </Link>
                            <select name="breakfor" id="" className='btn3' ref={fname} onChange={handleForm}>
                                <option value="Break End<" name="breakfor">Break End</option>
                                <option value="Department Diss." name="breakfor">Department Diss.</option>
                                <option value="Washroom Break" name="breakfor">Washroom Break</option>
                                <option value="TL Briefing" name="breakfor">TL Briefing</option>
                                <option value="Lunch Break" name="breakfor">Lunch Break</option>
                            </select>
                            <button className='btn3'>Working Time</button>

                        </div>
                    </fieldset>

                </div>
                <div>
                    <fieldset>
                        <legend className='legend1'>.</legend>

                        <button className='footer-head' style={{ color: 'red' }}>Previous No. {count - 1}</button>
                        <div className="footer">
                            <span style={{ color: 'red' }} >Desk Q No {count}</span><br />
                            <button onClick={handleIncre} className='footbtn'>Next No </button>
                        </div>
                    </fieldset>
                </div>
                <Link to="/submitform">
                    <input type="submit" className='foot'></input>
                </Link>
            </form>
        </>
    )
}

export default Front
