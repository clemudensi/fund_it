import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react component used to create nice image meadia player
import ImageGallery from "react-image-gallery";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Parallax from "components/Parallax/Parallax.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Accordion from "components/Accordion/Accordion.jsx";
import Campaign from "./Campaign";
import Card from 'views/ComponentsPage/Sections/SectionCards'

import productStyle from "assets/jss/material-kit-pro-react/views/productStyle.jsx";

// images
import product1 from "assets/img/examples/product1.jpg";
import product2 from "assets/img/examples/product2.jpg";
import product3 from "assets/img/examples/product3.jpg";
import product4 from "assets/img/examples/product4.jpg";


class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorSelect: "0",
      sizeSelect: "0"
    };
  }
  handleSelect = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes } = this.props;
    const images = [
      {
        original: product3,
        thumbnail: product3
      },
      {
        original: product4,
        thumbnail: product4
      },
      {
        original: product1,
        thumbnail: product1
      },
      {
        original: product2,
        thumbnail: product2
      }
    ];
    return (
      <div className={classes.productPage}>
        <Parallax
          image={require("assets/img/bg6.jpg")}
          filter="rose"
          className={classes.pageHeader}
        >
          <div className={classes.container}>
          </div>
        </Parallax>
        <div className={classNames(classes.section, classes.sectionGray)}>
          <div className={classes.container}>
            <div className={classNames(classes.main, classes.mainRaised)}>
              <GridContainer>
                <GridItem md={6} sm={6}>
                  <ImageGallery
                    showFullscreenButton={false}
                    showPlayButton={false}
                    startIndex={3}
                    items={images}
                  />
                </GridItem>
                <GridItem md={6} sm={6}>
                  <h2 className={classes.title}>Becky Silk Blazer</h2>
                  <h3 className={classes.mainPrice}>$335</h3>
                  <Accordion
                    active={0}
                    activeColor="rose"
                    collapses={[
                      {
                        title: "Description",
                        content: (
                          <p>
                            Eres' daring 'Grigri Fortune' swimsuit has the fit
                            and coverage of a bikini in a one-piece silhouette.
                            This fuchsia style is crafted from the label's
                            sculpting peau douce fabric and has flattering
                            cutouts through the torso and back. Wear yours with
                            mirrored sunglasses on vacation.
                          </p>
                        )
                      },
                      {
                        title: "Designer Information",
                        content: (
                          <p>
                            An infusion of West Coast cool and New York
                            attitude, Rebecca Minkoff is synonymous with It girl
                            style. Minkoff burst on the fashion scene with her
                            best-selling 'Morning After Bag' and later expanded
                            her offering with the Rebecca Minkoff Collection - a
                            range of luxe city staples with a \"downtown
                            romantic\" theme.
                          </p>
                        )
                      },
                      {
                        title: "Details and Care",
                        content: (
                          <ul>
                            <li>
                              Storm and midnight-blue stretch cotton-blend
                            </li>
                            <li>
                              Notch lapels, functioning buttoned cuffs, two
                              front flap pockets, single vent, internal pocket
                            </li>
                            <li>Two button fastening</li>
                            <li>84% cotton, 14% nylon, 2% elastane</li>
                            <li>Dry clean</li>
                          </ul>
                        )
                      }
                    ]}
                  />
                </GridItem>
              </GridContainer>
            </div>
            <div className={classNames(classes.features, classes.textCenter)}>
            </div>
            <div className={classes.relatedProducts}>
              <h3 className={classNames(classes.title, classes.textCenter)}>
                You may also be interested in:
              </h3>
              <Campaign/>
              <Card/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductPage);
