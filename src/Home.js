import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import UserBooks from './Library/UserBooks';
import './Library/library.css'
import CreateUser from './Library/CreateUser';
import UserPage from './Library/UserPage';
import RegisterPage from './Library/RegisterPage';
import About from './Library/About'
import { Nav, Navbar, NavDropdown, Button, Carousel, Collapse, Breadcrumb, Accordion, Card } from 'react-bootstrap';
import Footer from './Library/Footer'
import Navi from './Library/Navi';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


 
function Home() {
  
  return (
<div className="Task">
<div className="header">


 
  <h1>LIBRARY MANAGEMENT SYSTEM</h1>
  <Router>
    <Navi />
    <Switch>
      <Route path="/userpage" component={UserPage} />
      <Route path="/userbooks" component={UserBooks} />
      <Route path="/createuser" component={CreateUser} />
      <Route path="/registerpage" component={RegisterPage} />
      <Route path="/about" component={About}/>
 
    </Switch>
  </Router>
  
    <div className="bg">
    <div class="main_content">
           
            <div class="info">
              <div>        public library provides services to the general public. If the library is part of a countywide library system, citizens with an active library card from around that county can use the library branches associated with the library system. A library can serve only their city, however, if they are not a member of the county public library system. Much of the materials located within a public library are available for borrowing. The library staff decides upon the number of items patrons are allowed to borrow, as well as the details of borrowing time allotted. Typically, libraries issue library cards to community members wishing to borrow books. Often visitors to a city are able to obtain a public library card.</div>
                
                <Carousel>
                <Carousel.Item>
                <img width={600} height={400} 
                    class="d-block w-80"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Biblioth%C3%A8que_de_l%27Assembl%C3%A9e_Nationale_%28Lunon%29.jpg/375px-Biblioth%C3%A8que_de_l%27Assembl%C3%A9e_Nationale_%28Lunon%29.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Online Library</h3>
                    <p>Good Collection of Books</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img width={600} height={400}
                    class="d-block w-80"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Egyetemi_K%C3%B6nyvt%C3%A1r4.JPG/330px-Egyetemi_K%C3%B6nyvt%C3%A1r4.JPG"
                    alt="Third slide"
                />
            
                <Carousel.Caption>
                    <h3>Online Library</h3>
                    <p>Easy to learn </p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img width={600} height={400}
                    class="d-block w-80"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Long_Room_Interior%2C_Trinity_College_Dublin%2C_Ireland_-_Diliff.jpg/330px-Long_Room_Interior%2C_Trinity_College_Dublin%2C_Ireland_-_Diliff.jpg"
                    alt="Second slide"
                />
            
                <Carousel.Caption>
                    <h3>Online Library</h3>
                    <p>Gain  more knowlegde</p>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        <Footer></Footer>




 
            </div>
 
          </div>
 
      </div>
</div>
    
    </div>
  )}
  export default Home;
