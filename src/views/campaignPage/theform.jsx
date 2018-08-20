import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Checkbox from "@material-ui/core/Checkbox";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/core icons
import Person from "@material-ui/icons/Person";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";
import Remove from "@material-ui/icons/Remove";
import Add from "@material-ui/icons/Add";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Reply from "@material-ui/icons/Reply";
import Favorite from "@material-ui/icons/Favorite";
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
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div className={classes.main}>
        <h2 className={classes.title} align="center">Contact Us!</h2>
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
                      <GridItem xs={12} sm={4} md={4}>
                        <CustomInput
                          id="not-logged-name"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            placeholder: "Your Name"
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={4} md={4}>
                        <FormControl
                          fullWidth
                          className={classes.selectFormControl}>
                          <InputLabel
                            htmlFor="simple-select"
                            className={classes.selectLabel}>
                            Single Value Select
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
                              Multiple Select
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="2">
                              Paris
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="3">
                              Bucharest
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="4">
                              Rome
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </GridItem>
                      <GridItem xs={12} sm={4} md={4}>
                        <CustomInput
                          id="not-logged-email"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            placeholder: "Subject"
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
                        placeholder: " Send us feedback and enquiries"
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
        </div>
      </div>
    );
  }
}

export default withStyles(style)(SectionContentAreas);
