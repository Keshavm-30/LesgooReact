
// import './App.css'
import './Card.css'
import Demo  from './Demo';
import Details from './Details'

//This is an App component 
function App(){

  const details =[
    {id:1,Name:"Ajay",Title:"Solidity"},
    {id:2,Name:"Vijay",Title:"Rust"},
    {id:3,Name:"Suchi",Title:"Golang"},
    {id:4,Name:"Vineet",Title:"Python"},
  ]

  const DetailsGenerator=()=>{
    details.push({id:5, Name:"Raghav",Title :"NodeJs Developer"})
    console.log(details);
  }

//The things you want to display on your web page you can write it inside the return 
  return (
  <>
  <div className='card-container'>
     {details.map((details)=>{
     return(
     <Details key={details.id} Name={details.Name} Title={details.Title}/>

     )

     })}
  </div>
  <button onClick={DetailsGenerator }>CreateOne</button>
  </>
  )
}

export default App
