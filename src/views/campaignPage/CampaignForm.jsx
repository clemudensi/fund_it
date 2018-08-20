import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

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

class SectionContentAreas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpleSelect: "",
    };
  }

  handleSimple = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  uploadWidget = () =>{
    window.cloudinary.openUploadWidget({ cloud_name: 'fundit-app', upload_preset: 'fua6wfmh', tags:['fundit']},
      function(error, result) {
        console.log(result);
      });
  };

  render() {
    const { classes, ...rest } = this.props;
    const topPadding = {paddingTop: 30};
    return (
      <div className={classes.main}>
        <h2 className={classes.title} align="center" style={topPadding}>Create Campaign</h2>
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
              <Media
                avatar={placeholder}
                body={
                  <div>
                    <GridContainer>
                      <GridItem xs={12} sm={6} md={6}>
                        <CustomInput
                          id="not-logged-name"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            placeholder: "Campaign Title"
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={6} md={6}>
                        <CustomInput
                          id="not-logged-email"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            placeholder: "Duration"
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
                            value={this.state.simpleSelect}
                            onChange={this.handleSimple}
                            inputProps={{
                              name: "simpleSelect",
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
                              value="2">
                              Charity
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="3">
                              Enterprise
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="4">
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
                        multiline: true,
                        rows: 6,
                        placeholder: "Campaign Description"
                      }}
                    />
                  </div>
                }
                footer={
                  <div className={classes.signInButton}>
                    <Button color="info" className={classes.floatRight} round>
                      Send
                    </Button>
                  </div>
                }
              />
            </GridItem>
          </GridContainer>
          <div className="upload">
            <input type="button" value="click me" onClick={this.uploadWidget}/>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(style)(SectionContentAreas);
