import React from 'react';
// core components
import NavPills from "components/NavPills/NavPills.jsx";
import UserCampaign from "../../../containers/UserCampaigns";
import FundedCampaign from "./Sections/FundedCampaign";
import CampaignForm from "./Sections/CreateCampaign";

const padTop = {paddingTop: 30};
const  UserCampaignSection = () =>{
  return (
    <div style={padTop}>
      <NavPills
        color="info"
        tabs={[
          {
            tabButton: "Create Campaign",
            tabContent: (
              <CampaignForm />
            )
          },
          {
            tabButton: "User Campaigns",
            tabContent: (
              <UserCampaign/>
            )
          },
          {
            tabButton: "Funded Campaigns",
            tabContent: (
              <FundedCampaign/>
            )
          }
        ]}
      />
    </div>
  );
};

export default UserCampaignSection;
