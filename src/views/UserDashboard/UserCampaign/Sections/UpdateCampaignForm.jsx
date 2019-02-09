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
import FormControl from "@material-ui/core/FormControl";
import remove from "lodash/remove";
import TextField from "@material-ui/core/TextField/TextField";
import forEach from "lodash/forEach";
import selectMenu from "./selectMenu";
import Accordion from "components/Accordion/Accordion";
import map from "lodash/map";
import Close from "@material-ui/icons/Close";
import { PATH_BASE } from "../../../../constants";

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 400,
  },
});


class UpdateCampaignForm extends React.Component {
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
      campaign_funds: []
    };
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

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  cashFunds(amount, purpose, title) {
    title = `Cash funds of ${amount}`;
    if(amount && purpose){
      this.props.campaign.campaign_funds.push({
        amount,
        purpose,
        title,
      });

      this.setState((prevState) => ({ campaign_funds: prevState.campaign_funds }));
    }
  }

  otherFunds(type, purpose, title){
    title = `Request for an Item (${type})`;
    if(type && purpose) {
      this.props.campaign.campaign_funds.push({
        type,
        purpose,
        title
      });
      this.setState((prevState) => ({ campaign_funds: prevState.campaign_funds }));
    }
  }

  handleFundDescription = e => {
    this.setState({fund_description: e.target.value});
  };

  handleFundType = e => {
    this.setState({fund_type: e.target.value});
  };

  handleCampaignType = e => {
    this.setState({ campaign_type: e.target.value });
  };

  deleteFundItemEdit (key) {
    const amount = this.props.campaign.campaign_funds[key].amount;
    remove(this.props.campaign.campaign_funds, fund => fund.amount === amount);
    this.setState((prevState) => ({ campaign_funds: prevState.campaign_funds }))
  };

  deleteFundTypeEdit (key) {
    const type = this.props.campaign.campaign_funds[key].type;
    remove(this.props.campaign.campaign_funds, fund => fund.type === type);
    this.setState((prevState) => ({ campaign_funds: prevState.campaign_funds }))
  };

  uploadWidget = () => {
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
    if (this.state.campaign_description.length >= 300){

      const { id } = this.props;
      const campaign_funds = this.props.campaign.campaign_funds;
      const campaign_image = this.state.campaign_image ? this.state.campaign_image : this.props.campaign.campaign_image;
      const campaign_duration = new Date(new Date().getTime()+(this.state.campaign_duration*24*60*60*1000));
      const {
        campaignOwner_id,
        campaign_type,
        campaign_title,
        campaign_description,
        // campaign_duration,
      } = this.state;

      try {
        const res = await axios.put(`${PATH_BASE}/api/v1/campaign/${id}`, {
          campaignOwner_id,
          campaign_type,
          campaign_title,
          campaign_description,
          campaign_duration,
          campaign_image,
          campaign_funds
        });
        if (res.status === 200) window.location.reload();
      } catch (e) {
        return e
      }
    } else{
      this.setState({ chr_length: 'The campaign description is less than 300 characters'})
    }
  };

  clearCashFunds = () =>{
    this.setState({
      fund_amount: '',
      fund_purpose: ''
    });
  };

  clearOtherFunds = () =>{
    this.setState({
      fund_description: '',
      fund_type: ''
    });
  };

  render() {
    console.log(this.state.campaign_funds, this.props.campaign, 'CF')
    const campaign_funds = this.props.campaign.campaign_funds.map( funds => funds);
    const buttonFloat = {float: 'right'};
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
              sm={10}
              md={10}
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
                          <TextField
                            required
                            fullWidth
                            value={campaign_title}
                            // id="outlined-number"
                            label="Campaign Title"
                            onChange={this.handleTitle}
                            placeholder="Campaign Title"
                            // type="number"
                            className={classes.textField}
                          />

                        </GridItem>

                        {/*Campaign Duration*/}
                        <GridItem xs={12} sm={6} md={6}>
                          <TextField
                            required
                            fullWidth
                            value={campaign_duration}
                            label="Campaign Duration"
                            onChange={this.handleChange('campaign_duration')}
                            placeholder="Duration in days (0 - 45 )"
                            type="number"
                            className={classes.textField}
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
                              onChange={this.handleCampaignType}
                              inputProps={{
                                name: "campaign_type",
                                id: "simple-select"
                              }}>
                              {forEach(selectMenu(classes.selectMenuItem, classes.selectMenuItemSelected),
                                (item, key) => <div key={key}>{item}</div>)}
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
                                      <GridItem  xs={12} sm={12} md={12}>
                                        <div align="center" className={classes.container}>
                                          { map(campaign_funds, (funding, key) => funding.amount ?  <div key={key} align="center">
                                            <p>{funding.amount} {funding.purpose} <span><Button
                                              simple justIcon size="sm"
                                              color="danger"
                                              onClick={() => this.deleteFundItemEdit(key)}
                                              style={{textAlign: 'right', marginTop: 2}}
                                            >
                                                <Close color='error'/>
                                              </Button></span></p>

                                          </div> : null)}
                                        </div>
                                      </GridItem>

                                      {/*Fund Amount*/}
                                      <GridItem xs={12} sm={4} md={4}>
                                        <TextField
                                          // required
                                          fullWidth
                                          value={fund_amount}
                                          label="Cash Funds"
                                          onChange={this.handleFundAmount}
                                          placeholder="Amount in digits e.g 5000"
                                          type="number"
                                          className={classes.textField}
                                          style={{paddingTop: 12}}
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
                                    <Button color="info" round size="sm"
                                      onClick={()=> { this.handleCashFunds(); this.clearCashFunds(); }}
                                      style={buttonFloat}>
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
                                      <GridItem xs={12} sm={12} md={12}>
                                        <div align="center" className={classes.container}>
                                          {map(campaign_funds, (funding, key) => funding.type ? <div key={key} align="center">
                                              <p>{funding.type} {funding.description} <span><Button
                                                simple justIcon size="sm"
                                                color="danger"
                                                onClick={() => this.deleteFundTypeEdit(key)}
                                                className={classes.floatRight}
                                                style={{textAlign: 'right', marginTop: 2}}
                                              >
                                                <Close />
                                              </Button></span></p>
                                            </div> : null
                                          )}
                                        </div>
                                      </GridItem>

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
                                    </GridContainer>
                                    <Button
                                      color="info" round size="sm"
                                      onClick={()=> { this.handleOtherFunds(); this.clearOtherFunds(); }}
                                      style={buttonFloat}>
                                      Add
                                    </Button>
                                  </div>
                                )
                              }
                            ]}
                          />
                        </GridItem>
                      </GridContainer>
                      {/*Funding option ends*/}

                      {/*Campaign Description*/}
                      <p style={{ color: '#FF0000'}}>{this.state.chr_length}</p>
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
                          minLength: 300,
                          placeholder: "Campaign Description"
                        }}
                      />
                    </div>
                  }
                  footer={
                    <div className={classes.signInButton}>
                      <Button type="submit" color="info" className={classes.floatRight} round>
                        Update
                      </Button>
                      <Button color="info" className={classes.floatLeft} round onClick={this.props.onCancelEdit}>
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

export default withStyles(styles)(UpdateCampaignForm);
