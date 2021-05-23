import React, { useContext, useState } from 'react';
import { HashRouter, Link, NavLink, Route } from 'react-router-dom';
import { BookContext } from "../context/BookContext"
import Details from './Details';
import SearchBar from './SearchBar';
import { StarComponent } from './StartComponent';
import {searchBooks} from "../components/utils"
function BookList() {
    const {state}= useContext(BookContext);
    const [books,setBooks]=useState<any>(state.books);
    //let books=state.books;
const handleBooks=(searchText:string,selected:string)=>{
    let books=searchBooks(searchText,selected,state.books);
    setBooks(books)
}
    
    return (
        <>
        <SearchBar handleBooks={handleBooks}/>

            <br />
            {books.map((book:any)=>{
                return (
                    <div className="grid">
                        <Link to={"/details/" + book.id}>

                            <div className="book-card" id={book.id}>
                                <br />
                                <img id="img" src={book.cover} alt={book.title} />
                                <div className="info">
                                    <h3>{book.title.slice(0, 13)}...</h3>
                        Rating:<div className="stars"><span><StarComponent rating={book.rating} outof={5} minof={1}></StarComponent></span></div>
                                    <p className="price"><strong>₹{book.price}</strong></p>
                                </div>
                            </div>

                        </Link>
                        <Route path={"/details/" + book.id} component={Details} />
                    </div>
                );
            })}
        </>
    );
}

export default BookList;