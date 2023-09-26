// import { useState } from 'react'
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import TopHeader from './topheader.jsx';
import Navbar from './navbar.jsx';
import Carousel from './Carousel.jsx';
import Announcements from './Announcements.jsx';
import Photos from './photos.jsx';
import News_event from './News_event.jsx';
import Activity from './Activity.jsx';
import About from "./about.jsx";
import Courses from "./courses.jsx";
import Futtor from "./futtor.jsx";


const Home = ()=> {
    return(
        <>
            <TopHeader></TopHeader>
            <Navbar></Navbar>
            <Announcements></Announcements>
            <Carousel></Carousel>
            <Photos></Photos>
            <News_event></News_event>
            <Activity></Activity>
            <About></About>
            <Courses></Courses>
            <Futtor></Futtor>
        </>
    )
}
export default Home;