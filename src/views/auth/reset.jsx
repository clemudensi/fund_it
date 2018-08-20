import React from 'react';
import axios from 'axios';
import {Container, Input} from 'mdbreact';

class ResetPass extends React.Component{
    constructor(){
        super();
        this.state = {
            password: '',
            confirmPassword: '',
            message: ''
        }
    }

    handlePassword = (e) =>{
        this.setState({password: e.target.value})
    };

    handleConfirmPassword = (e) =>{
        this.setState({confirmPassword: e.target.value})
    };

    onSubmit = (e) => {
        e.preventDefault();
        const {password} = this.state;
        axios.post('/api/reset', {password})
            .then((res) => {
                this.setState({message: 'password has been changed successfully'})
            })
            .catch((error) => {
                if(error.response.status === 401){
                    this.setState({message: 'Error occurred please type in a correct password'});
                }
            });
    };

    render(){
        const {password, message} = this.state;
        return(
            <div>
                <Container className="container">
                    <form onSubmit={this.onSubmit}>
                        {message !== '' &&
                        <div className="lighten-4 green-text text-darken-4">{message}</div>}
                        <Input type="password" onChange={this.handlePassword} value={password} label="New Password" />
                        <Input type="password" value={this.handleConfirmPassword} label="Confirm Password" />
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </form>
                </Container>
            </div>
        )
    }
};

export default ResetPass;
