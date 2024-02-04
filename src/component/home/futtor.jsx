const block_array= [
    {title:'COURSES',items:[
            'Civil Engineering',
            'Mechanical Engineering',
            'Computer Science Engineering',
            'Electrical Engineering',
            'Electronics & Communications Engineering',
            'Applied Science'
        ]},
    {title:'ABOUT US',items:[
           ' About College',
            'About UTU',
            'Vice Chancellor’s Message',
            'Director’s Message',
            'AICTE Feedback',
            'National Academics Depository (NAD)'
        ]},{title:'ACADEMIC',items:[
           ' Apply Online',
            'Infrastucture',
           ' Affiliation',
            'Course',
           ' Fee Structure',
           ' MANDATORY DISCLOSURES'
        ]},{title:'CONTACT US',items:[
           'Institute of Technology, Gopeshwar, Chamoli Uttarakhand-246424 9720651770 (HoD,ME 8755329574), (HoD,ECE 9927216113), (HoD,CSE 8979571419), (HoD,CE 8193069402),(HoD,EE 7417493728) itgopeshwar@gmail.com'
        ]},
]
const block = (obj) => {
  return(
      <div className={'col text-white'}>
          <h4>{obj.title}</h4>
          {obj.items.map((obj_1)=>
          {return(
              <p className={'my-0 text-white'}>{obj_1}</p>)
          })}
      </div>
  )
}
const Futtor=()=>{
    return(<div className={'mt-5 p-5 d-flex justify-content-center bg-blue futtor'}>
<div className={'row'}>
    {block_array.map(block)}
</div>
        </div>
    )
}
export default Futtor