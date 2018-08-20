import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Container, Input} from 'mdbreact';

class ForgotPass extends React.Component{
    constructor(){
        super();
        this.state = {
            email: '',
            message: ''
        }
    }

    handleSubmitEmail = (e) =>{
        this.setState({email: e.target.value})
    };

    onSubmit = (e) => {
        e.preventDefault();
        const {email} = this.state;
        const response = 'An email has been sent to ' + email + ' check your email and reset password';
        axios.post('/api/forgot-pass', {email})
            .then((res) => {
                if(res.status === 200){
                    this.setState({message: response});
                } else {
                    return "There is an error"
                }
            })
            .catch((error) => {
                if(error.response.status === 401){
                    this.setState({message: 'This email is not registered'});
                }
            });
        console.log("I was fired FG")
    };

    render(){
        const {email, message} = this.state;
        return(
            <div>
                <Container className="container">
                    <form onSubmit={this.onSubmit}>
                        {message !== '' &&
                        <div className="lighten-4 green-text text-darken-4">{message}</div>}
                        <Input type="email" onChange={this.handleSubmitEmail} value={email} label="Email" />
                        <button className="btn btn-primary" type="submit">Submit</button>
                        <Link to="/">Back to home</Link>
                    </form>
                </Container>
            </div>
        )
    }
};

export default ForgotPass;