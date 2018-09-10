import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Table from "components/Table/Table.jsx";

import style from "assets/jss/material-kit-pro-react/views/componentsSections/contentAreas.jsx";


class AllUsers extends React.Component {
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
                  "Name",
                  "Campaign Name",
                  "Date",
                  "Amount",
                  "% Equity",
                  "Status"
                ]}
                tableData={[
                  [
                    "1",
                    "Andrew Mike",
                    "Develop",
                    "2013",
                    "€ 99,225",
                    5,
                    "Ongoing"
                    // fillButtons
                  ],
                  ["2", "John Doe", "Design", "2012", "€ 89,241"],
                  [
                    "3",
                    "Alex Mike",
                    "Design",
                    "2010",
                    "€ 92,144",
                    2,
                    "Ended"
                    // simpleButtons
                  ],
                  [
                    "4",
                    "Mike Monday",
                    "Marketing",
                    "2013",
                    "€ 49,990",
                    3,
                    "Ongoing"
                    // roundButtons
                  ],
                  [
                    "5",
                    "Paul Dickens",
                    "Communication",
                    "2015",
                    "€ 69,201",
                    // fillButtons
                  ]
                ]}
                customCellClasses={[
                  classes.textCenter,
                  classes.textRight,
                  classes.textRight
                ]}
                customClassesForCells={[0, 4, 5]}
                customHeadCellClasses={[
                  classes.textCenter,
                  classes.textRight,
                  classes.textRight
                ]}
                customHeadClassesForCells={[0, 4, 5]}
              />


            </GridItem>
          </GridContainer>

        </div>
      </div>
    );
  }
}

export default withStyles(style)(AllUsers);
