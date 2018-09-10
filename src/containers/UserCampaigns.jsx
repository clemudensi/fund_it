import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components

import blogsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.jsx";
import UpdateCampaign from 'views/UserDashboard/UserCampaign/Sections/UpdateCampaign'
import ShowCampaigns from 'views/UserDashboard/UserCampaign/Sections/ShowCampaign'
import {bindActionCreators} from "redux";
import fetchUserCampaign from "actions/userCampaigns";
import connect from "react-redux/es/connect/connect";

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

  onClickEdit = (key) => {
    this.setState({isEditing: true, id: key});
  };

  onCancelEdit = () => {
    this.setState({isEditing: false})
  };


  render(){
    const {isEditing} = this.state;
    const { user_campaign, id } = this.props;
    return (
      isEditing ? <UpdateCampaign user_campaign={user_campaign} onCancelEdit={this.onCancelEdit} id={this.state.id}/>
        : <ShowCampaigns onClickEdit={this.onClickEdit} id={id} />
    );
  }
}

function mapStateToProps(state) {
  return {
    user_campaign: state.user_campaign
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchUserCampaign}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(blogsStyle)(UserCampaigns));
