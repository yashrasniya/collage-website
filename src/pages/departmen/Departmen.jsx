import React from 'react'
import Topheader from '../../component/home/topheader'
import NavBra from '../../component/home/navbar'
import Announcement from '../../component/home/Announcements'
import "./style.css"
import Futtor from '../../component/home/futtor'

const items = [
    {
    img:"/courses.svg",
    nm:"Courses"
    },
    {
        img:"/2.svg",
        nm:"Labs"
    },
    {
        img:"/syllabous.svg",
        nm:"Syllabous"
    },
    {
        img:"",
        nm:"Faculty"
    }
]

const Departmen = () => {
    return (
        <>
            <Topheader />
            <NavBra />
            <Announcement />
            <div className='container-main'>
                <h1 style={{ color: "#7E1717", textAlign: "center" }}>Computer Science And Engineering</h1>
                <div className="container-top">
                    <div className="top-img-cont"></div>
                    <div className="top-desc-cont">
                        <p>
                        The core courses offered by the Department of Computer Engineering are B.Tech Degree in Computer Science and Engineering . These courses are aimed at providing theoretical and practical knowledge of Computer Science. The subjects in Bachelor’s level programme include Computer Architecture and Organisation,Automata Languages and Computation,Data Stuctures and Algorithms, Database Management Systems,Language Processor,Computer Networks,Advanced Architecture and Parallel Processing ,Software Engineering, Digital Signal Processing ,Analysis and Design of Algorithms etc.
                        </p>
                        <p>
                            The curriculum also includes management papers like Industrial Organization and Management. In order to bridge the gap between knowledge and its true application, students are required to undertake seminars, mini-project and main project that put them through an industry-like situation. The course produces an ideal computer engineer, well-equipped to meet the challenges of the rapidly growing IT industry.Computer Science has the power to change the world. This course offer a flexible and facinating programmes for the students who wish to acquire high skills in computers & applications, all supported by world class staff and facilities. The curriculum provides the students with a technical perspective on major issues of computer application, programming, languages and web enabled services.
                        </p>
                    </div>
                </div>

                <div className='d-flex flex-column flex-sm-row flex-wrap border margin2' style={{backgroundColor:"#D9D9D9"}}>
    <div className='col d-flex flex-column gap-3'>
    <div className='d-flex align-items-center gap-3 v-m'>
    <img src='/m.svg' style={{width:"60px"}}/>
    <h1>Our Mission</h1>
    </div>
        <p>To produce quality manpower equipped with such human and social values required integrate excellent technical skills, leadership, creativity and innovation for the benefit of mankind, for sustainable development of State of Uttarakhand and to promote research in the emerging discipline</p>
    </div>
    <div className='col d-flex flex-column gap-3'>
        <div className='d-flex align-items-center gap-3 v-m'>
    <img src='/v.svg' style={{width:"60px"}}/>
    <h1>Our Vision</h1>
        </div>
    <p>To develop into a systematic leader and pivot for excellence in technical education sector in the state, and catalyzing absorption, innovation, diffusion and transfer of high technology for improved productivity, quality of life and empowerment, thereby affecting regional growth in the State of Uttarakhand.</p>
    </div>
</div>

                <div className="container-mid">
                    <div className="mid-left">
                        <p>
                            To develop technically competent and well trained software engineers to attain National and International recognition.
                            To frame and disseminate high quality program with the continuous and co-ordinate efforts of faculty and student body at all academic levels and various sectors.
                        </p>
                        <p>
                            To produce ethically and socially responsible engineers who can involve themselves for community development to increase the productivity by providing suitable engineering solutions. To provide an academically conducive environment for individuals to develop as technologically superior, socially conscious and nationally responsible citizens
                        </p>
                    </div>
                    <div className="mid-right"></div>
                </div>
                <div className="container-bottom">
                    {
                        items.map((item,i)=>{
                            return (
                                <div className="item" key={i}>
                                <img src={item.img} className='item-img'></img>
                                <b>{item.nm}</b>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
            <Futtor />
        </>
    )
}

export default Departmen
