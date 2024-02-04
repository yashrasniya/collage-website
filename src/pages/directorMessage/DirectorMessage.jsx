import React from 'react'
import Topheader from '../../component/home/topheader'
import Navbar from '../../component/home/navbar'
import Announcement from '../../component/home/Announcements'
import "./style.css"
import Futtor from '../../component/home/futtor'

const DirectorMessage = () => {
    return (
        <>
            <Topheader></Topheader>
            <Navbar></Navbar>
            <Announcement></Announcement>
            <div className='d-msg'>
                <span className='d-msg-span'>Director’s Message</span>
                <div className='speech1'>
                    <div className="img-cont">
                        <img src='/director.svg' alt='' />
                    </div>
                    <div className="speech-cont">
                        <span className='speech-title'>My dear students,</span>
                        <p>
                            take this opportunity to introduce Institute of Technology, Gopeshwar (ITG) to the student’s community. It is time to realize that the finest society can be developed by using creative minds in the advanced areas of Science and Engineering. In that spirit, we have come up with thisengineering institute where girls and boys are being groomed to reach the pinnacle of success. We are proud of your association with the institute which will help in spreading the technical education in this region. ITG is focused to create an environment of the total development of students at different levels viz. intellectual, emotional & social.
                            My hearty welcome to you to join Institute of Technology (IT) Gopeshwar, a splendid Temple of Learning which is a VMSB Uttarakhand Technical University (UTU) campus Institute. Choosing an Institution has been one of the most important decisions of your life. You are entering into the arena of higher education where the future is full of opportunities. I would like to congratulate you on choosing IT, Gopeshwar as an Institution in developing yourcareer and realising dreams. ITG offers B. Tech programme in five disciplines viz.
                        </p>
                    </div>
                </div>
                <div className="speech-2">
                    <p>
                        CSE, ECE, ME, CE, and EE. We at ITG strive to provide congenial academic environment by combining education with overall personality development. We have planned to introduce a number of add-on courses to develop an engineer in totality with his/her mind and body as perfect tools for specific career absorptions. Academic excellence is our priority.
                    </p>
                    <p>
                        We are determined to have a close tie up and linkages with major Industrial Houses. We involve our students right from the beginning, on short and long term basis, for exhaustive training and industrial project work. It facilitates hands-on experience in real technologicalaspects and skill development. I would like to sign-off my message with the words of Mr. Winston Churchill,
                    </p>
                </div>
                <div className='quote'>
                “Success is not final; failure is not fatal;  it is the courage to continue that counts”<br></br>
                    With best wishes,
                </div>
                <div className='wishes'>
                Dr. Amit Agarwal
                </div>
            </div>
            <Futtor />
        </>
    )
}

export default DirectorMessage
