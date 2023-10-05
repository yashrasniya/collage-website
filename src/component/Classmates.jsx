import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './auth/Navbar.jsx';
import { useNavigate} from "react-router-dom";


const base_url='https://api.itgopeshwar.in/api/'
const Students = () => {
    let navigate = useNavigate();

    const [user,setUser]=useState([])
    const [isData,setisData]=useState(false)

    useEffect(() => {
        // fetch data
        if(!isData){
            if(localStorage.getItem("token"))
            {   fetch(base_url+'MyClassmates/',{method:'GET', headers: {
                    "Content-Type": "application/json",
                    "Authorization":"Bearer "+localStorage.getItem("token")

                }}).then(response =>
                response.json()
                    .then(result=>{
                        if(response.status===200){
                            setUser(result)
                            console.log(result)
                            setisData(true)



                        }else {
                            navigate('/login')
                        }

                    }))}
        }

    })
    const Student = (obj,i) => {
      return(< >
          <tr key={i}  >
              <td className={'row font-weight-bold'}>
                  {i+1}
              </td>
              <td className={'fs-6'}>
                  {obj.roll_number}
              </td>
            <td>
                {obj.name}
            </td>

            <td>
                {obj.gender}
            </td>
            <td>
                {obj.Father_name}
            </td>
              <td>
                  {obj?.Mother_name}
              </td>

        </tr>
          </>
      )
    }

    return(<div className={'container mt-3 fs-6 overflow-x-scroll '}>
            <table className={'table-sm table-responsive table'}>
                <thead className="thead-dark">
                <tr >
                    <td className={'col font-weight-bold'}>
                        So.No.
                    </td>
                    <td className={'col font-weight-bold'}>
                        Roll Number
                    </td>
                    <td className={'col font-weight-bold'}>
                        Name
                    </td>
                    <td className={'col font-weight-bold'}>
                        Gender
                    </td>
                    <td className={'col font-weight-bold'}>
                        Father Name
                    </td>
                    <td className={'col font-weight-bold'}>
                        Mother Name
                    </td>

                </tr></thead>
                <tbody>
                {
                user.map(Student)
                }
                </tbody>
            </table>
        </div>
    )
}




const Classmates = ()=> {
    return(
        <>
            {/*<Topheader ></Topheader>*/}
            <Navbar obj={{auth: false}}></Navbar>
            <Students></Students>

        </>
    )
}
export default Classmates;