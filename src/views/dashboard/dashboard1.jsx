import React from 'react';
import axios from 'axios';
// import {Button} from "material-ui";

class Dashboard1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dashboard: '',
            isAuthenticated: null
        }
    }

    logout = () => {
        localStorage.removeItem('id_token');
        window.location.reload();
    };

    async componentWillMount() {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('id_token');
        try{
            const res = await axios.get('/api/v1/user/:id/dashboard');
            this.setState({ dashboard: res.data });
        }catch (error) {
            if(error.response.status === 401 || 304) {
                this.props.history.push("/");
            }
        }
    }

    render(){
        console.log(localStorage.getItem('id_token'));
        const pad = {
          paddingTop: '50px'
        }
        return(
            <div style={pad}>
                <h3>{this.state.dashboard.msg}</h3>
            <button onClick={this.logout}>Logout</button>
            </div>
        )
    }
}

export default Dashboard1;
