import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import style from "assets/jss/material-kit-pro-react/views/componentsSections/contentAreas.jsx";
import Accordion from "components/Accordion/Accordion.jsx";

class FAQ extends React.Component {
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
    const { classes, ...rest } = this.props;

    return (
      <div {...rest} className="cd-section" id="contentAreas">
        <div className={classes.space50} />
        <div id="comments">
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={`${classes.mlAuto} ${classes.mrAuto}`}
            >
              <div>
                <h3 className={`${classes.title} ${classes.textCenter}`}>
                  Frequently Asked Questions
                </h3>
                <Accordion
                  active={0}
                  collapses={[
                    {
                      title: "How can I contact an Admin?",
                      content:
                        "You can send a message to the admin by clicking the Contact link on your Contribution Details page. You can also reach out through the campaign page by doing the following:\n" +
                        "\n"
                    },
                    {
                      title: "How do I request a refund?",
                      content:
                        "You can refund eligible contributions by following these steps:\n" +
                        "\n" +
                        "Login to your FundIt account (if necessary, you can set a password here) and click your name, in the top right corner\n" +
                        "Select 'My Contributions'\n" +
                        "Find the contribution you'd like to refund and click 'View Contribution Details'\n" +
                        "Click the 'Request Refund' button\n" +
                        "Once you've initiated the refund, it can take up to 5 business days until the refund is reflected on your account statement, depending on the policy of your bank or financial institution."
                    },
                    {
                      title: "Is my contribution tax deductible?",
                      content:
                        "Contributing to a crowdfunding campaign is not the same as donating to a charity, and most contributions are not eligible to receive a tax receipt. The only contributions which may be tax-deductible are if if the specific campaign to which you contributed is run by or fiscally sponsored by a 501(c)(3) registered nonprofit. Most campaigns found on FundIt are not run by nonprofit organizations or through a fiscal sponsor.\n" +
                        "\n" +
                        "However, if you'd like to determine if the campaign to which you contributed is run by a fiscally sponsored organization and is able to issue tax receipts, please take a moment to review the campaign's story to see if any nonprofit is involved in the running of the campaign, or if they otherwise mention tax-receipts. If so, we recommend that you contact the campaign owner directly to find out if the campaign you are contributing to has been fiscally sponsored by a nonprofit organization.\n" +
                        "\n" +
                        "Any tax receipts would come from the campaign's fiscal sponsor directly, rather than from FundIt.\n" +
                        "\n"
                    }
                  ]}
                />
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(style)(FAQ);
