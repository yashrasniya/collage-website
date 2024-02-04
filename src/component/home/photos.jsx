// import { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import photo_1 from '../../assets/1.jpeg'
import photo_2 from '../../assets/2.jpeg'
import photo_3 from '../../assets/3.png'
import photo_4 from '../../assets/4.jpeg'
import photo_5 from '/director.svg'
const photos_array=[
    {src:photo_1,text_1:"Lt. Gen. Gurmit Singh",text_2:"Governor,Uttarakhand"},
    {src:photo_2,text_1:"Shri Pushkar Singh Dhami",text_2:"Chief Minister Uttarakhand"},
    {src:photo_3,text_1:"Shri Subodh Uniyal",text_2:"Minister Technical Education, ,Uttarakhand"},
    {src:photo_4,text_1:"Dr. Onkar Singh",text_2:"Vice Chancellor,UTU"},
    {src:photo_5,text_1:"Dr. Amit Agarwal",text_2:"Director IT Gopeshwar"}
]
const Photo = (obj) => {
    return (
        <Col xs={6} md={2} className={'mx-0 flex-column text-center  justify-content-center '}>
        <Image src={obj.src} roundedCircle width={133} height={133} className={'object-fit-cover'}/>
        <p className={'photo-text '}>{obj.text_1}</p>
        <p className={'photo-text '}>{obj.text_2}</p>
    </Col>
    )
}
const Photos = ()=> {
    return(
        <Container >
            <Row className={'mt-3 d-flex justify-content-evenly'}>
                {photos_array.map(Photo)}
            </Row>
        </Container>
    )
}
export default Photos;