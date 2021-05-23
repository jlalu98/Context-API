import React, {FunctionComponent, useContext, useState } from "react";
import {useHistory,Link,HashRouter,Route} from "react-router-dom";
import { BookContext } from "../context/BookContext";
// import BookList from "./booklist"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
interface LoginProps{
    handleSubmit:Function,
    message:String
}
const Login=(props:any)=> {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [token,setToken]=useState("")
  const {state,dispatch} =useContext(BookContext);
 // const [msg,setMssg]=useState(message);
  const history=useHistory();
  // function handleIdChange(event: any) {
  //   setId(event.target.value);
  // }

  function handleUsername(event: any) {
    setEmail(event.target.value);
  }
  function handlePassword(event: any) {
    setPassword(event.target.value);
  }
    // let existingUser:any;
    // state.users.map((user:any)=>{
    //     if(user.email===email){
    //         existingUser=user;
    //     }
    // })
    // if(!existingUser){
    //     alert('User Does not exist.Register!!')
    //     history.push("/register_user")
    // }
    // bcrypt.compare(password,existingUser.password,(err,res)=>{
    //     if(err) return console.log("Bcrypt Error",err);
    //     if(!res){
    //         alert("invalid Credentials");
    //         history.push("/home");
    //     }
    //     jwt.sign(
    //         {email:email},'jwtSecret',//jwtsecret
    //         {expiresIn:"3600s"},//this is optional and expires in 3600 s
    //         (err:any,token:any)=>{
    //             if(err) throw err;
    //             setToken(token)
    //         }
    //     )
        
    // })
    const login = () => {
        const token = jwt.sign(
          { email: email},
          "jwtSecret",
          { expiresIn: "1d" }
        );
        localStorage.setItem("login", token);
        dispatch({
          type: "LOGIN",
          user: {
            email: email,
            password: password,
          },
          isLoggedIn: true,
          token: localStorage.getItem("login"),
        });
        history.push("/home");
      };
 



  return (
    <div className="book-form">
      <form className="form-area">
        <h2>USER LOGIN</h2> <hr />
        <br />
        <div>
          <label htmlFor="username"> USERNAME: </label>
          <input
            type="text"
            name="username"
            placeholder="johndoe@email.com"
            onChange={handleUsername}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="password">PASSWORD : </label>
          <input
            type="password"
            name="password"
            placeholder=""
            onChange={handlePassword}
            required
          />
        </div>
        <br />
            <button type="button" id="add-button" onClick={() => login()}>LOGIN</button>

            {/* {msg==="Invalid"?(<h3>Invalid credentials or user does'nt exist!!</h3>):null} */}
        <br />
      </form>
    </div>
  );
}
export default Login;

