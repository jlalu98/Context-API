import { BookContext } from "./BookContext";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
export const Reducer = (state: any, action: any): any => {
    switch (action.type) {
        case "ADD_BOOK":
            return {
                ...state, books: [...state.books, {
                    id: action.book.id,
                    title: action.book.title,
                    author: action.book.author,
                    price: action.book.price,
                    rating: action.book.rating,
                    description: action.book.description,
                    cover: action.book.cover
                }]
            }
        case "BOOK_BY_ID":
            return {
                ...state,
                selectedBook: action.selectedBook,
            };

        case "DELETE_BOOK":
            return { ...state, books: [...state.books.filter((book: any) => book.id !== action.id)] }

        // case 'REGISTER_USER':
        //     let existingUser;
        //     let newUser
        //     state.users.map((user:any)=>{
        //         if(user.email===action.user.email){
        //             existingUser=user;
        //         }
        //     })
        //     if(existingUser){
        //        alert('User Already Exists');
        //        console.log("In existing user");

        //        return {...state}

        //     }else{
        //        console.log("In new user");

        //      return {...state,users:[...state.users,{name:action.user.name,email:action.user.email,password:action.user.password}]}

        //     }

        case "REGISTER_USER":
            let existingUser;
            console.log(action.users.password);
            // eslint-disable-next-line
            state.users.map((user: any) => {
                if (user.email === action.users.email) {
                    existingUser = user;
                }
            });
            if (existingUser) {
                alert("User already exists");
                return { ...state };
            } else {
                console.log("new user");
                console.log(action.users.email);

                return {
                    ...state,
                    users: [
                        ...state.users,
                        {
                            name: action.users.name,
                            email: action.users.email,
                            password: action.users.password,
                        },
                    ],
                };
            }


        case "LOGIN":
            let isLoggedIn;
            // eslint-disable-next-line
            state.users.map((user: any) => {
                if (
                    user.email === action.user.email &&
                    user.password === action.user.password
                ) {
                    isLoggedIn = true;
                }
            });
            if (isLoggedIn) {
                return {
                    ...state,
                    isLoggedIn: action.isLoggedIn,
                    token: action.token,
                };
            } else {
                alert("Username or password is incorrect");
                console.log("Incorrect username or password");
                return { ...state };
            }
        case "LOGOUT":
            if (action.isLoggedIn) {
                return { ...state };
            } else {
                return {
                    ...state,
                    isLoggedIn: action.isLoggedIn,
                    token: action.token,
                };
            }

        // case "LOGIN_USER": 
        // let exists:any;
        // // newToken:any="";
        // state.users.map((user:any)=>{
        //     if(user.email===action.user.email){
        //         exists=user;
        //     }
        // })
        // if(!exists){
        //     alert('User Does not exist.Register!!')
        //     //history.push("/register_user")
        //     return {...state};
        // }
        // else{
        //     bcrypt.compare(action.user.password,exists.password,(err,res)=>{
        //         if(err) return console.log("Bcrypt Error",err);
        //         if(!res){
        //             alert("invalid Credentials");
        //             //history.push("/home");
        //         }
        //         jwt.sign(
        //             {email:action.user.email},'jwtSecret',//jwtsecret
        //             {expiresIn:"3600s"},//this is optional and expires in 3600 s
        //             (err:any,token:any)=>{
        //                 if(err) throw err;
        //                 localStorage.setItem("token",token);
        //                 //state={...state,isLoggedIn:true,token:token}
        //                 //console.log(state);

        //             }
        //         )

        //     })
        // let token=localStorage.getItem("token");
        // console.log(token);

        // if(token){
        //     console.log("In toknen check");

        //     return {...state,isLoggedIn:true,token:token}
        // }
        // else{
        //     console.log("Outside token check");

        //     return{...state}
        // }
        //     console.log({...state});

        //     return {...state};
        // }

        // let exists:any;
        // state.users.map((user:any)=>{
        //     if(user.email===action.user.email){
        //         exists=user;
        //     }
        // })
        // if(!exists){
        //    alert('User Does Not Exists');
        //    console.log("In existing user");

        //    return {...state}

        // }else{
        //     //bcrypt.compare(action.users.password,exists.password)
        //     let valid = bcrypt.compareSync(action.users.password,exists.password);
        //     if(!valid){
        //         alert('Ivalid Credntials');
        //         return {...state}
        //     }
        //     else{
        //         let newToken:any;
        //         jwt.sign(
        //             {email:exists.email},//this the payload that help in uniquely identifying the user
        //             'jwtSecret',//jwtsecret
        //             {expiresIn:"120s"},//this is optional and expires in 3600 s
        //             (err:any,token:any)=>{
        //                 if(err) throw err;
        //                 // res.json({
        //                 //     token:token,//this will help us authenticate with private routes once user is registered
        //                 //     user:{
        //                 //         id:user.id,
        //                 //         name:user.name,
        //                 //         email:user.email
        //                 //     }
        //                 // })
        //                 localStorage.setItem("token",token);
        //                 newToken=token;
        //                 console.log("token",newToken);

        //             }
        //         )
        //         return {...state,token:newToken};
        //     }
        // }



        //     User.findOne({email:email})
        //     .then((user: any)=>{
        //         if(!user){
        //             return res.status(400).json("User does not exist!")
        //         }

        //    //Validate password
        //    bcrypt.compare(password,user.password)
        //         .then(isMatch=>{
        //            if(!isMatch) return res.status(400).json("Invalid Credentials!!");

        //            //Here we will take jwt and sign the token
        //            jwt.sign(
        //                {id:user.id},//this the payload that help in uniquely identifying the user
        //                config.get('jwtSecret'),//jwtsecret
        //                {expiresIn:"120s"},//this is optional and expires in 3600 s
        //                (err,token)=>{
        //                    if(err) throw err;
        //                    res.json(token)
        //                }
        //            )
        //         })
        //     });
        // case "LOGOUT":
        //     localStorage.clear();
        //     return {...state,isLoggedIn:false,token:""}

        default:
            return state;
    }
}

// import React from "react"
//  export const BookReducer =(state:any,action:any):any=>{
//      switch(action.type){
//         case "ADD_BOOK":
//             return{ ...state, books:[...state.books,{
//                 id:action.book.id,
//                 title:action.book.title,
//                 author:action.book.author,
//                 price:action.book.price,
//                 rating:action.book.rating,
//                 description:action.book.description,
//                 cover:action.book.cover
//             }]}
//               case "DELETE_BOOK":
//                 return{ ...state,books:[...state.books.filter((book:any)=>book.id!==action.id)]}
//                 break;
//              default:
//              return state;
//      }
//  }