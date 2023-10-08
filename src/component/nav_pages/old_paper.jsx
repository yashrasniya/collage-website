import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../auth/Navbar.jsx';
import axios from "axios";
import { useNavigate} from "react-router-dom";

const base_url='https://api.itgopeshwar.in/api/'
const Branch_year=[
    'Computer science and engineering',
    'Electrical engineering',
    'Electronics and Communications Engineering',
    'Civil Engineering',
    'Mechanical engineering',
]

const year_array=[
    {name:'First Year',id:1},
    {name:'Second year',id:2},
    {name:'Third Year',id:3},
    {name:'Final Year',id:4},
]
const Paper = (obj,id) => {
  return(
      <div className={'bg-gradient btn w-100 border p-1 mt-2 text-primary text-center '} onClick={()=>window.open(obj.file)} key={id}>
          {obj.year}
      </div>
  )
}
const PaperSearchForm=()=>{
    const [is_Branch,set_is_Branch]=useState(false)
    const [year,setyear]=useState('None')
    const [subject,setSubject]=useState([])
    const [paper,setPaper]=useState([])
    const [branch,setBranch]=useState([])
    const handel_api_call = (end_point,data) => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: base_url+end_point,
            headers: {
                'Authorization': "Bearer "+localStorage.getItem("token"),
            },
            data : data
        };
        return axios.request(config)

    }
    const handelYear = (e) => {
        setPaper([])
        setSubject([])
        setyear(e.target.value)
      if (e.target.value==='1'){


          handel_api_call('subject/?year='+e.target.value+'&branch='+branch,{}).then((response) => {
              console.log(response.data.error)
              if(response.status===200){
                  set_is_Branch(false)
                  setSubject(response.data)

                  setyear(e.target.value)
                  setSubject(response.data)
              }
              else{

                  alert(response.data?.error)
              }
          })
              .catch((error) => {
                  console.log(error);
                  alert(error.response.data?.error)
              });
      }
      else {
          if(branch!=='None'){
              setPaper([])
              setSubject([])
              if (!(branch==='None')){
                  handel_api_call('subject/?year='+e.target.value+'&branch='+branch,{}).then((response) => {
                      console.log(response.data.error)
                      if(response.status===200){
                          setSubject(response.data)
                          console.log(subject)


                      }
                      else{
                          alert(response.data?.error)
                      }
                  })
                      .catch((error) => {
                          console.log(error);
                          alert(error.response.data?.error)
                      });
              }
          }

          set_is_Branch(true)
      }
    }
    const handelBranch = (obj) => {
        setPaper([])
        setSubject([])
        if (!(obj.target.value==='None')){
        handel_api_call('subject/?year='+year+'&branch='+obj.target.value,{}).then((response) => {
            console.log(response.data.error)
            if(response.status===200){
                setSubject(response.data)
                setBranch(obj.target.value)
                console.log(subject)


            }
            else{
                alert(response.data?.error)
            }
        })
            .catch((error) => {
                console.log(error);
                alert(error.response.data?.error)
            });
    }
    }
    const handelSubject = (obj) => {
        setPaper([])
        if (!(obj.target.value==='None')){
            handel_api_call('OldPaper/'+obj.target.value+'/',{}).then((response) => {
                console.log(response.data.error)
                if(response.status===200){
                    setPaper(response.data)


                }
                else{
                    alert(response.data?.error)
                }
            })
                .catch((error) => {
                    console.log(error);
                    alert(error.response.data?.error)
                });
        }
    }
    return(
        <div className={'container mt-4 justify-content-center d-flex'}>
            <div className={'card col-md-5'}>
                <div className={'card-header text-center fs-4 fw-bold'}>
                    Previous Year Question Paper
                </div>
                <div className={'card-body'}>
                    <div className={'mt-4'}>
                        <div className={'form-label'}>Year</div>
                        <select className={'p-2 form-control'} onChange={handelYear} value={year}>
                            <option value={'None'} >None</option>
                            {year_array.map((obj,i)=>{return(<option value={obj.id} key={i}>{obj.name}</option>)})}
                        </select>
                    </div>
                    {is_Branch?(<div className={'mt-4'}>
                        <div className={'form-label'}>Branch</div>

                        <select className={'p-2 form-control'} onChange={handelBranch}>
                            <option value={'None'} >None</option>
                            {Branch_year.map((obj,i)=>{return(<option value={obj} key={i}>{obj}</option>)})}
                        </select>
                    </div>):(<></>)}
                    {subject.length>0?(<div className={'mt-4'}>
                        <div className={'form-label'}>Subject</div>

                        <select className={'p-2 form-control'} onChange={handelSubject}>
                            <option value={'None'} >None</option>
                            {subject.map((obj,i)=>{return(<option value={obj.id} key={i}>{obj.subject_name}</option>)})}
                        </select>
                    </div>):(<></>)}
                </div>
                <div className={'mb-2 flex-column px-3 align-items-center justify-content-center '}>

                {paper.length>0?('Papers'):(<></>)}
                {paper.length>0?paper.map(Paper):(<></>)}
                </div>
            </div>
        </div>
    )
}


const OldPaper = ()=> {
    return(
        <>
            {/*<Topheader ></Topheader>*/}
            <Navbar obj={{auth: false}}></Navbar>
            <PaperSearchForm></PaperSearchForm>

        </>
    )
}
export default OldPaper;











