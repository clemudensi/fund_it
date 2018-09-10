import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components

import blogsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.jsx";
import updC from '../UserDashboard/UserCampaign/Sections/UpdateCampaign'
import usrCView from '../UserDashboard/UserCampaign/Sections/ShowCampaign'

class UserCampaigns extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isEditing: false
    }
  }

  componentWillMount(){
    this.props.fetchUserCampaign();
  }

  onClickEdit = () => {
    this.setState({isEditing: true});
  };

  onCancelEdit = () => {
    this.setState({isEditing: false})
  };


  render(){
    console.log(this.props.id, 'ID props passed down from find')
    const {isEditing} = this.state;
    const { user_campaign, id } = this.props;
    {/*  start*/}
    return (
      isEditing ? <updC user_campaign={user_campaign} onCancelEdit={this.onCancelEdit}/>
        : <usrCView onClickEdit={this.onClickEdit} id={id} />
    );
  }
}


export default withStyles(blogsStyle)(UserCampaigns);
