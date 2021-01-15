import React, { Component } from 'react'
import { insertUser } from './Services'
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import { Table} from 'react-bootstrap';
import { fetchUsers } from './Services'
 import './library.css'
class CreateUser extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             id:0,
             name:'',
             jobrole:''
        }
    }
    handleChange=(event)=>{
       
        this.setState({
            [event.target.name]:event.target.value
        })
 
    }

    goback=()=>{
        this.props.history.push('/userpage');
      }
      handleSubmit=(e)=>{
        e.preventDefault();
        const userObj={
            "id":this.state.id,
            "name":this.state.name,
            "jobrole":this.state.jobrole
          }
        insertUser(userObj,this.validate);
    }

    handleClick = () => {
        fetchUsers();
    }
    validate = (posts,serverdata) => {
        console.log(posts);
        console.log(serverdata.jobrole);
        let authenticated_user = posts;
        if(posts.jobrole === serverdata.jobrole){
            
            let authenticated_user_serialized = JSON.stringify(authenticated_user);
 
        localStorage.setItem("authenticted_user", authenticated_user_serialized);
            this.props.history.push("/userpage");
            alert("Validate User Successful");
        }else{
            alert("failed");
        }
    }
   
    render() {
        return (
            <div className="loginpage">
                
                <form  onSubmit={this.handleSubmit} className="login">
                <br></br><br></br>
                    <div>
                        <label>Identity No:</label>
                        <input type='text' name="id" value={this.state.id} onChange={this.handleChange}placeholder="Enter unique ID" required/>
                    </div>
                    <div>
                        <label>User Name:</label>
                        <input type='text' name="name" value={this.state.name} onChange={this.handleChange}placeholder="Enter Username" required/>
                    </div>
                    <div>
                        <label>Password     :</label>&nbsp;&nbsp;
                        <input type='password' name="jobrole" value={this.state.jobrole} onChange={this.handleChange} placeholder="Enter valid Password" required/>
                    </div>
                    <div>
                        
                        <button type='submit' class="btn btn-primary" onChange={this.handleSubmit}   >Login</button>&nbsp;&nbsp;&nbsp;
                        
                        
                        
                    </div><br></br><br></br>
                </form>
               
            </div>
        
        )
    }
}
 
export default CreateUser