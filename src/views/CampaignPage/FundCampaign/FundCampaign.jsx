import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import omit from 'lodash/omit';
import axios from 'axios';

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import Button from "components/CustomButtons/Button.jsx";

import CustomInput from "components/CustomInput/CustomInput.jsx";
import Media from "components/Media/Media.jsx";


import style from "assets/jss/material-kit-pro-react/views/componentsSections/contentAreas.jsx";
import { PATH_BASE } from "../../../constants";

import placeholder from "assets/img/placeholder.jpg";

class FundCampaign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      description: ''
    };
  }

  componenetDidMount(){
    const { match } = this.props;
    const id = match.params.id;
    const res = axios.get(`${PATH_BASE}/api/v1/campaign/:id/fund-options`)
    this.setState({ fund_options: res.data})
  }

  handleComment = e => {
    this.setState({comment: e.target.value});
  };

  handleDescription = e => {
    this.setState({description: e.target.value});
  };

  uploadWidget = () =>{
    window.cloudinary.openUploadWidget({ cloud_name: 'fundit-app', upload_preset: 'fua6wfmh', tags:['fundit']},
      (error, result) => {
        try {
          this.setState({
            image: result[0].url,
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
    axios.defaults.headers.common.Authorization = localStorage.getItem('id_token');
    const { comment, description, image} = this.state;
    const { match, user_id, email } = this.props;
    const id = match.params.id;
    const fund_item = localStorage.getItem('funds');

    try {
      await axios.patch(`${PATH_BASE}/api/v1${window.location.pathname}` , {
        user_id, id, comment, fund_item, description, image, email
      });
      this.props.history.push(`/campaign/${id}`);
    } catch (err) {
      return err
    }
  };

  render() {
    console.log(localStorage.getItem('funds'), 'emailprops')
    const {comment, description} = this.state;
    const topPadding = {paddingTop: 30};
    const { classes} = this.props;
    const rest = omit(this.props, 'staticContext');
    return (
      <div {...rest} className={classes.main} id="contentAreas">
        <h2 className={classes.title} align="center" style={topPadding}>Fund Campaign</h2>
        <br/>
        <div className={classes.space50} />
        <div id="comments">
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={`${classes.mlAuto} ${classes.mrAuto}`}
            >
              <form className={classes.form} onSubmit={this.handleFormSubmit}>
                <Media
                  title={
                    <div>
                      <Button round onClick={this.uploadWidget} size="sm">
                        Upload Image
                      </Button>
                      <h4>{this.state.fileName}.{this.state.format}</h4>
                    </div>
                  }
                  avatar={placeholder}
                  body={
                    <div>
                      <GridContainer>
                        <GridItem xs={12} sm={8} md={8}>
                          <CustomInput
                            id="not-logged-name"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              value: comment,
                              onChange: this.handleComment,
                              placeholder: "Comment if any"
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
                          value: description,
                          onChange: this.handleDescription,
                          multiline: true,
                          rows: 6,
                          placeholder: "Describe the condition of your funding item"
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

export default withStyles(style)(FundCampaign);
