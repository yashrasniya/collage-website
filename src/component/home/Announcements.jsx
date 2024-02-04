// import { useState } from 'react'
const Announcements_array=[
    '|| 23/09/2023 – Walk in Interview Guest Faculty Positions ',
    '||   20/02/2023 - Walk-in-Interview for Various Faculty Positions',
    '20/02/2022 10 Days Short Term Course on Coding & Artificial Intelligence  ',

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