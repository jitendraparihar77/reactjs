import { useState } from "react";
import "./App.css"

function App() {
  const [count, setCount] = useState(0);
  const handleClickInc = (e) => {
    setCount(count + 1);
  };

  const handleClickDec = (e) => {
    setCount(count - 1);
  };

  // form

  const [formData,setFormData]=useState({name:"",email:"",password:""});

  const handleSubmit=(e)=>{
    e.preventDefault();
   
  }

  const handleInput=(e)=>{
    const {name,value}=e.target;

    setFormData({
      ...formData,[name]:value
    })
  }
  return (
    <div className="App">
    <div className="counter">
    <header>COUNTER</header>
      <h1>{count}</h1>
      <button onClick={handleClickInc}>+</button>
      <button onClick={handleClickDec}>-</button>
      </div>

      <div className="form">  
        <h1>FORM</h1>
        <form onSubmit={handleSubmit}>
         <label>Name : <input type="name" name="name" value={formData.name} placeholder="name"  onChange={handleInput}/></label> <br/>

         <label> Email : <input type="email" name="email" value={formData.email} placeholder="email" onChange={handleInput}/></label> <br/>

         <label> Password : <input type="password" name="password" value={formData.password} placeholder="password" onChange={handleInput}/></label> <br/>

         <button type="submit">submit</button>

         
         
        </form>
      </div>
    </div>
  );
}

export default App;
