import React, { useContext, useEffect, useState } from 'react';
import { RouteComponentProps, useHistory } from 'react-router';
import { BookContext } from '../context/BookContext';

const Details=(props:any)=>{
    const [book,setBook]=useState({id:0,title:"",author:"",price:0,rating:0,description:"",cover:""});
    const [index,setIndex]=useState(0);
    const {state} = useContext(BookContext);
    let isLoggedIn=state.isLoggedIn;
    let books=state.books;
    const {dispatch}=useContext(BookContext);
    const history=useHistory();
    useEffect(()=>{
        books.map(function(book:any,index:any){
            if(book.id===(props.match.params.id)){
                setBook({...book});
                setIndex(index);
            }
            
        })
    })
console.log(index);
    
    return (
        <div>
              <div className="card">
                <img id="imgDetails" src={book.cover} alt={book.title} />
                <div className="book-info">
                <p>
                  <strong>Author:{book.author}</strong>
                </p>
                <p>
                  <strong>Rating:{book.rating}</strong>
                </p>
                <p>
                  <strong>Price :₹{book.price}</strong>
                </p>
                </div>
                <h1>{book.title}</h1>
                <br />
                <p>
                  <strong>{book.description}</strong>
                </p>
             
                {isLoggedIn?<button type="button" id="del-button" onClick={()=>{dispatch({type:"DELETE_BOOK",id:book.id});history.push("/home")}}>DELETE</button>:null}
              </div>
      </div>
    );
}

export default Details;