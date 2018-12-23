import React from 'react';
// core components
import NavPills from "components/NavPills/NavPills.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Add from "@material-ui/icons/Add"
import map from 'lodash/map'
import AddComments from "../../AddComments/AddComments";
import withStyles from "@material-ui/core/styles/withStyles";
import style from "assets/jss/material-kit-pro-react/views/componentsSections/contentAreas";

class CampaignInfo extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      addComment: false
    }
  }

  onClickAddComment = () => {
    this.setState({addComment: true})
  };

  onClickCancelComment = () => {
    this.setState({addComment: false})
  };

  render(){
    const { classes, info, comments, user_id, campaign_id } = this.props;
    return (
      <NavPills
        color="info"
        tabs={[
          {
            tabButton: "Details",
            tabContent: (
              <span>
              <p>
                {info}
              </p>
            </span>
            )
          },
          {
            tabButton: "Comments",
            tabContent: (
              <span>
                <Button onClick={this.onClickAddComment} className={classes.floatRight} color="info" size="sm" round>
                  <Add color="inherit" />
                </Button>
                <br/>
                {this.state.addComment ? <AddComments
                  user_id={user_id} campaign_id={campaign_id} onClickCancelComment={this.onClickCancelComment}/> : null
                }
                <br/>
                <div>
                  {map(comments, (comment, key) => <div key={key}><p>{comment.comment_body}</p></div>)}
                </div>
            </span>
            )
          },
          {
            tabButton: "Backers",
            tabContent: (
              <span>
              <p>
                Completely synergize resource taxing relationships
                via premier niche markets. Professionally cultivate
                one-to-one customer service with robust ideas.{" "}
              </p>
              <br />
              <p>
                Dynamically innovate resource-leveling customer
                service for state of the art customer service.
              </p>
            </span>
            )
          }
        ]}
      />
    );
  }
}

export default withStyles(style)(CampaignInfo);
