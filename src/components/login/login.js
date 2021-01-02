import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './register.css'

class login extends Component {
  constructor(){
      super();
      this.state = {
          email : "",
          password : "",
          formError: false
      }
  }

  // getName = (e) =>{
  //   let username = e.target.value; 
  //   this.setState({
  //       name: username
  //   });
  //   console.log(this.state.name);
  // }
  
  
  getEmail = (e) =>{
    let userEmail = e.target.value; 
    // eslint-disable-next-line no-useless-escape
    if(userEmail.match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)){
      this.setState({
        email: userEmail
    });
      }else{
        this.setState({
          email: ""
      });
      console.log("Incorrect e-mail, must match expression");
    }
  
    console.log(this.state.email);
  }

  
  getPassword = (e) =>{
    let userPassword = e.target.value; 
    this.setState({
        password: userPassword
    });
    console.log(this.state.password);
  }
  //send the form
  submitForm = (e) =>{
    e.preventDefault();

    if( this.state.email === "" || this.state.password === "" ){
     this.setState({
        formError: true
     })
       return false;
    }else{
        this.setState({
            formError: false
         })
        console.log(`UserData: {
            Email: ${this.state.email},
            Message: ${this.state.password}
        }`)
        
        console.log("form sent")
    }
 
  }

  render() {

  

    return (
        <form>
          {/* I am just sending a basic error message */}
              {this.state.formError &&
                <p className="error">
                    Fill all the input fields please.
                </p>
              }
              {/* <p>Fill in the next form to send us a message</p> */}
        
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="" onChange={this.getEmail} />
              </div>
              <div>
                <label htmlFor="name">Password</label>
                <input type="password" onChange={this.getPassword}/>

              </div>
              <div>
                <input className="submit" type="submit" name="submit" value="Submit" onClick= {this.submitForm} />
              </div>
            </form>
    );
  }
}

export default login;

// import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import "./register.css";

// const Login = ()=> {
  
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function validateForm() {
//     return email.length > 0 && password.length > 0;
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//   }

//   return (
//     <div className="Login">
//       <Form onSubmit={handleSubmit}>
//         <Form.Group size="lg" controlId="email">
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             autoFocus
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group size="lg" controlId="password">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </Form.Group>
//         <Button block size="lg" type="submit" disabled={!validateForm()}>
//           Login
//         </Button>
//       </Form>
//     </div>
//   );
// }
// export default Login;