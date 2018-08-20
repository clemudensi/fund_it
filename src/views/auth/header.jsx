import React from 'react';
import Auth from 'components/LocalAuthService';
// import NavUser from './navigation/nav-user.jsx';
// import NavHome from './navigation/nav-home.jsx';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.Auth = new Auth();
    }

    handleLogout = () =>{
        this.Auth.logout();
        window.location.replace('/login');
    };

    // componentWillMount(){
    //     if(this.props.token) window.location.replace('/dashboard');
    //     window.location.replace('/login')
    // };
    //
    // componentWillUnmount(){
    //     // if(this.props.token) window.location.replace('/dashboard');
    //     window.location.replace('/login').remove()
    // };

    render() {
        const container = {paddingBottom: 50};
        // const navBar = this.props.token && localStorage.getItem('jwtToken') ?
        //     <NavUser handleLogout={this.handleLogout}/> :
        //     <NavHome />;
        return (
            <div style={container}>
              <p>Please Just put a paragraph</p>
            </div>
         );
    }
}

export default Header;
