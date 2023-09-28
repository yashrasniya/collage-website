import Topheader from "./topheader.jsx";
import Navbar from "./Navbar.jsx";
import {useEffect, useState} from "react";
import {json, useNavigate} from "react-router-dom";

const base_url='http://127.0.0.1:8000/api/'

const Profile = () => {
    const [user,setUser]=useState({'roll_number':'wait'})
    const [user_sender,setUserSender]=useState()
    const [isData,setisData]=useState(false)
    let navigate = useNavigate();
    // if(user?.roll_number==='wait'){
    //     setisData(false)
    // }

    useEffect(() => {
        // fetch data
        if(!isData){
        if(localStorage.getItem("token"))
        {   fetch(base_url+'profile/',{method:'GET', headers: {
                "Content-Type": "application/json",
                "Authorization":"Bearer "+localStorage.getItem("token")

            }}).then(response =>
            response.json()
            .then(result=>{
            if(response.status===200){
                setUser(result)
                setisData(true)

            }else {
                navigate('/login')
            }

        }))}
    }

})
    const handelSave = () => {


        let obj= {...user_sender,
            ...localStorage.getItem("marksheet_10")?{'marksheet_10':localStorage.getItem("marksheet_10")}:{},
            ...localStorage.getItem("marksheet_12")?{'marksheet_12':localStorage.getItem("marksheet_12")}:{}}
        fetch(base_url+'profile/',{method:'POST', headers: {
                "Content-Type": "application/json",
                "Authorization":"Bearer "+localStorage.getItem("token"),
                // 'Content-Type': 'multipart/form-data;'

            },body: JSON.stringify(obj)}).then(reponse=>reponse.json()).
        then(result=> {
            setUser(result)
            if (localStorage.getItem("marksheet_10")){
                localStorage.removeItem("marksheet_10")

            }
            if (localStorage.getItem("marksheet_12")){
                localStorage.removeItem("marksheet_12")

            }
        })
            .catch(error=>alert('some thing went wrong'))

    };
    function getBase64(e) {
        let file=e.target.files[0]
        if(file.size > 5097152){
            alert("File is too big!");
            this.value = "";
        }
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            console.log(reader.result);
            localStorage.setItem([e.target.id], reader.result);

            // return reader.result
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }
    // const handelFileSave =  (e) => {
    //     let data={[e.target.id]:toString(await getBase64(e.target.files[0]))}
    //     fetch(base_url+'profile/',{method:'POST', headers: {
    //             "Content-Type": "application/json",
    //             "Authorization":"Bearer "+localStorage.getItem("token"),
    //             // 'Content-Type': 'multipart/form-data;'
    //
    //         },body: JSON.stringify(data)}).then(reponse=>reponse.json()).
    //     then(result=>setUser(result))
    //         .catch(error=>alert('some thing went wrong'))
    //
    // };
    const heandelOnChange=(event)=>{

        setUserSender({...user_sender,[event.target.id]:event.target.value})
        setUser({...user,[event.target.id]:event.target.value})
    }


  return(
<div className={'d-flex w-100 justify-content-center'} >

    <div className={'col-11 col-md-6 col-sm-10 p-3 rounded-2 mt-3' } style={{backgroundColor:' #F8F9FA'}}>
        <div className={'text-primary2 text-center'} style={{fontSize:'2rem'}}> Profile Update</div>
        <div className={'my-3 '}>
            <div className={' overflow-hidden flex-column w-100 justify-content-center '} >
                <div className={'d-flex justify-content-center'}>
                <img src={user.profile?user.profile:"https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg"} className={'object-fit-cover rounded-circle'} width={'150px'} height={'150px'} onClick={(e)=>document.getElementById('profile_input').click()}/>

                    <input type={'file'} id={'profile'}  accept=".png, .jpeg .jpg"   onChange={(e)=>console.log(getBase64(e)) }hidden/>
                    <div className={'cam_black '}  onClick={(e)=>document.getElementById('profile').click()}>
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" id="camera"><path d="M19,6.5H17.72l-.32-1a3,3,0,0,0-2.84-2H9.44A3,3,0,0,0,6.6,5.55l-.32,1H5a3,3,0,0,0-3,3v8a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3v-8A3,3,0,0,0,19,6.5Zm1,11a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1v-8a1,1,0,0,1,1-1H7a1,1,0,0,0,1-.68l.54-1.64a1,1,0,0,1,.95-.68h5.12a1,1,0,0,1,.95.68l.54,1.64A1,1,0,0,0,17,8.5h2a1,1,0,0,1,1,1Zm-8-9a4,4,0,1,0,4,4A4,4,0,0,0,12,8.5Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14.5Z"></path></svg>
                    </div>
                </div>
                <label  className="w-100 text-center fs-3">{user.name}</label>
            </div>

        </div>
        <div className="mb-3">
            <label  className="form-label">Roll Number</label>
            <input type="text" className="form-control " disabled={true}
                   // onChange={(event)=>setUser({...user,[event.target.id]:event.target.value})}
                   value={user.roll_number} id="roll_number" placeholder='2013401000'/>

        </div>
        <div className="mb-3 ">
            <label  className="form-label">Name</label>
            <div className={'row'}>
                <div className={'col'}>
                    <input type="text" className="form-control" id="first_name"
                           value={user.first_name}
                           disabled={true}
                           onChange={heandelOnChange}
                            placeholder='First Name'/>
                </div>
                <div className={'col'}>
                    <input type="text" className="form-control" id="last_name"
                           value={user.last_name}
                           disabled={true}
                           onChange={heandelOnChange}
                           placeholder='Last Name'/>
                </div>
            </div>
        </div>
        <div className="mb-3">
            <label  className="form-label">DOB</label>
            <input type="date" className="form-control" id="dob" value={user.dob}
                   onChange={heandelOnChange}
                   placeholder=''/>
        </div>
        <div className="mb-3 ">
            <label  className="form-label">Year and Branch</label>
            <div className={'row'}>
                <div className={'col-9'}>
                    <input type="text" className="form-control" id="branch"
                           value={user.branch}
                           disabled={true}
                           onChange={heandelOnChange}
                           placeholder='branch'/>
                </div>
                <div className={'col-3'}>
                    <input type="text" className="form-control" id="batch"
                           value={user.batch}
                           disabled={true}
                           onChange={heandelOnChange}
                           placeholder='batch'/>
                </div>
            </div>
        </div>
        <div className="mb-3">
            <label  className="form-label">Mother Name</label>
            <input type="text" className="form-control" id="Mother_name" value={user.Mother_name}
                   onChange={heandelOnChange}
                   placeholder=''/>
        </div>
        <div className="mb-3">
            <label  className="form-label">Father Name</label>
            <input type="text" className="form-control" id="Father_name"
                   onChange={heandelOnChange}
                   value={user.Father_name}placeholder=''/>
        </div>
        <div className="mb-3">
            <label  className="form-label">Email</label>
            <input type="email" className="form-control" id="email"
                   onChange={heandelOnChange}
                   disabled={true}
                   value={user.email} placeholder='abc@gmail.com'/>
        </div>
        <div className="mb-3">
            <label  className="form-label">Mobile number</label>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">+91</span>
                <input type="text" className="form-control" id="mobile_number"
                       onChange={heandelOnChange}
                       value={user.mobile_number} placeholder='9844444333'/></div>
        </div>
        <div className="mb-3">
            <label  className="form-label">Parent Mobile number</label>
            <div className="input-group mb-3">
                <span className="input-group-text" >+91</span>
                <input type="text" className="form-control" id="parent_mobile_number"
                       onChange={heandelOnChange}
                       value={user.parent_mobile_number} placeholder='9844444333'/></div>
        </div>
        <div className={'mb-3'}>
            <div className={'form-label'}>Gender</div>
            <div className={'row px-3'}>
        <div className="form-check col">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="gender" value={"Male"}
                   onClick={ (event)=> {
                       setUserSender({...user, [event.target.id]: event.target.value})
                       console.log(event.target.value)
                   }}
                   checked={user.gender=='Male'}
            />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Male
                </label>
        </div>
            <div className="form-check col">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="gender"     value={"Female"}                        onChange={()=>setUser({...user,[event.target.id]:event.target.value})}
                       checked={user.gender=='Female'}
                       onClick={heandelOnChange}/>
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Female
                </label>
            </div></div>
            <div className="mb-3 ">
                <label  className="form-label">Address</label>
                <div className={'row'}>
                    <div className={'col-6 mb-3'}>
                        <input type="text" className="form-control" id="country"
                               onChange={heandelOnChange}
                               value={user.country}  placeholder='Country'/>
                    </div>
                    <div className={'col-6 mb-3'}>
                        <input type="text" className="form-control" id="state"
                               onChange={heandelOnChange}
                               value={user.state} placeholder='State'/>
                    </div>
                    <div className={'col-6 mb-3'}>
                        <input type="text" className="form-control" id="ity"
                               onChange={heandelOnChange}
                               value={user.city}  placeholder='City'/>
                    </div>
                    <div className={'col-6 mb-3'}>

                        <input type="text" className="form-control col-6 remover_spiner" id="pincode"
                               onChange={heandelOnChange}
                               value={user.pincode}  placeholder='Picode'/>
                    </div>
                    <div className={'col-12 mb-3'}>
                        <input type="text" className="form-control col-6" id="landmark"
                               onChange={heandelOnChange}
                               value={user.landmark}  placeholder='Landmark'/>
                    </div>
                    <div className={'col-12 '}>
                        <textarea className="form-control" id="address"
                                  onChange={heandelOnChange}
                                  value={user.address} placeholder='Address'/>
                    </div>
                </div>
            </div>
        <div className={'mb-3'}>
            <label  className="form-label">Adhar Number</label>
            <input type="text" className="form-control" id="adhar_number"  value={user.adhar_number}
                   onChange={heandelOnChange}
                   placeholder='1112223334445555'/>
        </div>
            <div className={'mb-3'}>
                <div className={'col'}>
                    <label  className="form-label col-12">10 Mark Sheet<p className={'text-danger mb-0 '}>max size 5MB</p> </label>
                    {user.marksheet_10? (<a className={''} href={user.marksheet_10}>link</a>):(<div></div>)}

                    <input type="file" className="form-control" id="marksheet_10" accept=".pdf, .jpg, .jpeg, .png"
                           onChange={(e)=>console.log(getBase64(e))
                           } />
    <event className="target value"></event>
                <div className={'col'}>
                    <label  className="form-label col-12">12 Mark Sheet <p className={'text-danger mb-0'}>max size 5MB</p></label>
                    {user.marksheet_12? (<a href={user.marksheet_12}>link</a>):(<div></div>)}
                    <input type="file" className="form-control" id="marksheet_12" accept=".pdf, .jpg, .jpeg, .png"
                           onChange={(e)=>console.log(getBase64(e)) }/>
                </div>

            </div>
        </div>
        <input type='button' value={'Save '} onClick={handelSave} className={'btn w-100 text-light'} style={{backgroundColor:'#7E1717'}}/>

    </div>



</div>
</div>
  )
}

const Profile_page = ()=> {
    return(
        <>
            {/*<Topheader ></Topheader>*/}
            <Navbar obj={{auth: true}}></Navbar>
            <Profile></Profile>


        </>
    )
}
export default Profile_page;