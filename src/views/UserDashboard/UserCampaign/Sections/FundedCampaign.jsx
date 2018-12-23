import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Table from "components/Table/Table.jsx";

import style from "assets/jss/material-kit-pro-react/views/componentsSections/contentAreas.jsx";
import {bindActionCreators} from "redux";
import fetchFundedCampaign from "../../../../actions/userFundedCampaign";
import connect from "react-redux/es/connect/connect";
import map from "lodash/map";


class FundedCampaign extends React.Component {

  componentDidMount() {
    this.props.fetchFundedCampaign()
  }

  render() {
    const { classes, user_funded, ...rest } = this.props;
    //loop through user_info to add funded campaign details to designated place holders
    console.log(user_funded, 'UI FC')
    return (
      <div {...rest} className="cd-section" id="contentAreas">
        {/*<h2>Funded Campaign</h2>*/}
        <div id="tables">
          <GridContainer>
            <GridItem
              xs={12}
              sm={10}
              md={8}
              // className={`${classes.mrAuto} ${classes.mlAuto}`}
            >
              <Table
                tableHead={[
                  "#",
                  "Date",
                  "Campaign Name",
                  "Funded Item",
                  // "% Equity",
                  // "Status"
                ]}
                // tableData={[
                //   [
                //     "1",
                //     "21-05-18",
                //     "Special One",
                //     "#50000",
                //     // "2013",
                //     // "€ 99,225",
                //     // 5,
                //     // "Ongoing"
                //     // fillButtons
                //   ],
                //   ["2", "12-07-18", "Funny One", "Delivery Bus"],
                //   [
                //     "3",
                //     "07-09-18",
                //     "Great One",
                //     "Building Equipment",
                //     // "2010",
                //     // "€ 92,144",
                //     // 2,
                //     // "Ended"
                //     // simpleButtons
                //   ],
                //   // [
                //   //   "4",
                //   //   "Mike Monday",
                //   //   "Marketing",
                //   //   "2013",
                //   //   "€ 49,990",
                //   //   3,
                //   //   "Ongoing"
                //   //   // roundButtons
                //   // ],
                //   // [
                //   //   "5",
                //   //   "Paul Dickens",
                //   //   "Communication",
                //   //   "2015",
                //   //   "€ 69,201",
                //   //   // fillButtons
                //   // ]
                // ]}
                tableData={map(user_funded.campaign_approval_funds, ((funded, key) => {
                  return [
                    key + 1,
                    // funded.funded_date,
                    user_funded.campaign_title,
                    // funded.campaign-approval_funds.ma
                  ]
                }))}
              />


            </GridItem>
          </GridContainer>

        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user_funded: state.user_funded
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchFundedCampaign}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(FundedCampaign));
