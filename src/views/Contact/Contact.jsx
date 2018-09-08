import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import omit from 'lodash/omit';
// @material-ui/core icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import Button from "components/CustomButtons/Button.jsx";

import CustomInput from "components/CustomInput/CustomInput.jsx";
import Media from "components/Media/Media.jsx";


import style from "assets/jss/material-kit-pro-react/views/componentsSections/contentAreas.jsx";

import placeholder from "assets/img/placeholder.jpg";

class SectionContentAreas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [1, 3, 5]
    };
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    this.setState({
      checked: newChecked
    });
  }
  render() {
    const topPadding = {paddingTop: 30};
    const { classes} = this.props;
    const rest = omit(this.props, 'staticContext');
    return (
      <div {...rest} className={classes.main} id="contentAreas">
        <h2 className={classes.title} align="center" style={topPadding}>Contact Us!</h2>
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
                        <CustomInput
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            placeholder: "Your Email"
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={4} md={4}>
                        <CustomInput
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
