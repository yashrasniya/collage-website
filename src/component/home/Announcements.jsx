// import { useState } from 'react'
const Announcements_array=[
    '71th Independence Day Celebrations at IIT Madras - Live Webcast ',
    '72th Independence Day Celebrations at IIT Madras - Live Webcast ',
    '73th Independence Day Celebrations at IIT Madras - Live Webcast ',
    '74th Independence Day Celebrations at IIT Madras - Live Webcast ',
    '75th Independence Day Celebrations at IIT Madras - Live Webcast ',
    '76th Independence Day Celebrations at IIT Madras - Live Webcast ',
    '77th Independence Day Celebrations at IIT Madras - Live Webcast ',
    '78th Independence Day Celebrations at IIT Madras - Live Webcast ',
    '79th Independence Day Celebrations at IIT Madras - Live Webcast ',

]
const Announcements=(text)=>
{
    return(
        <a>{text}</a>
    )
}

const Announcement = ()=> {
    return(
        <div className={'Announcement'}>
            <div className={'Announcements-text'}>
                Announcements

            </div>
            <p>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 7L0.5 13.9282L0.5 0.0717969L14 7Z" fill="#0D1282"/>
                </svg>
            </p>
            <div className={'Announcements'}>
               <p> {Announcements_array.map(Announcements)} </p>
            </div>
        </div>
    )
}
export default Announcement;