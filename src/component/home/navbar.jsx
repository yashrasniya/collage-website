// import { useState } from 'react'
import itg_img from '../../assets/institute-of-technology-gopeshwar-chamoli-logo.png'
import { useNavigate} from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import dropdown from "bootstrap/js/src/dropdown.js";
import {useState} from "react";

let l=[
    {name:"Home",child:[
        ]},
    {name:"About Us",child:[{name:"About ITG",link:'/abc'},
            {name:"About UTU",link:'/abc'},
            {name:"University Mission And  Vision",link:'/abc'},
            {name:" Director's Message",link:'/abc'},
            {name:"Plan Visit",link:'/abc',child:[
                    {name:"Virtual Tour",link:'/abc'},
                ]},

        ]} ,
    {name:"Administration",child:[
            {name:"Vice-Chancellor",link:'/abc'},
            {name:"Director",link:'/abc'},
            {name:"Deans",link:'/abc'},
            {name:"Head Of Department",link:'/abc'},
            {name:"Faculty In Charges",link:'/abc'},
            {name:"Working Committeess",link:'/abc'},
            {name:"BOG",link:'/abc'},
            {name:"MOU",link:'/abc'},
            {name:"Annual Report",link:'/abc'},
            {name:"AICTE(LOA/EOA)",link:'/abc'},
        ]} ,
    {name:"Academic",child:[
            {name:"Programmes",link:'/abc'},
            {name:"Apply Online",link:'/abc'},
            {name:"Ordinance",link:'/abc'},
            {name:"Fees & Expences",link:'/abc'},
            {name:"Academic Calendar",link:'/abc'},
            {name:"Syllabus",link:'/abc'},
            {name:"Time Table",link:'/abc'},

        ]},
    {name:"Department",child:[
            {name:"Civil Engineering",link:'/abc',child:[
                    {name:"About Department",link:'/abc'},
                    {name:"Vision & Mission",link:'/abc'},
                    {name:"Course",link:'/abc'},
                    {name:"Labs",link:'/abc'},
                    {name:"HOD and Faculty",link:'/abc'},
                    {name:"Syllabus",link:'/abc'},
                    {name:"Event",link:'/abc'},


                ]},

            {name:"Computer Science & Engineering",link:'/abc',child:[
                    {name:"About Department",link:'/abc'},
                    {name:"Vision & Mission",link:'/abc'},
                    {name:"Course",link:'/abc'},
                    {name:"Labs",link:'/abc'},
                    {name:"HOD and Faculty",link:'/abc'},
                    {name:"Syllabus",link:'/abc'},
                    {name:"Event",link:'/abc'},


                ]},
            {name:"Electrical Engineering",link:'/abc',child:[
                    {name:"About Department",link:'/abc'},
                    {name:"Vision & Mission",link:'/abc'},
                    {name:"Course",link:'/abc'},
                    {name:"Labs",link:'/abc'},
                    {name:"HOD and Faculty",link:'/abc'},
                    {name:"Syllabus",link:'/abc'},
                    {name:"Event",link:'/abc'},


                ]},
            {name:"Electronics & Communicatons  Engineering",link:'/abc',child:[
                    {name:"About Department",link:'/abc'},
                    {name:"Vision & Mission",link:'/abc'},
                    {name:"Course",link:'/abc'},
                    {name:"Labs",link:'/abc'},
                    {name:"HOD and Faculty",link:'/abc'},
                    {name:"Syllabus",link:'/abc'},
                    {name:"Event",link:'/abc'},


                ]},
            {name:"Mechanical Engineering",link:'/abc',child:[
                    {name:"About Department",link:'/abc'},
                    {name:"Vision & Mission",link:'/abc'},
                    {name:"Course",link:'/abc'},
                    {name:"Labs",link:'/abc'},
                    {name:"HOD and Faculty",link:'/abc'},
                    {name:"Syllabus",link:'/abc'},
                    {name:"Event",link:'/abc'},


                ]},
            {name:"Applied Science & Humanities ",link:'/abc',child:[
                    {name:"About Department",link:'/abc'},
                    {name:"Vision & Mission",link:'/abc'},
                    {name:"Course",link:'/abc'},
                    {name:"Labs",link:'/abc'},
                    {name:"HOD and Faculty",link:'/abc'},
                    {name:"Syllabus",link:'/abc'},
                    {name:"Event",link:'/abc'},


                ]},



        ]},
    {name:"Student Corner",child:[
            {name:"Cultural Event Gallery",link:'/abc'},
            {name:"Alumni Management System",link:'/abc'},
            {name:" College Event Gallery",link:'/abc'},
            {name:" Sports Event Gallery",link:'/abc'},



        ]} ,
    {name:"Facilities",child:[{name:"Infrastructure",link:'/abc'},
            {name:"Library",link:'/abc'},
            {name:"Internet Connectivity",link:'/abc'},
            {name:"Alternate Power Sources",link:'/abc'},
            {name:"Medical Facilities",link:'/abc'},
            {name:"Canteen",link:'/abc'},
            {name:"Security",link:'/abc'},
            {name:"National Digital Library (NDL)",link:'/abc'},
            {name:"NPTEL Local Chapter",link:'/abc'},
            {name:"Hostel",link:'/abc'},




        ]} ,


]

const NavBra = ()=> {
    let navigate = useNavigate();
    const [show, setShow] = useState(false);
    const showDropdown = (e)=>{
        setShow(!show);
    }
    const hideDropdown = (e) => {
        setShow(false);
    }
    const child_loop = (obj) => {
        return obj.child.map((obj_2)=>{
            if(obj_2?.child){
                return (<Dropdown drop= 'end'  >
                    <Dropdown.Toggle
                        variant="none"
                                      show={false}
                                      id="dropdown-basic"
                                      onMouseEnter={showDropdown}
                                      onMouseLeave={hideDropdown} >
                        {obj_2.name}
                    </Dropdown.Toggle  >
                <Dropdown.Menu  >
                    {child_loop(obj_2) }
                </Dropdown.Menu>
                </Dropdown>)
            }
            else {
                return ( <Dropdown.Item >{obj_2.name}</Dropdown.Item>)
            }

        })
    }
    return(<div className={'NavBra'}>
            <div className={'nav-logo'}>
                <img className={'nav-logo-img'} src={itg_img}/>
                <div className={'nav-logo-text'}>
                    <p className={'hind'}>प्रौद्योगिकी संस्थान, गोपेश्वर</p>
                    <p className={'english lf'}>Institute of Technology, Gopeshwar</p>
                    <p className={'english sf'}>VEER MADHO SINGH BHANDARI UTTARAKHAND TECHNICAL UNIVERSITY CAMPUS INSTITUTE</p>
                    <p className={'english  mf'}>Approved By AICTE, NEW DELHI</p>

                </div>
            </div>
            <p className={'hamburger'} onClick={()=>{
                document.getElementsByClassName('nav-button')[0].style.display='flex'

            }}><svg width="20"  viewBox="0 0 444 432" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.5968 0.0032959C-6.39379 0.0032959 -6.39379 47.9891 25.5968 47.9891H418.554C450.575 47.9891 450.575 0.0032959 418.554 0.0032959H25.5968ZM419.22 192.007H25.5665C-7.69397 190.707 -7.69397 241.898 25.5665 239.993H418.524C451.18 241.263 451.815 192.007 419.189 192.007H419.22ZM25.5665 384.011C-6.42402 384.011 -6.42402 431.997 25.5665 431.997H418.524C450.545 431.997 450.545 384.011 418.524 384.011H25.5665Z" fill="black"/>
            </svg></p>
            <div className={'nav-button'}>
                <div className={'close'} onClick={()=>{
                    document.getElementsByClassName('nav-button')[0].style.display='none'

                }}><svg width="20" height="20" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M70.7 64.3C72.5 66.1 72.5 68.8999 70.7 70.6999C69.8 71.5999 68.7 72 67.5 72C66.3 72 65.2 71.5999 64.3 70.6999L46 52.4L27.7 70.6999C26.8 71.5999 25.7 72 24.5 72C23.3 72 22.2 71.5999 21.3 70.6999C19.5 68.8999 19.5 66.1 21.3 64.3L39.6 46L21.3 27.7C19.5 25.9 19.5 23.1 21.3 21.3C23.1 19.5 25.9 19.5 27.7 21.3L46 39.6L64.3 21.3C66.1 19.5 68.9 19.5 70.7 21.3C72.5 23.1 72.5 25.9 70.7 27.7L52.4 46L70.7 64.3Z" fill="black"/>
                </svg></div>
                {l.map((obj)=> {
                    return (<>
                    <Dropdown >
                        <Dropdown.Toggle className={'button'} variant="none" show={false}  id="dropdown-basic">
                            {obj.name}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        {child_loop(obj)}
                        </Dropdown.Menu> </Dropdown></>
                    )
                })}


                {/*<Dropdown>*/}
                {/*    <Dropdown.Toggle variant="success" id="dropdown-basic">*/}
                {/*        Dropdown Button*/}
                {/*    </Dropdown.Toggle>*/}

                {/*    <Dropdown.Menu>*/}
                {/*        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>*/}
                {/*        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>*/}
                {/*        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>*/}
                {/*    </Dropdown.Menu>*/}
                {/*</Dropdown>*/}
                {/*<div className={'button'}>About</div>*/}
                {/*<div className={'button'}>Administration</div>*/}
                {/*<div className={'button'}>Departments</div>*/}
                {/*<div className={'button'}>Academic</div>*/}
                <div  onClick={()=>{navigate('/login');}} className={'button login-button'}>Login</div>
<div>

</div>
            </div>
        </div>
    )
}
export default NavBra;