import Carousel from "react-bootstrap/Carousel";
import c1 from '../../assets/c1.jpg';
import c2 from '../../assets/c2.jpg';
import c3 from '../../assets/c3.jpg';
import c4 from '../../assets/c4.jpg';
import c5 from '../../assets/c5.jpg';
import c6 from '../../assets/c6.jpg';
import Image from "react-bootstrap/Image";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const img_srcs=[

       c1,
        c2,
        c3,
    c4,
            c6,
            c5

]
const Img = (obj) => {

    return(<div className={'d-flex justify-content-center mx-4 py-4 '}>


    <div  className={'item'}>
        <Image
            src={obj}
            // width={'600px'}
            height={'300px'}
            className={'rounded object-fit-cover  '}

        />
    </div>
    </div>

    )

}

const Activity=()=>{
    return(<div className={'mt-5'}>
        <h4 className={'text-center text-primary2 '}>Recent Activity</h4>
    <OwlCarousel autoWidth={false} className='owl-theme Activity' loop autoplay={true}  items={3}  responsive={
        { 0:{
        items:1
    },
        600:{
        items:2
    },
        1000:{
        items:3
    }}
    }dots>
        {img_srcs.map(Img)}
    </OwlCarousel></div>
)
}
export default Activity