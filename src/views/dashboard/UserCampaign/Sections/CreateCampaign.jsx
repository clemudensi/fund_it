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
import Close from "@material-ui/icons/Close";
import placeholder from "assets/img/placeholder.jpg";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Accordion from "components/Accordion/Accordion";
import {bindActionCreators} from "redux";
import fetchUser from "actions/users";
import {connect} from "react-redux";
import map from 'lodash/map';
import remove from 'lodash/remove';

class CreateCampaign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      campaignOwner_id: '',
      campaign_type: '',
      campaign_title: '',
      campaign_description: '',
      campaign_duration: '',
      fund_amount: 0,
      fund_purpose: '',
      fund_type: '',
      fund_description: '',
      funding: []
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

  handleDuration = e => {
    this.setState({campaign_duration: e.target.value});
  };

  handleFundAmount = e => {
    this.setState({fund_amount: e.target.value});
  };

  handleFundPurpose = e => {
    this.setState({fund_purpose: e.target.value});
  };

  handleCashFunds = () => {
    this.cashFunds(this.state.fund_amount, this.state.fund_purpose);
  };

  handleOtherFunds = () => {
    this.otherFunds(this.state.fund_type, this.state.fund_description);
  };

  cashFunds(amount, purpose) {
    if(amount && purpose){
      this.state.funding.push({
        amount,
        purpose,
      });
      this.setState((prevState) => ({ funding: prevState.funding }));
    }
  }

  otherFunds(type, description){
    if(type && description) {
      this.state.funding.push({
        type,
        description
      });
      this.setState((prevState) => ({ funding: prevState.funding }));
    }
  }

  handleFundDescription = e => {
    this.setState({fund_description: e.target.value});
  };

  handleFundType = e => {
    this.setState({fund_type: e.target.value});
  };

  handleSimple = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({campaignOwner_id: this.props.user_login.user});
  };

  deleteFundItem (key) {
    const amount = this.state.funding[key].amount;
    remove(this.state.funding, fund => fund.amount === amount);
    this.setState((prevState) => ({ funding: prevState.funding }))
  };

  deleteFundType (key) {
    const type = this.state.funding[key].type;
    remove(this.state.funding, fund => fund.type === type);
    this.setState((prevState) => ({ funding: prevState.funding }))
  };

  updateCampaign(oldCampaign, newCampaign){

  }

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

  handleFormSubmit = async (e) => {
    e.preventDefault();
    const {
      campaignOwner_id,
      campaign_type,
      campaign_title,
      campaign_description,
      campaign_duration,
      campaign_image,
      funding,
    } = this.state;
    const user_id = this.state.campaignOwner_id;

    try {
      return await axios.post(`/api/v1/user/${user_id}/campaign/new`, {
        campaignOwner_id,
        campaign_type,
        campaign_title,
        campaign_description,
        campaign_duration,
        campaign_image,
        funding
      })
    } catch (e) {
      return e
    }
  };

  render() {
    // console.log(this.state.fund_amount, 'Fund Amount')
    // console.log(this.state.funding, 'Fund state with separate push')
    const { classes} = this.props;
    const {
      campaign_title,
      campaign_description,
      campaign_duration,
      fund_amount,
      fund_description,
      fund_type,
      fund_purpose
      } = this.state;
    return (
      <div className={classes.main}>
        <div className={classes.space20} />
        <div id="comments">
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
            >
              <form className={classes.form} onSubmit={this.handleFormSubmit} >
                <Media
                  title={<div>
                    <Button round onClick={this.uploadWidget} size="sm">
                      Upload Image
                    </Button>
                    <h4>{this.state.fileName}.{this.state.format}</h4>
                  </div>
                  }
                  avatar={placeholder}
                  body={
                    <div>

                      {/*Campaign Title*/}
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

                        {/*Campaign Duration*/}
                        <GridItem xs={12} sm={6} md={6}>
                          <CustomInput
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              value: campaign_duration,
                              onChange: this.handleDuration,
                              placeholder: "Duration in days (0 - 45 )"
                            }}
                          />
                        </GridItem>

                        {/*Select Campaign Category*/}
                        <GridItem xs={12} sm={12} md={12}>
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

                      {/*Funding Options Starts*/}
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                          <Accordion
                            // active={0}
                            activeColor="info"
                            collapses={[
                              {
                                title: "Cash funding",
                                content: (
                                  <div>
                                    <GridContainer>
                                      {/*Item Output*/}
                                      <div align="center" className={classes.container}>
                                        {map(this.state.funding, (funding, key) => funding.amount ? <div key={key} align="center">
                                            <p>{funding.amount} {funding.purpose}</p>
                                            <Button simple justIcon size="sm" color="danger" onClick={() => this.deleteFundItem(key)}>
                                              <Close />
                                            </Button>
                                          </div> : null
                                        )}
                                      </div>

                                      {/*Fund Amount*/}
                                      <GridItem xs={12} sm={4} md={4}>
                                        <CustomInput
                                          id="not-logged-name"
                                          formControlProps={{
                                            fullWidth: true
                                          }}
                                          inputProps={{
                                            value: fund_amount,
                                            onChange: this.handleFundAmount,
                                            placeholder: "Amount in digits e.g 5000"
                                          }}
                                        />
                                      </GridItem>

                                      {/* Funding Description*/}
                                      <GridItem xs={12} sm={8} md={8}>
                                        <CustomInput
                                          formControlProps={{
                                            fullWidth: true
                                          }}
                                          inputProps={{
                                            value: fund_purpose,
                                            onChange: this.handleFundPurpose,
                                            placeholder: "Funding Description"
                                          }}
                                        />
                                      </GridItem>
                                    </GridContainer>
                                    <Button color="info" round size="sm" onClick={this.handleCashFunds} className={classes.floatRight}>
                                      Add
                                    </Button>
                                  </div>
                                )
                              },
                              {
                                title: "Other types of funding",
                                content: (
                                  <div>
                                    <GridContainer>
                                      {/*Funding Type*/}
                                      <div align="center" className={classes.container}>
                                        {map(this.state.funding, (funding, key) => funding.type ? <div key={key} align="center">
                                            <p>{funding.type} {funding.description}</p>
                                            <Button simple justIcon size="sm" color="danger" onClick={() => this.deleteFundType(key)}>
                                              <Close />
                                            </Button>
                                          </div> : null
                                        )}
                                      </div>
                                      <GridItem xs={12} sm={4} md={4}>
                                        <CustomInput
                                          formControlProps={{
                                            fullWidth: true
                                          }}
                                          inputProps={{
                                            value: fund_type,
                                            onChange: this.handleFundType,
                                            placeholder: "Type e.g Bus"
                                          }}
                                        />
                                      </GridItem>

                                      {/*Funding Description*/}
                                      <GridItem xs={12} sm={8} md={8}>
                                        <CustomInput
                                          formControlProps={{
                                            fullWidth: true
                                          }}
                                          inputProps={{
                                            value: fund_description,
                                            onChange: this.handleFundDescription,
                                            placeholder: "Funding Description"
                                          }}
                                        />
                                      </GridItem>
                                      <Button color="info" round size="sm" onClick={this.handleOtherFunds} className={classes.floatRight}>
                                        Add
                                      </Button>
                                    </GridContainer>
                                  </div>
                                )
                              }
                            ]}
                          />
                        </GridItem>
                      </GridContainer>
                      {/*Funding option ends*/}

                      {/*Campaign Description*/}
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(CreateCampaign));
