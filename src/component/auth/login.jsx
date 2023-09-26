// import { useState } from 'react'
// import '../home/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import './auth.css';


import Topheader from './topheader.jsx';
import Navbar from './navbar.jsx';
const Login_page = () => {

  return(<div className={'d-flex mt-5 justify-content-center'}>
      <div className={'card col-10 col-md-3'} >
          <div className={'card-header text-center fw-bold fs-4' }>
              Login
          </div>
          <div className={'card-body'}>
      <div className="mb-3">
          <label  className="form-label">Roll Number</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder='2013401000'/>
      </div>
    <div className="mb-3">
        <label  className="form-label">Password</label>
        <input type="password" className="form-control" id="password" placeholder='*********'/>
    </div>
          <input type='button' value={'Login '} className={'btn w-100 text-light'} style={{backgroundColor:'#7E1717'}}/>
      <div className={'w-100  text-end'}>
          <a>Register</a>
      </div>
          </div>
      </div></div>
  )
}


const Login = ()=> {
    return(
        <>
            <Topheader ></Topheader>
            <Navbar obj={{auth: true}}></Navbar>
            <Login_page></Login_page>

        </>
    )
}
export default Login;