import axios from "axios";
import { useState } from "react";


const Create = () => {

  const [name, setName] = useState()
  const [age, setAge] = useState()

  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://127.0.0.1:8000/api/teams/create/', {name, age})
    window.location.reload()
  }
  return ( 
    <main>
      <h3>Add new data</h3>
      <form onSubmit={ handleSubmit} >
        <input
         type="text"
         value={name}
         onChange={ (e)=> setName(e.target.value)}
         placeholder="Enter name"
          name="name" 
          id="" />
        <input
         type="text"
         value={age}
         onChange={(e)=> setAge(e.target.value)}
         placeholder="Enter age"
          name="age" 
          id="" />
        <input type="submit" value="Add new" />
      </form>
    </main>
   );
}
 
export default Create;