import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// sections of this Page
import Banner from "./Sections/Home";
import WhyUs from "./Sections/WhyUs";
import Campaign from "./Sections/HomepageCampaign";
import AboutUs from "./Sections/AboutUs";

import sectionsPageStyle from "assets/jss/material-kit-pro-react/views/sectionsPageStyle";

class HomePage extends React.Component {
  componentDidMount() {
    var href = window.location.href.substring(
      window.location.href.lastIndexOf("#") + 1
    );
    if (window.location.href.lastIndexOf("#") > 0)
      document.getElementById(href).scrollIntoView();
    window.addEventListener("scroll", this.updateView);
    this.updateView();
  }
  componentDidUpdate() {
    var href = window.location.href.substring(
      window.location.href.lastIndexOf("#") + 1
    );
    // document.getElementById(href).scrollIntoView();
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.updateView);
  }
  easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }
  updateView() {
    var contentSections = document.getElementsByClassName("cd-section");
    var navigationItems = document
      .getElementById("cd-vertical-nav")
      .getElementsByTagName("a");

    for (let i = 0; i < contentSections.length; i++) {
      var activeSection =
        parseInt(navigationItems[i].getAttribute("data-number"), 10) - 1;
      if (
        contentSections[i].offsetTop - window.innerHeight / 2 <
          window.pageYOffset &&
        contentSections[i].offsetTop +
          contentSections[i].scrollHeight -
          window.innerHeight / 2 >
          window.pageYOffset
      ) {
        navigationItems[activeSection].classList.add("is-selected");
      } else {
        navigationItems[activeSection].classList.remove("is-selected");
      }
    }
  }
  smoothScroll(target) {
    var targetScroll = document.getElementById(target);
    this.scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
  }
  scrollGo(element, to, duration) {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    var animateScroll = function() {
      currentTime += increment;
      var val = this.easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    }.bind(this);
    animateScroll();
  }
  render() {
    const { classes } = this.props;
    return (
      <div>

        <div className={classes.main}>
          <Banner id="headers" />
          <WhyUs id="whyUs" />
          <Campaign id="campaign" />
          <AboutUs id="aboutUs" />
        </div>
        <nav id="cd-vertical-nav">
          <ul>
            <li>
              <a
                href="#headers"
                data-number="1"
                className="is-selected"
                onClick={e => {
                  var isMobile = navigator.userAgent.match(
                    /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                  );
                  if (isMobile) {
                    // if we are on mobile device the scroll into view will be managed by the browser
                  } else {
                    e.preventDefault();
                    this.smoothScroll("headers");
                  }
                }}
              >
                <span className="cd-dot" />
                <span className="cd-label">Headers</span>
              </a>
            </li>
            <li>
              <a
                href="#whyUs"
                data-number="2"
                className=""
                onClick={e => {
                  var isMobile = navigator.userAgent.match(
                    /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                  );
                  if (isMobile) {
                    // if we are on mobile device the scroll into view will be managed by the browser
                  } else {
                    e.preventDefault();
                    this.smoothScroll("whyUs");
                  }
                }}
              >
                <span className="cd-dot" />
                <span className="cd-label">Why Us</span>
              </a>
            </li>
            <li>
              <a
                href="#campaign"
                data-number="3"
                className=""
                onClick={e => {
                  var isMobile = navigator.userAgent.match(
                    /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                  );
                  if (isMobile) {
                    // if we are on mobile device the scroll into view will be managed by the browser
                  } else {
                    e.preventDefault();
                    this.smoothScroll("campaign");
                  }
                }}
              >
                <span className="cd-dot" />
                <span className="cd-label">Campaign</span>
              </a>
            </li>
            <li>
              <a
                href="#aboutUs"
                data-number="4"
                className=""
                onClick={e => {
                  var isMobile = navigator.userAgent.match(
                    /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                  );
                  if (isMobile) {
                    // if we are on mobile device the scroll into view will be managed by the browser
                  } else {
                    e.preventDefault();
                    this.smoothScroll("aboutUs");
                  }
                }}
              >
                <span className="cd-dot" />
                <span className="cd-label">About Us</span>
              </a>
            </li>

          </ul>
        </nav>
      </div>
    );
  }
}

export default withStyles(sectionsPageStyle)(HomePage);
