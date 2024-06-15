const userData=[{
    name:"Meenakshi sundaram",
    city:"Madurai",
    description:"Software Developer",
    skills:["HTML","CSS","Javascript","React","Java"],
    online:true,
    profile:"images/Sundar.jpg"
},

{
    name:"Mahendra Sing Dhoni",
    city:"Ranchi",
    description:"Cricketer",
    skills:["Captain","Batsman","Wicket Keeper","Finisher"],
    online:true,
    profile:"images/Dhoni.jpg"
},
{
    name:"Vijay",
    city:"Chennai",
    description:"Actor",
    skills:["Actor","Dancer","Singer","Producer"],
    online:true,
    profile:"images/Vijay.jpg"
}
]
function User(props){

    return(
        <div className="card-container">
        <span className={props.online?"pro online" : "pro offline"}>{props.online ?"ONLINE" : "OFFLINE"}</span>
        <img src={props.profile} alt="user" className="img"/>
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.description}</p>
        <div className="buttons">
            <button className="primary">Message</button>
            <button className="primary outline">Following</button>
        </div>
        <div className="skills" >
            <h6>Skills</h6>
            <ul>
             {props.skills.map((skill,index)=>{
                return <li key={index}>{skill}</li>

             })}
            </ul>
        </div>


    </div>
    )

}
export const UserCard = () => {
  return (
   <>
   {userData.map((user,index)=>(
    <User key={index} name={user.name} city={user.city} description={user.description} online={user.online}  profile={user.profile} skills={user.skills}/>
   ))}
   </>
  )
}

{/* <User name="Meenakshi Sundaram" city="Madurai" description="Software Developer" skills={["HTML","CSS","Javascript","React","Java","SQL"] } online={false}/> */}