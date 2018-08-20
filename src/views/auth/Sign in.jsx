import React, {Component} from 'react';
// import {Fa, Input} from 'mdbreact';
import LocalAuthService from './components/LocalAuthService';
import {NavLink} from "react-router-dom";
import FacebookAuth from "./loginFacebook/FacebookAuth";

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            message: '',
            modal: false
        };
        this.Auth = new LocalAuthService();
    }

    handleLoginEmail = (e) => {
        this.setState({email: e.target.value});
    };

    handleLoginPass = (e) =>{
        this.setState({password: e.target.value});
    };

    handleFormSubmit = async e=> {
      e.preventDefault();
      const {email, password} = this.state;
      const res = await this.Auth.login(email, password);
      this.props.history.replace(`/user/${res.data.user._id}`);
      // console.log(res, 'login res here')
      // console.log(localStorage.getItem('id_token'), 'local token')
    };

    // handleFormSubmit = async e =>{
    //     localStorage.setItem()
    //     e.preventDefault();
    //     const {email, password} = this.state;
    //     try {
    //         const res = await this.Auth.login(email, password);
    //         // const token = res.headers.get('x-auth-token');
    //         if( res.headers['x-auth-token']){
    //             // console.log(res);
    //             // this.props.history.replace('/dashboard');
    //           console.log(res.headers['x-auth-token'])
    //         }
    //       // console.log(res, 'login res here')s
    //       // console.log(res.headers['x-auth-token'])
    //     }catch (error) {
    //         // this.setState({message: error.response.data.msg});
    //         // console.log(this.state.message)
    //       return error
    //     }
    // };


    render(){
        // console.log(this.state.message, 'The message login ')
        const { email, password, message } = this.state;
        return (
            <div className="center-form">
                <form className="md-form mb-4 col-md-4 card" onSubmit={this.handleFormSubmit}>
                    {/*<p className="h3 text-center mb-4 ">Log in</p>*/}
                    <div className="container card-body">
                        <div className="modal-header primary-color white-text">
                            <h4 className="title -align-center">
                                {/*<Fa icon="pencil"/> */}
                              Log in</h4>
                        </div>
                        {message !== '' &&
                        <div className="card-panel red lighten-4 red-text text-darken-4">{message}</div>}
                        {/*<Input label="Email" icon="envelope" group type="email" error="wrong" success="right"*/}
                               {/*value={email} onChange={this.handleLoginEmail} required />*/}
                        {/*<Input label="Type your password" icon="lock" group type="password" validate*/}
                               {/*value={password} onChange={this.handleLoginPass} required/>*/}

                        <button className="btn btn-blue btn-lg btn-block btn-outline-primary" type="submit">Login </button>
                        <NavLink to="/forgot-pass" className="login-pad waves-float float-right loginpad">forgot password?</NavLink>
                    </div>

                </form>
              <FacebookAuth/>
            </div>
        )
    }
}

export default Login;
