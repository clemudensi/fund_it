import React from 'react';
import axios from 'axios';
import withStyles from "@material-ui/core/styles/withStyles";
import Save from "@material-ui/icons/Save"
import Cancel from "@material-ui/icons/Cancel"
import CustomInput from "components/CustomInput/CustomInput";
import Button from "components/CustomButtons/Button";
import style from "assets/jss/material-kit-pro-react/views/componentsSections/contentAreas";

class AddComments extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      comment_body: ''
    }
  }

  handleComments = e => {
    this.setState({comment_body: e.target.value})
  };

  handleFormSubmit = async e => {
    e.preventDefault();

    const {comment_body} = this.state;
    const {user_id, campaign_id} = this.props;
    try {
      axios.patch(`/api/v1/campaign/${campaign_id}/add-comment`, {
        comment_body,
        user_id
      })
    } catch (err) {
     return err
    }
  };

  render(){
    const {comment_body} = this.state;
    const { classes } = this.props;
    return(
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <CustomInput
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              value: comment_body,
              onChange: this.handleComments,
              multiline: true,
              rows: 6,
              placeholder: "Add your Comments"
            }}
          />
          <div className={classes.signInButton}>
            <Button type="submit" color="info" className={classes.floatRight} round size="sm">
              <Save />
            </Button>
            <Button color="info" className={classes.floatRight} round onClick={this.props.onClickCancelComment} size="sm">
              <Cancel />
            </Button>
          </div>
        </form>
      </div>
    )
  }
}

export default withStyles(style)(AddComments)
