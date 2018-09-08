import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Button from "components/CustomButtons/Button.jsx";
import javascriptStyles from "assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles";
import Loadable from 'react-loadable';
import {MyLoadingComponent} from 'components/loadingComponent';

const AsyncIndividual = Loadable({
  loader: () => import('views/dashboard/UserProfile/UserSection/Individual'),
  loading: MyLoadingComponent
});

const AsyncOrganization = Loadable({
  loader: () => import('views/dashboard/UserProfile/UserSection/Organization'),
  loading: MyLoadingComponent
});

const AsyncShowProfile = Loadable({
  loader: () => import('views/dashboard/UserProfile/UserSection/ShowProfile'),
  loading: MyLoadingComponent
});

class UserProfile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dashboard: '',
      isEditing: false,
      showIndividual: false,
      showOrganization: false
    }
  }

  onClickEdit = () =>{
    this.setState({isEditing: true})
  };

  onClickCancel = () =>{
    this.setState({isEditing: false})
  };

  renderIndividual = () => {
    this.setState((prevState) =>
      ({ showIndividual: prevState, showOrganization: false })
    )
  };

  renderOrganization = () =>{
    this.setState((prevState) =>
      ({ showOrganization: prevState, showIndividual: false })
    )
  };

  render(){
    const padButton = {paddingTop: 30, paddingLeft: 20};
    let showIndividual = this.state.showIndividual ? <AsyncIndividual cancelEdit={this.onClickCancel}/> : null;
    let showOrganization = this.state.showOrganization ? <AsyncOrganization cancelEdit={this.onClickCancel}/> : null;
    return (
      this.state.isEditing ?
        <div style={padButton}>
          <Button onClick={this.renderIndividual} color="transparent" size="sm" round>Individual</Button>
          <Button onClick={this.renderOrganization} color="transparent" size="sm" round>Organization</Button>
          {/*<Button onClick={this.onClickCancel} color="transparent" size="sm" round>Cancel Edit</Button>*/}
          <div>
            {showIndividual}
          </div>
          <div>
            {showOrganization}
          </div>
        </div> : <AsyncShowProfile onClickEdit={this.onClickEdit}/>


    );
  }
}

export default withStyles(javascriptStyles)(UserProfile);
