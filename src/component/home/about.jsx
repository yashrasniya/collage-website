import about_img from '../../assets/about.png'

const About=()=>{
    return(<div className={'mt-5 d-flex justify-content-center row '}>
            <img src={about_img} className={'col-sm-11 col-11 col-md-5 object-fit-cover'}/>
            <div className={'col-11  col-md-5 col-sm-11 mx-4'}>
            <h4 className={'text-primary2'}>Institute of Technology, Gopeshwar Founded in 2013</h4>
            <p style={{textAlign:'justify'}}>
                Institute of Technology Gopeshwar is one of the four constituent colleges of Uttarakhand Technical University that was established in October 2013 with the approval of Uttarakhand Government. IT Gopeshwar is approved by AICTE, Ministry of HRD, New Delhi. IT Gopeshwar, is an institute that aims at promoting technological advancement, creating and maintaining academic environments and processes for the students to reach their full potential, develop into qualified professionals, and evolve into accountable members of society. In order for its students to develop into academically adept, creative, and entrepreneurial professionals, the institute offers a supportive environment. Moreover, the institute offers educational training that encourages and places a focus on social consciousness among the students as well as the development of professional abilities.While the institute offers such solutions that assist humanity and the environment, the knowledge of the students is broadened, strengthened, and enriched here at IT Gopeshwar.
            </p></div>
    </div>
    )
}
export default About