import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Link} from "react-router-dom";
import Button from "../../../components/CustomButtons/Button";
import Cancel from "@material-ui/icons/Cancel";
import Check from "@material-ui/icons/Check";
import axios from "axios";
import {bindActionCreators} from "redux";
import fetchApprovalFunds from "actions/approval_funds";
import connect from "react-redux/es/connect/connect"
import { PATH_BASE } from "../../../constants";

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


class FundingRequest extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      campaign_status: true,
      campaign_stop: false,
      add_comment: false,
      status: false
    };
  }

  componentWillMount(){
    this.props.fetchApprovalFunds();
  }

  componentWillUpdate(prevProps, prevState){
    try {
      if (prevState.status !== this.state.status) {
        this.props.fetchApprovalFunds();
      }
    }catch (err) {
      return err
    }
  }

  componentWillUnmount(){
    this.props.fetchApprovalFunds();
  }

  // async startCampaign(campaign_id){
  //   const { campaign_status, status } = this.state;
  //   this.setState((prevState => ({
  //       status: !prevState.status
  //     })
  //   ));
  //   try {
  //     await axios.patch(`${PATH_BASE}/api/v1/campaign/${campaign_id}/start`, { campaign_status })
  //   } catch (err) {
  //     return err
  //   }
  // };

  render(){
    const { classes, approval_funds } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell>Image</CustomTableCell>
              <CustomTableCell numeric>Campaign Name</CustomTableCell>
              <CustomTableCell numeric>Description</CustomTableCell>
              <CustomTableCell numeric>Funding Request</CustomTableCell>
              {/*<CustomTableCell numeric>Comments</CustomTableCell>*/}
            </TableRow>
          </TableHead>
          <TableBody>
            {approval_funds.map((campaign, key) => {
              return (
                <TableRow className={classes.row} key={key}>
                  <CustomTableCell numeric>
                    <img src={`${campaign.campaign_image}`} alt="Campaign" style={{width: 150, height: 120}}/>
                  </CustomTableCell>
                  <CustomTableCell numeric>
                    <Link to={`/campaign/${campaign._id}/funds-request`}>{campaign.campaign_title}</Link>
                  </CustomTableCell>
                  <CustomTableCell numeric>
                    {campaign.campaign_description}
                  </CustomTableCell>
                  <CustomTableCell numeric>
                    {campaign.campaign_approval_funds.length}
                  </CustomTableCell>
                  {/*<CustomTableCell numeric>*/}
                    {/*{campaign.campaign_status === true ?*/}
                      {/*<Button color="transparent" onClick={()=>this.stopCampaign(campaign._id)}><Cancel color="error"/></Button> :*/}
                      {/*<Button color="transparent" onClick={()=>this.startCampaign(campaign._id)}><Check color="primary"/></Button>}*/}
                  {/*</CustomTableCell>*/}
                  {/*<CustomTableCell component="th" scope="row">*/}
                    {/*{this.state.add_comment ? <GridItem >*/}
                      {/*<CustomInput*/}
                        {/*formControlProps={{*/}
                          {/*fullWidth: true*/}
                        {/*}}*/}
                        {/*inputProps={{*/}
                          {/*value: this.state.admin_comment,*/}
                          {/*onChange: this.handleAdminComment,*/}
                          {/*placeholder: "Admin Comment"*/}
                        {/*}}*/}
                      {/*/>*/}
                      {/*<Button*/}
                        {/*className={classes.floatRight}*/}
                        {/*color="info"*/}
                        {/*onClick={()=>this.addComment(campaign._id)}*/}
                        {/*size="sm"*/}
                        {/*round*/}
                      {/*>*/}
                        {/*<Check/>*/}
                      {/*</Button>*/}
                      {/*<Button*/}
                        {/*color="info"*/}
                        {/*size="sm"*/}
                        {/*onClick={()=>this.handleCancelComment(campaign._id)}*/}
                        {/*round*/}
                      {/*>*/}
                        {/*<Cancel/></Button>*/}
                    {/*</GridItem> : <Button*/}
                      {/*color="info"*/}
                      {/*size="sm"*/}
                      {/*onClick={()=>this.handleAddComment(campaign._id)}*/}
                      {/*round*/}
                    {/*>*/}
                      {/*<Plus /></Button>*/}
                    {/*}*/}
                  {/*</CustomTableCell>*/}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

FundingRequest.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    approval_funds: state.approval_funds
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchApprovalFunds}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(FundingRequest));
