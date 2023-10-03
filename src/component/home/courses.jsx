import civil from '../../assets/civil.jpeg'
import cse from '../../assets/cse.jpeg'
import me from '../../assets/me.jpeg'
import ece from '../../assets/ece.jpeg'
import EE from '../../assets/EE.jpeg'
import ap from '../../assets/ap.jpeg'
const Courses_array=[
    {image:civil,title:'CIVIL ENGINEERING',dis:'Civil Engineering is a Professional Engineering discipline and it is the Mother branch of Engineering that deals with the design, construction and maintenance of the physical and naturally built environment, including works such as bridges, roads, canals, dams and buildings. It is traditionally broken into several  Read More'},
    {image:cse,title: 'COMPUTER SCIENCE & ENGINEERING',dis:'Civil Engineering is a Professional Engineering discipline and it is the Mother branch of Engineering that deals with the design, construction and maintenance of the physical and naturally built environment, including works such as bridges, roads, canals, dams and buildings. It is traditionally broken into several  Read More'},
    {image:EE,title:'ELECTRICAL ENGINEERING',dis:'Civil Engineering is a Professional Engineering discipline and it is the Mother branch of Engineering that deals with the design, construction and maintenance of the physical and naturally built environment, including works such as bridges, roads, canals, dams and buildings. It is traditionally broken into several  Read More'},
    {image:me,title:'MECHANICAL ENGINEERING',dis:'Civil Engineering is a Professional Engineering discipline and it is the Mother branch of Engineering that deals with the design, construction and maintenance of the physical and naturally built environment, including works such as bridges, roads, canals, dams and buildings. It is traditionally broken into several  Read More'},
    {image:ece,title:'ELECTRONICS & COMMUNICATION ENGINEERING',dis:'Civil Engineering is a Professional Engineering discipline and it is the Mother branch of Engineering that deals with the design, construction and maintenance of the physical and naturally built environment, including works such as bridges, roads, canals, dams and buildings. It is traditionally broken into several  Read More'},
    {image:ap,title:'ADMISSION-2023',dis:'Civil Engineering is a Professional Engineering discipline and it is the Mother branch of Engineering that deals with the design, construction and maintenance of the physical and naturally built environment, including works such as bridges, roads, canals, dams and buildings. It is traditionally broken into several  Read More'},

]

const Course = (obj) => {
    return(
        <div className={'col-11 col-md-3  col-sm-11 mx-0 mx-md-5 my-3 d-flex justify-content-center'}>
        <div className={'flip-card-container '}>

    <div className={' flip-card'}>
            <div className={'card-front'}>
            <figure>
                <div className={'img-bg'}>
        <img className={'w-100 h-100  '} src={obj.image}/>
                    <figcaption> {obj.title}</figcaption>

            </div>
            </figure>
            </div>
            <div className="card-back">
                <figure>
                    <div className="img-bg"></div>
                    <img src={obj.image}  className={'w-100 h-100'} alt=""/>
                    <figcaption className={'card-back-text'}>
                       <h4> {obj.title}</h4>
                        <p>{obj.dis}</p>

                    </figcaption>
                </figure></div>
        </div></div></div>
    )

}
const Courses=()=>{
    return(<div className={'mt-5 row d-flex justify-content-evenly text-center Courses_container'} >
            <h4 className={'text-primary2'}> Courses OFFERED</h4>
            {Courses_array.map(Course)}
        </div>
    )
}
export default Courses