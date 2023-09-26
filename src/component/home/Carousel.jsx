import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import slider_1 from '../../assets/slider-1.jpeg';
import slider_2 from '../../assets/slider-2.jpg';
import slider_3 from '../../assets/slider-3.jpg';
const img_srcs=[
    slider_1,
    slider_2,
    slider_3,
]
function IMG(src){
    return(
        <Carousel.Item interval={1000}>
            <Image
                src={src}
                width='100%'
                height='564vw'
                className={'Carousel-img '}

            />

        </Carousel.Item>
    )
}
function IndividualIntervalsExample() {
    return (
        <div className={'bg-body-tertiary'}>
        <Carousel
            interval={8000}
        >
            {img_srcs.map(IMG)}

        </Carousel>
        </div>
    );
}





export default IndividualIntervalsExample;