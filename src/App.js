import TaskItem from './components/TaskItem';
import './App.css';

function App() {

  // const obj={
  //   date: new Date(2008,5,11),
  //   title : "React",
  //   priority :18888,
  // };
  const items = [

    {
      id: "i1",
      title: "World Trade Center",
      priority: 9,
      date: new Date(2001,10, 9),
    },
  
    
    {
      id: "i2",
      title: "Twin Tower",
      priority: 4,
      date: new Date(2001,10, 9),
      
    },
  
    {
      id: "i3",
      title: "Pentagon",
      priority: 2,
      date: new Date(2001,10, 9),
      
    },
  
    {
      id: "i4",
      title: "White house",
      priority: 1,
      date: new Date(2001,10, 9),
      
    },
  
   ]
  return (
    <div>

      <h1>Hello Osama here </h1>
      <TaskItem 
      date = {items[0].date}
      title = {items[0].title}
      priority ={items[0].priority}
      ></TaskItem>
        <TaskItem 
      date = {items[1].date}
      title = {items[1].title}
      priority ={items[1].priority}
      ></TaskItem>
        <TaskItem 
      date = {items[2].date}
      title = {items[2].title}
      priority ={items[2].priority}
      ></TaskItem>
        <TaskItem 
      date = {items[3].date}
      title = {items[3].title}
      priority ={items[3].priority}
      ></TaskItem>
    </div>
  );
}

export default App;
