import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../auth/Navbar.jsx';
import axios from "axios";
import { useNavigate} from "react-router-dom";

const base_url='https://api.itgopeshwar.in/api/'


const Feedback_form = () => {
    let [subject,setSubject]=useState('')
    let [message,setMessage]=useState('')
    const handelSubmit=(e)=>{
        if ((!subject) || (!message)){
            alert('Subject or message is Blank')
        }

        let data = {
            subject:subject,
            message:message,

        }
        console.log(data)
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: base_url+'feedback/',
            headers: {
                'Authorization': "Bearer "+localStorage.getItem("token"),
            },
            data : data
        };
        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                alert('your Feedback is saved')
            })
            .catch((error) => {
                console.log(error);
            });
    }

  return(
      <div className={'container mt-4 justify-content-center d-flex'}>
        <div className={'card col-md-5'}>
            <div className={'card-header text-center fs-4 fw-bold'}>
Feedback
            </div>
            <div className={'card-body'}>
            <div className={'mt-4'}>
                <div className={'form-label'}>Subject</div>
            <input className={'form-control'} type='text' value={subject} onChange={(e)=>setSubject(e.target.value)}/>
            </div>
                <div className={'mt-4'}>
                    <div className={'form-label'}>Message</div>
                    <textarea className={'form-control'} value={message} onChange={(e)=>setMessage(e.target.value)}/>
                </div>
            </div>
            <input type='button' value='Submit' onClick={handelSubmit} className={'p-2 text-white btn'} style={{backgroundColor:'#7E1717'}}/>

        </div>
      </div>
  )
}


const Feedback = ()=> {
    return(
        <>
            {/*<Topheader ></Topheader>*/}
            <Navbar obj={{auth: false}}></Navbar>
           <Feedback_form></Feedback_form>

        </>
    )
}
export default Feedback;