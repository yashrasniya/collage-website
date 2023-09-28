import itg_img from "../../assets/institute-of-technology-gopeshwar-chamoli-logo.png";
import one from "../../assets/2.jpeg";

const url='https://itgopeshwar.ac.in/wp-content/uploads/2022/11/13.jpeg'
const Navbar = ({obj}) => {
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

        <div className={'d-flex  col-4  col-md-6 col-sm-6 justify-content-end'}>
            <div className={'overflow-hidden flex-column justify-content-center me-2 me-md-4 col-3 col-md-2'   } >
                <img src={one}  className={"object-fit-cover rounded-circle col-12 col-md-8 col-sm-8 mt-2  mt-md-4 "}
                     // style={{height:'6vw',width:"6vw",marginTop:"1.5vw"}}
                />
            </div>
        </div>
    </div>)
}

export default Navbar