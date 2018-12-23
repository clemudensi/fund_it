import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import map from 'lodash/map';

// core components
import Accordion from "components/Accordion/Accordion";
import Button from "components/CustomButtons/Button.jsx";

import productStyle from "assets/jss/material-kit-pro-react/views/productStyle";

class CampaignFundTypes extends React.Component {

  fundCampaign (title) {
    const { id } = this.props;
    localStorage.setItem('funds', title)
    window.location.replace(`/campaign/${id}/fund/${title}`)
  };

  render() {
    const { classes, id, title } = this.props;
    return (
      <div>
        <h2 className={classes.title}>{title}</h2>
        <Accordion
          // active={0}
          activeColor="info"
          collapses={
            map(this.props.campaign_funds, type => (
              {
                title: type.title,
                content: (
                  <div>
                    {type.purpose}
                    <Button color="info"
                            onClick={()=>this.fundCampaign(type.title)} className={classes.floatRight} round >
                      fund
                    </Button>
                  </div>
                )
              }))
            }
        />
      </div>
    );
  }
}

export default withStyles(productStyle)(CampaignFundTypes);
