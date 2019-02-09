import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
// import Dashboard from "@material-ui/icons/Dashboard";
import List from "@material-ui/icons/List";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import pillsStyle from "assets/jss/material-kit-pro-react/views/componentsSections/pillsStyle.jsx";

class SectionPills extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="navigation-pills">
            <div className={classes.title}>
              <h2 align="center">Fees & Pricing for Campaigners: How much does FundIt cost?</h2>
            </div>

            {/*<div className={classes.title}>*/}
              {/*<h3>*/}
                {/*<small>With Icons</small>*/}
              {/*</h3>*/}
            {/*</div>*/}
            <GridContainer>
              <GridItem xs={12} sm={12} md={12} lg={12}>
                <NavPills
                  color="info"
                  horizontal={{
                    tabsGrid: { xs: 12, sm: 3, md: 4 },
                    contentGrid: { xs: 12, sm: 9, md: 8 }
                  }}
                  tabs={[
                    {
                      tabButton: "Fees & Pricing for Campaigners: How much does FundIt cost?",
                      tabIcon: Dashboard,
                      tabContent: (
                        <span>
                          <p>
                            It's free to create a campaign! Here's all the information
                            you need about FundIt's fees and pricing.
                            FundIt's platform fee on all funds raised is 5%.
                            It is free to sign up and create a campaign and fees are deducted
                            from the funds you actually raise (not the goal you set).
                          </p>
                          <br />
                          <p>

In addition, Stripe (credit card processor) charges a processing fee of 3% + 0.30 per transaction. There may also be an additional wire transfer fee, depending on your currency and bank account location.
Funds sent to a bank account located outside the US are charged a $25 International Transfer Fee (see below). The International Transfer Fee, along with all applicable platform and payment processing fees, will be deducted from each disbursement we send to you.

                          </p>
                          <br />
                          <p>
                            Please note that your bank may charge additional fees such as currency conversion, wire fees, etc. FundIt always recommends you contact your bank before entering your bank account information on your campaign. FundIt is not responsible for fees incurred by the campaigner as a result of a disbursement- including currency conversion, processing fees, or other bank/financial institution fees.
There are no fees applied to Fixed Funding campaigns that don't meet their goal - all backers are refunded within 5 business days from the campaign's end date.
No fees are applied to contributions refunded through FundIt. The full amount is refunded to the backer.
                          </p>
                        </span>
                      )
                    },
                    {
                      tabButton: "How do I choose my bank account country, country of legal residence, and currency?",
                      tabIcon: Dashboard,
                      tabContent: (
                        <span>
                          <h2>
                            How do I choose my bank account country, country of legal residence, and currency?
                          </h2>
                          <br />
                          <h3>
                            What is the difference between "country of legal residence" and "bank account country?"
                          </h3>
                          <br/>
                          <p>
                            Your "country of legal residence" should be the country where you legally reside.
                            You would have a physical address there, and receive physical mail from the government,
                            your bank, utility companies, etc. You might also pay bills and taxes at this location.
                            Your bank account country is the country where you opened your bank account.
                            Please keep in mind that it is possible to have a currency account at your bank
                            different from the main currency in your country. For example, some Canadians
                            may have opened US dollar (USD) accounts at their Canadian bank. However, they
                            should be careful to still select "Canada" as the bank account country in these situations.
                            Typically, the bank account country and country of legal residence will be the same.
                          </p>
                          <h3>
                            What if I'm a foreign national, exchange student, or on a visa?
                          </h3>
                          <br/>

                        </span>
                      )
                    }
                    ,
                    {
                      tabButton: "How will I receive my funds?",
                      tabIcon: Dashboard,
                      tabContent: (
                        <span>
                          <h3>
                            How will I receive my funds?
                          </h3>
                          <p>
                            We definitely understand there may be nuances around your "country of legal residence."
                            If you’re currently living in a location legally, and have a bank account there,
                            then you can choose to select that location as your legal country. For example,
                            you might be a French citizen currently studying at a university in the United States
                            on a student visa. In this case, it's okay to select "United States."
                            What if I live in a British Crown Dependency, special municipality, or other outlying territory?
                            If you are based in a British Crown Dependency (Jersey, Guernsey, or Isle of Man), you will
                            not be able to raise funds in Great British Pounds (GBP). You should choose USD as your
                            currency and enter your country as United Kingdom.
                            If you are based in any other special municipality or outlying territory, please choose
                            USD as your campaign's currency and enter the country your territory is under as your country of residence.
                          </p>
                        </span>
                      )
                    },
                    {
                      tabButton: "Should I choose individual, business, nonprofit or other? And what do I enter for my tax ID?",
                      tabIcon: Dashboard,
                      tabContent: (
                        <span>
                          <h3>
                            Should I choose individual, business, nonprofit or other? And what do I enter for my tax ID?
                          </h3>
                          <p>
                            You should choose the funds recipient that's right for your project's purpose.
                            If you're raising funds for your business, make sure to select "business."
                            If you're raising funds for personal purposes, such as for college tuition,
                            you should choose "individual." "Other" is often used for something that doesn't
                            fall into a strictly business or nonprofit category, such as a school or church.
                            In the Tax ID/EIN field, you should enter the number given to you by your government
                            when you registered your organization, business, etc.
                            Please note the funds recipient and tax ID can't be changed after you go live.
                            Which currency should I choose?
                            The currency you choose depends on the location of your bank account. We recommend the following combinations:
                            AUD: bank account in Australia
                            <br/>
                            CAD: bank account in CanadaEUR:
                            <br/>
                            bank account in Austria, Belgium, Denmark, Germany, Finland, France, Republic of Ireland,
                            Italy, Luxembourg, Netherlands, Norway, Portugal, Spain, Sweden, Switzerland, or the UK
                            <br/>
                            GBP: bank account in the UK
                            Please note, British Crown Dependencies (Jersey, Guernsey or Isle of Man) are not
                            supported under GBP and should choose USD
                            USD: bank account in the United States or any other location (please note that if you choose
                            "United States," you must have a bank account in the US; other locations are supported via
                            international wire transfer [eg. USD to a Chinese bank account])
                          </p>
                        </span>
                      )},
                    {
                      tabButton: "What can I change after I launch my project?",
                      tabIcon: Dashboard,
                      tabContent: (
                        <span>
                          <h3>
                            What can I change after I launch my project?
                          </h3>
                          <p>

After you launch your campaign, you cannot, under any circumstance, change the following fields:

Currency
Country of legal residence
Bank account country
Business name
Business tax ID/EIN
Legal first and last name
Date of Birth
Please make sure you're careful about selecting those above fields before launching. As they can't be changed after you go live, if any changes need to be made, we recommend refunding any backers, and starting a new project. You'll be notified of this before you launch:



Find out more about what you can and can’t edit after launching in our related article.
                          </p>
                        </span>
                      )},
                    {
                      tabButton: "I’m getting a warning. What does this mean?",
                      tabIcon: Dashboard,
                      tabContent: (
                        <span>
                          <h3>
                            I’m getting a warning. What does this mean?
                          </h3>
                          <p>
You're seeing a warning because you've chosen a currency and bank account country that we and our payment processor Stripe support, but you should be aware of how certain combinations of currency, legal residency, and bank account country will affect your campaign. This warning won't prevent you from launching your project. For more on currency selection and the warning you’re receiving, please see our related article here.
                          </p>
                        </span>
                      )},
                    {
                      tabButton: "What does this error mean?",
                      tabIcon: Dashboard,
                      tabContent: (
                        <span>
                          <h3>
                            What does this error mean?
                          </h3>
                          <p>
Stripe, our payment processor, has certain capabilities and restrictions regarding which currencies they can send to which bank account locations. Sometimes, the currency you want might not be available in your bank's location. Typically, you’ll need to select the primary currency used in the country where your bank account is located [ex. CAD in Canada, EUR in France], or USD for any location in one of the more than 200 countries and regions supported by FundIt. Until you clear the error on your campaign, you won’t be able to launch. For more on errors regarding your currency and bank account, please see our related Help Center Article.
                          </p>
                        </span>
                      )}
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(pillsStyle)(SectionPills);
