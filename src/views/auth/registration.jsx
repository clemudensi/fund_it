import React, {Component} from 'react';
import {Fa, Input} from 'react-bootstrap';
import Auth from './components/LocalAuthService';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            message: '',
            confirmPassword: '',
            isMounted: false
        };
        this.Auth = new Auth();
    }

    handleFirstName = (e) =>{
        this.setState({firstName:e.target.value});
    };

    handleLastName = (e) =>{
        this.setState({ lastName: e.target.value });
    };

    handleEmail = (e) =>{
        this.setState({ email: e.target.value });
    };

    handlePassword = (e) =>{
        return this.setState({ password: e.target.value });
    };

    handleConfirmPassword = (e) => {
        return this.setState({ confirmPassword: e.target.value });
    }

    handleSubmit = async e =>{
        e.preventDefault();
        const { firstName, lastName, email, password } = this.state;
        try {
            const res = await this.Auth.signup(firstName, lastName, email, password);
            if( res.data.token){
                // this.props.history.replace('/dashboard');
              console.log('I was fired as a signup')
            }
        }catch (error) {
            if(this.state.isMounted) {
                this.setState({message: error.response.data.msg})
            }
        }

    };

    confirmPassword = () => {
        if(this.state.password !== this.state.confirmPassword ){
            this.setState({confirm: "Password did not match"});
        } else {
            this.setState({confirm: <div className="lighten-4 green-text text-darken-4">Password Matched</div>});
            setTimeout(function(){
                this.setState({confirm: false});
            }.bind(this), 5000);
        }
    };

    componentWillMount() {
        this.setState({isMounted: true});
        console.log("mounted")
    }

    componentWillUnmount() {
        this.setState({isMounted: false});
    }

    render() {
        console.log(this.state.isMounted, 'The state ')
        const { firstName, lastName, email, password, confirmPassword, message, confirm } = this.state;
        return (
            <div className="center-form">
                <form className="md-form mb-4 col-md-5 card" onSubmit={this.handleSubmit} >
                    <div className="container">
                        <div className="modal-header primary-color white-text">
                            <h4 className="title -align-center">
                                <Fa icon="paper-plane-o"/>Sign Up</h4>

                        </div>
                        {/*{message !== '' &&*/}
                        <div className="lighten-4 red-text text-darken-4">{message}</div>
                        <Input label="First name" icon="user" error="wrong" success="right" validate
                               value={firstName} onChange={this.handleFirstName} required/>
                        <Input label="Last Name" icon="user-circle" error="wrong" success="right" validate
                               value={lastName} onChange={this.handleLastName} required/>
                        <Input label="Type your email" icon="envelope" group type="email" validate error="wrong" success="right"
                               value={email} onChange={this.handleEmail} required/>
                        <Input label="Type your password" icon="lock" group type="password" validate
                               value={password} onChange={this.handlePassword} minLength={6} className="form-control"
                               id="inputPassword" onInput={this.confirmPassword} required/>
                        <Input label="Confirm password" icon="exclamation" group type="password" validate
                               value={confirmPassword} onChange={this.handleConfirmPassword}
                               id="inputPasswordConfirm" match="#inputPassword"
                               onKeyUp={this.confirmPassword} required
                        />
                        <div className="card-panel lighten-4 red-text text-darken-4">{confirm}</div>
                        <div className="text-center">
                            <button className="btn btn-blue btn-outline-info" type="submit">Send <Fa icon="paper-plane-o" className="ml-1"/></button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Signup;
