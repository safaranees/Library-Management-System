import React from 'react'
import { insertUsers} from './Services'
 
import './library.css'
 
import { Nav } from 'react-bootstrap'
 
class RegisterPage extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      id:"" ,
      name: '',
      jobrole: ''
 
    };
  }
  handleChange = (event) => {
    
    this.setState({
      [event.target.name]: event.target.value
    })
 
  }
  handleSubmit = (e) => {
    
    const userObj = {
      "id": this.state.id,
      "name": this.state.name,
      "jobrole": this.state.jobrole
    }
    this.setState({
      id : "",
      name: '',
      jobrole : ''
    })
    const insertResult = insertUsers(userObj);
    alert("successfully registered..please login!!");
    
  }
  submitRegister(e) { }
 
  render() {
    return (

    <form  onSubmit={this.handleSubmit} className="register">
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
      
        <button type='submit' class="btn btn-primary" onChange={this.handleSubmit}   >Register</button>&nbsp;&nbsp;&nbsp;
        
        <br></br><br></br>
       
    </div>
</form>



    );
  }
}
 
export default RegisterPage  
