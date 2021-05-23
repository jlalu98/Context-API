import React, {FunctionComponent, useContext, useState } from "react";
import {useHistory} from "react-router-dom";
import bcrypt from "bcryptjs";
import { BookContext } from "../context/BookContext";

// interface RegisterProps{
//     handleRegister:Function
// }

const Register=(props:any)=>{
 const [name,setName] = useState("")
 const [email,setEmail]=useState("")
 const [password,setPassword]=useState("");
 const {dispatch} = useContext(BookContext)
  const history=useHistory();

  function handleNameChange(event: any) {
    setName(event.target.value);
  }
  function handleEmailChange(event: any) {
    setEmail(event.target.value);
  }
  function handlePasswordChange(event: any) {
    // let password=event.target.value;
    // bcrypt.genSalt(10,(err,salt)=>{
    //     bcrypt.hash(password,salt,(err,hash)=>{
    //         if(err) throw err;
    //         password=hash;
            setPassword(event.target.value);
               
    //     })
    // })
}
  return (
    <div className="book-form">
      <form className="form-area">
        <h2>REGISTER USER</h2> <hr />
        <br />
        <div>
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            name="title"
            placeholder="Full Name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="email">Email : </label>
          <input
            type="text"
            name="author"
            placeholder="johndoe@gmail.com"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            name="price"
            placeholder=""
            onChange={handlePasswordChange}
            required
          />
        </div>
        <br />

        <div>
            <button type="button" id="add-button" 
            onClick={()=>{dispatch({type:"REGISTER_USER",users:{name:name,email:email,password:password}});history.push("/home")}}>REGISTER</button>
        </div>
        <br />
      </form>
    </div>
  );
}
export default Register;

