import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Table from '@material-ui/core/Table';

import style from "assets/jss/material-kit-pro-react/views/componentsSections/contentAreas.jsx";
import {bindActionCreators} from "redux";
import fetchAllUsersInfo from "actions/allUsersInfo";
import connect from "react-redux/es/connect/connect";
import omit from "lodash/omit";
import map from 'lodash/map'
import TableCell from "@material-ui/core/TableCell/TableCell";
import Paper from "@material-ui/core/Paper/Paper";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableBody from "@material-ui/core/TableBody/TableBody";
import {Link} from "react-router-dom";

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#00acc1",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

class AllUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // checked: [1, 3, 5]
    };
  }

  componentWillMount(){
    this.props.fetchAllUsersInfo();
  }

  render() {
    const rest = omit(this.props, 'fetchAllUsersInfo');
    const { classes, all_users } = this.props;
    // console.log(all_users.map(campaign => campaign.local), 'All users info')
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell>#</CustomTableCell>
              <CustomTableCell numeric>Name</CustomTableCell>
              <CustomTableCell numeric>Email</CustomTableCell>
              <CustomTableCell numeric>Total Campaign</CustomTableCell>
              {/*<CustomTableCell numeric>Comments</CustomTableCell>*/}
            </TableRow>
          </TableHead>
          <TableBody>
            {map(all_users, (campaign, key) => {
              return (
                <TableRow className={classes.row} key={key}>
                  <CustomTableCell numeric>
                    {key + 1}
                  </CustomTableCell>
                  <CustomTableCell numeric>
                    {`${campaign.local.firstName} ${campaign.local.lastName}`}
                  </CustomTableCell>
                  <CustomTableCell numeric>
                    {campaign.local.email}
                  </CustomTableCell>
                  <CustomTableCell numeric>
                    {campaign.user_info.map(amount => amount.campaign_owned).length}
                  </CustomTableCell>

                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

function mapStateToProps(state) {
  return {
    all_users: state.all_users
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchAllUsersInfo}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AllUsers));
