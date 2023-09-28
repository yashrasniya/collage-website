// import { useState } from 'react'
// import '../home/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './auth.css';


import Topheader from './topheader.jsx';
import Navbar from './Navbar.jsx';
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
const base_url='https://abhay.itgopeshwar.in/'


const Register_page = () => {

    const [data,setData]=useState({
        roll_number:'',
        first_name:'',
        last_name:'',
        branch:'',
        batch:'',
        password:'',
        password2:'',
        email:'',
        mobile_number:'',
        check:'',
    })
    let [obj_data,set_obj_data]=useState({})
    let [response,set_responce]=useState({})

    const [error,setError]=useState()
    useEffect(() => {
        // fetch data
        if(localStorage.getItem("token"))
        {   fetch(base_url+'profile/',{method:'GET', headers: {
                "Content-Type": "application/json",
                "Authorization":"Bearer "+localStorage.getItem("token")

            }}).then((response)=>{
            if(response.status===200){
                navigate('/profile')
            }

        })

        }
    })
    const handelRegister = async () => {
        const url=base_url+'register/'

        await fetch(url,{ method: "POST",
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
            },body: JSON.stringify(data)
        }).then(response=> {
            set_responce(response)
            return response.json()
        })
            .then(result=>{
                console.log(result.status)
                console.log(result)
                if(result.status===200){
                    set_obj_data(result);
                    localStorage.setItem("token", result.token);
                    navigate('/profile')
                }
                else if(result.status===400){
                    if(result.roll_number){
                        setError(data.roll_number+" is allready exist if that does not you contact to admin")

                    }

                }
            }).catch(error=>alert('some thing went wrong'+ error))


    }
    const handelSubmit=(e)=> {
        console.log(data)
        const input_check = (id) => {
          if(!id){
              setError([id]+' was not given')
              return true;
          }
          return false
        }
        if(!data.roll_number){setError('Roll Number was not given');return true;}
        if ((isNaN(data.roll_number))) {
            setError('Mobile Number must be INT')
            return;
        }
        if(!data.first_name){setError('First Name was not given');return true;}
        if(!data.last_name){setError('Last Name was not given');return true;}
        if(!data.mobile_number){setError('Mobile Number was not given');return true;}
        if((data.branch==='None')){setError('Branch was not given');return true;}
        if((data.batch==='None')){setError('Year was not given');return true;}

        if (!data.password) {
            setError('Password was not given')
            return;
        }
        if (!(data.password.length >= 8)) {
            setError('Password should be 8 Characters long')
            return;
        }
        if (!(data.password === data.password2)) {
            setError('Password one and two are not Same')
            return;
        }
        if (!(data.mobile_number.length <=10 )) {
            setError('Mobile Number Must be 10 Characters long')
            return;
        }
        if ((isNaN(data.mobile_number))) {
            setError('Mobile Number must be INT')
            return;
        }

        if (!data.check) {
            setError('Acknowledgement is not checked')
            return
        }
        handelRegister()
    }

    const arrayRange = (start, stop, step) =>
        Array.from(
            { length: (stop - start) / step + 1 },
            (value, index) => start + index * step
        );
    const heandelOnChange = (e) => {
        setData({...data,[e.target.id]:e.target.value})
    }
    let navigate = useNavigate();
    return(<div className={'d-flex mt-5 justify-content-center'}>
            <div className={'card col-10 col-md-6'} >
                <div className={'card-header text-center fw-bold fs-4' }>
                    Register
                </div>
                <div className={' text-danger mt-2 mx-3'}>
                    {error}
                </div>
                <div className={'card-body'}>
                    <div className="mb-3">
                        <label  className="form-label">Roll Number</label>
                        <input type="text" className="form-control" id="roll_number"  onChange={heandelOnChange} placeholder='2013401000'/>
                    </div>
                    <div className="mb-3 ">
                        <label  className="form-label">Name</label>
                        <div className={'row'}>
                            <div className={'col'}>
                                <input type="text" className="form-control" id="first_name" onChange={heandelOnChange}  placeholder='First Name'/>
                            </div>
                            <div className={'col'}>
                                <input type="text" className="form-control" id="last_name" onChange={heandelOnChange}  placeholder='Last Name'/>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3 ">
                        <label  className="form-label">Year and Branch</label>
                        <div className={'row'}>
                            <div className={'col'}>
                                <select  className="form-control" id="branch"
                                    // value={user.branch}
                                    // disabled={true}
                                         onChange={heandelOnChange}>
                                    <option value={'0'} selected >None</option>
                                    <option value={'Computer science and engineering'}>Computer science and engineering</option>
                                    <option value={'Electrical engineering'}>Electrical engineering</option>
                                    <option value={'Electronics and Communications Engineering'}>Electronics and Communications Engineering</option>
                                    <option value={'Civil Engineering'}>Civil Engineering</option>
                                    <option value={'Mechanical engineering'}>Mechanical engineering</option>
                                    <option>cse</option>
                                    <option>ME</option>

                                       </select>
                            </div>
                            <div className={'col'}>
                                <select  className="form-control" id="batch"
                                    // value={user.branch}
                                    // disabled={true}
                                         onChange={heandelOnChange}>
                                    <option selected>None</option>
                                    {arrayRange(2019,2030,1).map((e)=>{
                                        return(<option value={e.toString()+'-'+(e+4).toString()}  >{e.toString()+'-'+(e+4).toString()}</option>)
                                    })}


                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" placeholder='*********' onChange={heandelOnChange} />
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Re Enter Password</label>
                        <input type="password" className="form-control" id="password2" onChange={heandelOnChange} placeholder='*********'/>
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" onChange={heandelOnChange} placeholder='abc@gmail.com'/>
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Mobile number</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">+91</span>
                            <input type="text" className="form-control" id="mobile_number" onChange={heandelOnChange}  placeholder='9844444333'/></div>
                    </div>
                    <div className="custom-control custom-checkbox mb-4">
                        <input type="checkbox" className="custom-control-input" onChange={(e)=> setData({...data,[e.target.id]:e.target.checked})}  id="check"/>
                            <label className="form-label ms-2" htmlFor="customCheck1">All information are correct and related to me.</label>
                    </div>
                    <input type='button' value={'Register '} onClick={handelSubmit} className={'btn w-100 text-light'} style={{backgroundColor:'#7E1717'}}/>
                    <div className={'w-100  text-end'} onClick={()=>{navigate('/login')}}>
                        <a>Login</a>
                    </div>
                </div>
            </div></div>
    )
}


const Register = ()=> {
    return(
        <>
            {/*<Topheader ></Topheader>*/}
            <Navbar obj={{auth: false}}></Navbar>
            <Register_page></Register_page>

        </>
    )
}
export default Register;