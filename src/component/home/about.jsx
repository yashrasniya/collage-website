import about_img from '../../assets/about.png'
import Announcement from './Announcements'
import Futtor from './futtor'
import NavBra from './navbar'
import Topheader from './topheader'
import "../../index.css"
import Courses from './courses'

const College_img_part=()=>{
    return(
        <div className={'mt-5 d-flex justify-content-center row '}>
            <h1 className='text-center mb-5' style={{color:"#7E1717"}}>ABOUT ITG</h1>
            <img src={about_img} className={'col-sm-11 col-11 col-md-5 object-fit-cover'}/>
            <div className={'col-11  col-md-5 col-sm-11 mx-4'}>
                <h4 className={'text-primary2'}>Institute of Technology, Gopeshwar Founded in 2013</h4>
                <p style={{textAlign:'justify'}}>
                    Institute of Technology Gopeshwar is one of the four constituent colleges of Uttarakhand Technical University that was established in October 2013 with the approval of Uttarakhand Government. IT Gopeshwar is approved by AICTE, Ministry of HRD, New Delhi. IT Gopeshwar, is an institute that aims at promoting technological advancement, creating and maintaining academic environments and processes for the students to reach their full potential, develop into qualified professionals, and evolve into accountable members of society. In order for its students to develop into academically adept, creative, and entrepreneurial professionals, the institute offers a supportive environment. Moreover, the institute offers educational training that encourages and places a focus on social consciousness among the students as well as the development of professional abilities.While the institute offers such solutions that assist humanity and the environment, the knowledge of the students is broadened, strengthened, and enriched here at IT Gopeshwar.
                </p></div>
        </div>
    )
}

const OurVesionAndMission = () => {
  return(
      <div className='d-flex flex-column flex-sm-row flex-wrap border margin' style={{backgroundColor:"#D9D9D9"}}>
          <div className='col d-flex flex-column gap-3'>
              <div className='d-flex align-items-center gap-3'>
                  <img src='/m.svg' style={{width:"60px"}}/>
                  <h1>Our Mission</h1>
              </div>
              <p>To produce quality manpower equipped with such human and social values required integrate excellent technical skills, leadership, creativity and innovation for the benefit of mankind, for sustainable development of State of Uttarakhand and to promote research in the emerging discipline</p>
          </div>
          <div className='col d-flex flex-column gap-3'>
              <div className='d-flex align-items-center gap-3'>
                  <img src='/v.svg' style={{width:"60px"}}/>
                  <h1>Our Vision</h1>
              </div>
              <p>To develop into a systematic leader and pivot for excellence in technical education sector in the state, and catalyzing absorption, innovation, diffusion and transfer of high technology for improved productivity, quality of life and empowerment, thereby affecting regional growth in the State of Uttarakhand.</p>
          </div>
      </div>
  )
}
const About=()=>{
    return(
        <>
            {window.location.href.split('//')[1].split('/')[1]==='home'?
                ( <College_img_part/>)
                :
                (<>
                    <Topheader />
                    <NavBra />
                    <Announcement />
                    <College_img_part/>
                    <OurVesionAndMission/>
                    <Courses />
                    <Futtor />
                </>)
            }




        </>
    )
}
export default About