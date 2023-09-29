import itg_img from "../../assets/institute-of-technology-gopeshwar-chamoli-logo.png";
import one from "../../assets/2.jpeg";
import {useNavigate} from "react-router-dom";


const url='https://itgopeshwar.ac.in/wp-content/uploads/2022/11/13.jpeg'
const Navbar = ({obj}) => {
    let navigate = useNavigate();
    obj=false
    if (localStorage.getItem('login')){
        obj=true
    }
    console.log(obj.auth)
    return(<div className={'NavBra'}>
        <div className={'nav-logo '}>
            <img className={'nav-logo-img'} src={itg_img}/>
            <div className={'nav-logo-text'}>
                <p className={'hind'}>प्रौद्योगिकी संस्थान, गोपेश्वर</p>
                <p className={'english lf'}>Institute of Technology, Gopeshwar</p>
                <p className={'english sf'}>VEER MADHO SINGH BHANDARI UTTARAKHAND TECHNICAL UNIVERSITY CAMPUS INSTITUTE</p>
                <p className={'english  mf'}>Approved By AICTE, NEW DELHI</p>

            </div>
        </div>

        {/*<div className={'d-flex  col-4  col-md-6 col-sm-6 justify-content-end'}>*/}
        {/*    <div className={'overflow-hidden flex-column justify-content-center me-2 me-md-4 col-3 col-md-2'   } >*/}
        {/*        <img src={profile}  className={"object-fit-cover rounded-circle col-12 col-md-8 col-sm-8 mt-2  mt-md-4 "}*/}
        {/*             // style={{height:'6vw',width:"6vw",marginTop:"1.5vw"}}*/}
        {/*        />*/}
        {/*    </div>*/}
        {/*</div>*/}
        {obj?(<><p className={'hamburger'} onClick={()=>{
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
                <div  onClick={()=>{localStorage.removeItem('token');
                    localStorage.removeItem("login");

                    navigate('/login')}} className={'button login-button'}>Logout</div>
            </div></>):(<div></div>)}

    </div>)
}

export default Navbar