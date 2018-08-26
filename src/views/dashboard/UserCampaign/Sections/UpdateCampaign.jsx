import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import axios from 'axios';
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import Button from "components/CustomButtons/Button.jsx";

import CustomInput from "components/CustomInput/CustomInput.jsx";
import Media from "components/Media/Media.jsx";


import style from "assets/jss/material-kit-pro-react/views/componentsSections/contentAreas.jsx";

import placeholder from "assets/img/placeholder.jpg";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import {bindActionCreators} from "redux";
import fetchUser from "actions/users";
import {connect} from "react-redux";

class UpdateCampaign extends React.Component {
  constructor(props) {
    super(props);
    const {campaign} = this.props;
    this.state = {
      campaignOwner_id: campaign.campaignOwner_id,
      campaign_type: campaign.campaign_type,
      campaign_title: campaign.campaign_title,
      campaign_description: campaign.campaign_description,
      campaign_amount: campaign.campaign_amount,
      campaign_duration: campaign.campaign_duration,
    };
  }

  componentDidMount(){
    this.props.fetchUser();
  }

  handleTitle = e => {
    this.setState({campaign_title: e.target.value});
  };

  handleDescription = e => {
    this.setState({campaign_description: e.target.value});
  };

  handleAmount = e => {
    this.setState({campaign_amount: e.target.value});
  };

  handleDuration = e => {
    this.setState({campaign_duration: e.target.value});
  };

  handleSimple = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({campaignOwner_id: this.props.user_login.user});
  };

  uploadWidget = () =>{
    window.cloudinary.openUploadWidget({ cloud_name: 'fundit-app', upload_preset: 'fua6wfmh', tags:['fundit']},
      (error, result) => {
        try {
          this.setState({
            campaign_image: result[0].url,
            fileName: result[0].original_filename,
            format: result[0].format
          })
        } catch (err) {
          return err
        }
      });
  };

  handleFormSubmit = async e => {
    e.preventDefault();
    const {
      campaignOwner_id,
      campaign_type,
      campaign_title,
      campaign_description,
      campaign_amount,
      campaign_duration,
      campaign_image
    } = this.state;
    const user_id = this.state.campaignOwner_id;

    try {
      return await axios.put(`/api/v1/user/${user_id}/campaign/:id`, {
        campaignOwner_id,
        campaign_type,
        campaign_title,
        campaign_description,
        campaign_amount,
        campaign_duration,
        campaign_image
      })
    } catch (err) {
      return err
    }
  };

  render() {
    const { classes, campaign} = this.props;
    const {
      campaign_title,
      campaign_description,
      campaign_amount,
      campaign_duration,
    } = this.state;
    const topPadding = {paddingTop: 30};
    return (
      <div className={classes.main}>
        <h2 className={classes.title} align="center" style={topPadding}>Update {campaign.campaign_title} Campaign</h2>
        <div className={classes.space20} />
        <div id="comments">
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
            >
              <form className={classes.form} onSubmit={this.handleFormSubmit}>
                <Media
                  title={<div>
                    <Button round onClick={this.uploadWidget} >
                      Upload Image
                    </Button>
                    <h4>{this.state.fileName}.{this.state.format}</h4>
                  </div>
                  }
                  avatar={placeholder}
                  body={
                    <div>
                      <GridContainer>
                        <GridItem xs={12} sm={6} md={6}>
                          <CustomInput
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              value: campaign_title,
                              onChange: this.handleTitle,
                              placeholder: "Campaign Title"
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={6} md={6}>
                          <CustomInput
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              value: campaign_duration,
                              onChange: this.handleDuration,
                              placeholder: "Duration (0 - 45 days)"
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={6} md={6}>
                          <FormControl
                            fullWidth
                            className={classes.selectFormControl}>
                            <InputLabel
                              htmlFor="simple-select"
                              className={classes.selectLabel}>
                              Select Campaign Category
                            </InputLabel>
                            <Select
                              MenuProps={{
                                className: classes.selectMenu
                              }}
                              classes={{
                                select: classes.select
                              }}
                              value={this.state.campaign_type}
                              onChange={this.handleSimple}
                              inputProps={{
                                name: "campaign_type",
                                id: "simple-select"
                              }}>
                              <MenuItem
                                disabled
                                classes={{
                                  root: classes.selectMenuItem
                                }}>
                                Category
                              </MenuItem>
                              <MenuItem
                                classes={{
                                  root: classes.selectMenuItem,
                                  selected: classes.selectMenuItemSelected
                                }}
                                value="Charity">
                                Charity
                              </MenuItem>
                              <MenuItem
                                classes={{
                                  root: classes.selectMenuItem,
                                  selected: classes.selectMenuItemSelected
                                }}
                                value="Enterprise">
                                Enterprise
                              </MenuItem>
                              <MenuItem
                                classes={{
                                  root: classes.selectMenuItem,
                                  selected: classes.selectMenuItemSelected
                                }}
                                value="Gifts">
                                Gifts
                              </MenuItem>
                            </Select>
                          </FormControl>
                        </GridItem>
                      </GridContainer>
                      <GridContainer>
                        <GridItem xs={12} sm={6} md={6}>
                          <CustomInput
                            id="not-logged-name"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              value: campaign_amount,
                              onChange: this.handleAmount,
                              placeholder: "Amount in digits e.g(5000)"
                            }}
                          />
                        </GridItem>
                      </GridContainer>
                      <CustomInput
                        id="not-logged-message"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          value: campaign_description,
                          onChange: this.handleDescription,
                          multiline: true,
                          rows: 6,
                          placeholder: "Campaign Description"
                        }}
                      />
                    </div>
                  }
                  footer={
                    <div className={classes.signInButton}>
                      <Button type="submit" color="info" className={classes.floatRight} round>
                        Send
                      </Button>
                      <Button color="rose" className={classes.floatLeft} round onClick={this.props.onCancelEdit}>
                        Cancel
                      </Button>
                    </div>
                  }
                />
              </form>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user_login: state.user_login
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchUser}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(UpdateCampaign));
