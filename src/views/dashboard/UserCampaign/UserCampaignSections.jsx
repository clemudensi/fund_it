import React from 'react';
// core components
import NavPills from "components/NavPills/NavPills.jsx";
import UserCampaign from "./Sections/UserCampaign";
import FundedCampaign from "./Sections/FundedCampaign";

const  UserCampaignSection = () =>{
  return (
    <NavPills
      color="info"
      tabs={[
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
  );
};

export default UserCampaignSection;
