import { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import news from '../../assets/news.png'

const news_data=[
    {img:news,title:'Coding/Artificial Intelligence',dis:'Notice regarding 10 days Short term course on \n' +
            '“Coding/Artificial Intelligence”'},{img:news,title:'Coding/Artificial Intelligence',dis:'Notice regarding 10 days Short term course on \n' +
            '“Coding/Artificial Intelligence”'},{img:news,title:'Coding/Artificial Intelligence',dis:'Notice regarding 10 days Short term course on \n' +
            '“Coding/Artificial Intelligence”'},{img:news,title:'Coding/Artificial Intelligence',dis:'Notice regarding 10 days Short term course on \n' +
            '“Coding/Artificial Intelligence”'},
]
const event_data=[
    {text:'Coding/Artificial Intelligence'},
    {text:'Coding/Artificial Intelligence'},
    {text:'Coding/Artificial Intelligence'},
]


const News = (obj) => {
    return (
        <div className={'col-6 flex-row mt-4'}>
            <div className={'row'}>
                <div className={'col-7 col-md-3 col-sm-5 '}>
                    <img src={obj.img}/>
                </div>
                <div className={'col ms-md-4 '}>
                    <div className={'row text-start'}>
                        <h6 className={'fw-bold'}>{obj.title}</h6>
                        <p>{obj.dis}</p>
                    </div>
                </div>
            </div>

        </div>


    )
}
const Event = (obj) => {
  return(<Row className={'justify-content-center m-0'}>
      <Col  className={'d-flex  p-0 pt-4 justify-content-center align-items-center'}>
        {/*<p>*/}
            <svg width="3rem"  viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_20_106)">
                    <path d="M38 25.0087C37.3113 24.32 36.1712 24.32 35.4825 25.0087L25.1513 35.34L21.375 31.5637C20.6862 30.875 19.5463 30.875 18.8575 31.5637C18.1687 32.2525 18.1687 33.3925 18.8575 34.0813L23.465 38.6888C24.3913 39.615 25.8875 39.615 26.8137 38.6888L37.9762 27.5263C38.6887 26.8375 38.6887 25.6975 38 25.0087ZM45.125 7.125H42.75V4.75C42.75 3.44375 41.6813 2.375 40.375 2.375C39.0688 2.375 38 3.44375 38 4.75V7.125H19V4.75C19 3.44375 17.9312 2.375 16.625 2.375C15.3188 2.375 14.25 3.44375 14.25 4.75V7.125H11.875C9.23875 7.125 7.14875 9.2625 7.14875 11.875L7.125 45.125C7.125 47.7375 9.23875 49.875 11.875 49.875H45.125C47.7375 49.875 49.875 47.7375 49.875 45.125V11.875C49.875 9.2625 47.7375 7.125 45.125 7.125ZM42.75 45.125H14.25C12.9437 45.125 11.875 44.0563 11.875 42.75V19H45.125V42.75C45.125 44.0563 44.0563 45.125 42.75 45.125Z" fill="white"/>
                </g>

            </svg>

        {/*</p>*/}
          <h6 className={'fw-bold text-light'}>{obj.text}</h6>

      </Col></Row>
  )
}
const News_event = ()=> {
    return(
        <div className={'mt-5'}  >

            <Row className={'text-center'} >
                <Col md={9} className={'p-0'}>
                <h4 className={'text-center text-primary2'}>ITG - NEWS</h4>
                <div className={'news'}>
                    <Row className={'p-4 ms-3'}>
                        {news_data.map(News)}
                        <div className={'col-12 text-end pe-5 text-primary2'}>Show all of ITG NEWS</div>
                    </Row>
                </div>
                </Col>
                <Col md={3} className={'px-0'}>
                <h4 className={'text-center text-primary2'}>EVENTS</h4>
                <div className={'event'}  >
                <div className={'event-back-color pt-4 flex-column '}>
                        {event_data.map(Event)}

                        <div className={'col-12 text-light text-end pe-5'}>Show all of ITG NEWS</div>
                </div>
                </div>

                </Col>

            </Row>

        </div>
    )
}
export default News_event;