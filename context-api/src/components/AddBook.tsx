import React, { useContext, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, ButtonGroup, Form } from 'react-bootstrap';
import { BookContext } from '../context/BookContext';
import { useHistory } from 'react-router';

function AddBook() {
    const history=useHistory();
    const {dispatch}=useContext(BookContext);
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [price, setPrice] = useState("");
    const [rating, setRating] = useState("");
    const [description, setDescription] = useState("");
    const [cover, setCover] = useState("");

   const handleClick=(e:any)=>{
        e.preventDefault();
        dispatch({type:"ADD_BOOK",book:{id,title,author,price,rating,description,cover}})
        history.push('/home');
    }
    return (
        <div className="add-book">
            <Form>
                <h1>ADD BOOK</h1>
                <Form.Group>
                    <Form.Label>ID</Form.Label>
                    <Form.Control type="text" placeholder="Enter ID" onChange={(e: any) => setId(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Title" onChange={(e: any) => setTitle(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" placeholder="Author" onChange={(e: any) => setAuthor(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" placeholder="Price" onChange={(e: any) => setPrice(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Rating</Form.Label>
                    <Form.Control type="text" placeholder="Rating" onChange={(e: any) => setRating(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Description" onChange={(e: any) => setDescription(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Cover</Form.Label>
                    <Form.Control type="text" placeholder="Book cover image" onChange={(e: any) => setCover(e.target.value)} />
                </Form.Group>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="secondary" onClick={handleClick}>ADD</Button>
                </ButtonGroup>
            </Form>
        </div>
    );
}

export default AddBook;