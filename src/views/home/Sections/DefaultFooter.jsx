import React from "react";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Footer from "components/Footer/Footer.jsx";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui icons
import styles from "assets/jss/material-kit-pro-react/views/ecommerceStyle.jsx";

class DefaultFooter extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Footer
          theme="dark"
          fixed
          content={
            <div>
              <div className={classes.left}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="/"
                      className={classes.block}
                    >
                      Home
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="/faq"
                      onClick={e => e.preventDefault()}
                      className={classes.block}
                    >
                      FAQ
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="/policy"
                      onClick={e => e.preventDefault()}
                      className={classes.block}
                    >
                      Terms & Conditions
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="/contact"
                      className={classes.block}
                    >
                      Contact us
                    </a>
                  </ListItem>
                </List>
              </div>
              <div className={classes.right}>
                Copyright &copy; {1900 + new Date().getYear()}{" "}
                <a
                  href="https://www.fundit.com"
                  className={classes.aClasses}
                >
                  FundIt
                </a>{" "}
                All Rights Reserved.
              </div>
            </div>
          }
        >
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <h5>What We Hope To Achieve</h5>
              <p>
                FundIt is a startup that creates a platform for people
                seeking opportunities and business owners alike.{" "}
              </p>
              <p>
                We love the web and care deeply for how users interact with a
                digital product. We power businesses and individuals to create
                better looking web projects around the world.{" "}
              </p>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <h5>Social Feed</h5>
              <div className={classes.socialFeed}>
                <div>
                  <i className="fab fa-twitter" />
                  <p>Follow us on twitter and spread this great opportunity.</p>
                </div>
                <div>
                  <i className="fab fa-facebook" />
                  <p>Tag us share and like us on facebook</p>
                </div>
                <div>
                  <i className="fab fa-instagram" />
                  <p>
                    Post your images of your ideas and concept on our
                    Instagram page.
                  </p>
                </div>
              </div>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <h5>Contact Us</h5>
              <div className={classes.socialFeed}>
                <div>
                  <p>Do you have questions and Inquiry?</p>
                </div>
                <div>
                  <p>Send us an email at <span><strong>support@fundit.com</strong></span></p>
                </div>
              </div>
            </GridItem>
          </GridContainer>
        </Footer>
      </div>
    );
  }
}

export default withStyles(styles)(DefaultFooter);
