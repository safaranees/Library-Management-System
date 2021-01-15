import React, { Component } from 'react'
import { Table,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom'; 

 import './library.css'
class UserPage extends Component {
 
    constructor(props) {
        super(props)
 
        this.state = {
 
            bookDetails: [],
            searchedBooks: []
 
        }
    }
 
    componentDidMount() {
        fetch("http://localhost:3000/books").then(
            res => {
                res.json()
                    .then(endRes => this.setState({ bookDetails: endRes, searchedBooks: endRes })).catch(err => console.log(err))
            })
            .catch(err => console.log(err))
 
    }
    
    handleClick = (p, user) => {
 
        let temp = {
            ...p,
            available_copies: p.available_copies - 1,
            issued_to: [...p.issued_to, user.name]
        }
        fetch("http://localhost:3000/books/" + p.id, {
            method: 'PUT',
            body: JSON.stringify(temp),
            headers: {
                'content-type': 'application/json'
            }
        }
        ).then(result => result.json().then(data => console.log(data))).catch(err => console.log(err))
        this.props.history.push("/userbooks");
 
    }
 
    handleChange = (event) => {
        let x = document.getElementById("select").value;
 
        let search = event.target.value;
        if (search !== undefined) {
            console.log("select value", x);
            if (x === "title") {
                this.setState(state => state.searchedBooks = this.state.bookDetails.filter(p => p.title.toLowerCase().includes(search.toLowerCase())))
            }
            else if (x === "author") {
                this.setState(state => state.searchedBooks = this.state.bookDetails.filter(p => p.author.toLowerCase().includes(search.toLowerCase())))
            }
            else if (x === "id") {
                this.setState(state => state.searchedBooks = this.state.bookDetails.filter(p => p.id===search))
            }
        } else {
            this.setState(state => state.searchedBooks = this.state.bookDetails)
        }
 
    }
 
    render() {
 
        const { bookDetails } = this.state


 
        let user = JSON.parse(localStorage.getItem("authenticted_user"));
        console.log(user.name)
 
        console.log("bookDetails", bookDetails);
 
        return (
           

            <div>
              
                <div className="tablediv">
                    
                    <div className="search">
                    <select id="select" >
                            <option value="title" >Title</option>
                            <option value="author" >Author</option>
                            
                        </select>
 
                        <input type="text" placeholder="Search Books..." name="search" onChange={this.handleChange} /><br/><br/>
                        
                        <Link to='/userbooks' className="btn btn-primary">My Books</Link>
                
                    </div>
                    <br />
                    <br />
                    <Table className="table" striped bordered hover variant="dark">
                        <thead>
                            <tr>


                            <th>Id</th>
                                <th>Title</th>
                                <th>Author</th>
                               
                                <th>Status</th>
                            </tr>
                        </thead>
 
                        <tbody>
                            {this.state.searchedBooks.map(p => p.available_copies > 0 ? <tr>
                                <td>{p.id}</td>
                                <td>{p.title}</td>
                                <td>{p.author}</td>
                               
                                <td><button className="btn btn-success" onClick={() => this.handleClick(p, user)}>Check-Out</button></td>
                            </tr>
                                : <tr>
                                    <td>{p.id}</td>
                                    <td>{p.title}</td>
                                    <td>{p.author}</td>
                                  
                                    <td><button className="btn btn-danger disabled" >Out-Of-Stock</button></td>
                                </tr>)}
                                </tbody>
 
 </Table>
</div>
</div>

)
}
}

export default UserPage