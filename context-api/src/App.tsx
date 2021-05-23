import React, { useContext } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Switch,Route, Link} from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import BookList from './components/BookList';
import AddBook from './components/AddBook'
import {BookContext} from "./context/BookContext"
import Details from './components/Details';
import Register from "./components/register"
import Login from './components/login';

function App() {
  const {state,dispatch} = useContext(BookContext);
  let token = state.token;
  let isLoggedIn=state.isLoggedIn;
  return (
    <div>
      <Router>
        <Navbar bg="dark" variant="dark" className="nav-bar">
        <img className="img" src="https://vignette.wikia.nocookie.net/innoxia/images/c/c2/Books.gif/revision/latest?cb=20170805184836"/>   
        <Navbar.Brand href="home" className="header"><h2>BOOK STORE MANAGEMENT</h2></Navbar.Brand>
        <div className="nav-list">
        <Nav className="mr-auto">
        <Link to="/home">Home</Link>
        {/* <Nav.Link href="/book_list">Book List</Nav.Link> */}
        {isLoggedIn && token?<Link to="/add_book">Add Book</Link>:null}
        {isLoggedIn && token ? null : <Link to="/register_user">Register |</Link>}
        {isLoggedIn && token ? null : <Link to="/login_user">| Login</Link>}
        {isLoggedIn && token ? (
              <Link
                onClick={() => {
                  dispatch({
                    type: "LOGOUT",
                    isLoggedIn: false,
                    token: "",
                  });
                  localStorage.clear();
                }}
                to="/home"
              >
                LOGOUT
              </Link>
            ) : null}
        </Nav>
        </div>
        </Navbar>
        <br/><br/>
        <Switch>
          <Route  exact path="/home"><BookList/></Route>
          {/* <Route path="/book_list" ><BookList/></Route> */}
          <Route path="/add_book"><AddBook/></Route>
          <Route path="/register_user"><Register/></Route>
          <Route path="/login_user"><Login/></Route>
          <Route path="/register_user"><Register/></Route>

          <Route path="/details/:id" component={Details}/>
        </Switch>
        </Router>
    </div> 
  );
}

export default App;
