import { useState, useEffect } from "react";

// import '../home/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import './auth.css';


import Topheader from './topheader.jsx';
import Navbar from './Navbar.jsx';
import { useNavigate} from "react-router-dom";


const base_url='https://abhay.itgopeshwar.in'
const Login_page = () => {
    let navigate = useNavigate();
    let [rollNumber,setRollNumber]=useState('')
    let [password,setpassword]=useState('')
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
    const handelLogin = (event) => {
        const data={roll_number:rollNumber,password:password}
        let response_=''
        if (!(data.roll_number )) {
            setError('roll_number was not given')
            return;
        }
        if (!(data.password)) {
            setError('Password was not given')
            return;
        }


        const url=base_url+'login/'

        // dataFetch()
        fetch(url,{ method: "POST",
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
            },body: JSON.stringify(data)
        }).then(response=> {
            response_=response
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
                    if(result.error){
                        setError(result.error)

                    }

                }
            }).catch(error=>alert('some thing went wrong'+ error))

        }


  return(<div className={'d-flex mt-5 justify-content-center'}>
      <div className={'card col-10 col-md-6'} >
          <div className={'card-header text-center fw-bold fs-4' }>
              Login
          </div>
          <div className={'card-body'}>
              <div className={' text-danger mt-2 '}>
                  {error}
              </div>
      <div className="mb-3">
          <label  className="form-label">Roll Number</label>
          <input type="text" className="form-control" onChange={(e)=>{setRollNumber(e.target.value)}} id="roll_number" placeholder='2013401000'/>
      </div>
    <div className="mb-3">
        <label  className="form-label">Password</label>
        <input type="password" className="form-control" onChange={(e)=>{setpassword(e.target.value)}} id="password" placeholder='*********'/>
    </div>
          <input type='button' value={'Login '}  onClick={handelLogin} className={'btn w-100 text-light'} style={{backgroundColor:'#7E1717'}}/>
      <div className={'w-100  text-end'} onClick={()=>{navigate('/register')}}>
          <a>Register</a>
      </div>
          </div>
      </div></div>
  )
}




const Login = ()=> {
    return(
        <>
            {/*<Topheader ></Topheader>*/}
            <Navbar obj={{auth: false}}></Navbar>
            <Login_page></Login_page>

        </>
    )
}
export default Login;