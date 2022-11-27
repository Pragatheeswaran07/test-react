
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React,{useState} from 'react'
function App() {
  const [data,setData]=useState("chanage")
  const change1=()=>{
    setData("data1")
  }
  const change2=()=>{
    setData("data2")

  }
  const change3=()=>{
    setData("data3")
  }
  const [value,SetValue]=useState(["name","age","subject","email","phone"])
  const submits=()=>{
    SetValue(["vijay","21","maths","vijaysarathy12","9234982422"])
    
  }
  return (
    <div className="App">
      <div className="container bg-secondary">
      <h1>To do list</h1>
      <form className="form-group form-control">
        <input type="text" className="form-control"></input>
        <br/><br></br>
        <button className="btn btn-lg p-3 btn-primary" onClick={submits}>Clicked</button>
         <div className="container bg-Success">
          <h2>{value.map((val)=>{
            return <h1>{val}</h1>

          })}</h2>
         </div>
      </form>

      </div>
      <butoon onClick={change1} className="btn btn-lg btn-outline-secondary m-4 ">Event1</butoon>
      <butoon onClick={change2} className="btn btn-lg btn-outline-danger m-4">Event2</butoon>
      <butoon onClick={change3} className="btn btn-lg btn-outline-success m-4">Event3</butoon>
      <div className="container">
          <label className="h2">{data}</label>
         </div>
    </div>
  );
}

export default App;
