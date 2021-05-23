import React, { useContext, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, FormControl, Button } from 'react-bootstrap';
import { BookContext } from '../context/BookContext';

const SearchBar=(props:any)=>{
    const [selected,setSelected]=useState("");
    const [searchText,setSearchText]=useState("");
    const { state } = useContext(BookContext);
    const handleChange = (e: any) => {
        setSearchText(e.target.value)
    }
    const handleSelected=(e:any)=>{
        setSelected(e.target.value);
    }
    return (
        <div>
            <Form className="search-form">
                <select className="browser-default custom-select" onClick={handleSelected}>
                    <option value="id">ID</option>
                    <option value="title">Title</option>
                    <option value="author">Author</option>
                    <option value="price">Price</option>
                    <option value="rating">Rating</option>
                </select>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={handleChange} />
                <Button variant="outline-info" onClick={()=>props.handleBooks(searchText,selected)}>Search</Button>
            </Form>
        </div>
    );
}

export default SearchBar;