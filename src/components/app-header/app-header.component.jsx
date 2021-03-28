import React, { useState, useEffect } from "react";
import { companyLogo } from "../../images";
import { AppHeaderStyles } from "./app-header.styles";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import poweredByGiphy from "../../images/powered-by-giphy.png";

/*
Notes:
   - If my location is "x" display matching page Title.
   - can use either NavLink or history.push for navigation.
   - only display the back button if you are on the collection page
*/

const AppHeader = (props) => {
  const { history, location } = props;
  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setPageTitle("Collection");
    } else {
      setPageTitle("Search");
    }
  }, [location.pathname]);

  return (
    <AppHeaderStyles>
      <div className="header-container">
        <div className="left-group">
          <img
            src={companyLogo}
            alt="Company logo"
            height="60px"
            onClick={() => history.push("/")}
          />
          <img src={poweredByGiphy} alt="powered by giphy" />
        </div>
        <h2 className="page-title">{pageTitle}</h2>
        <div className="right-group">
          {pageTitle === "Collection" ? (
            <NavLink className="link" to="/">
              Back
            </NavLink>
          ) : null}
        </div>
      </div>
    </AppHeaderStyles>
  );
};

export default withRouter(AppHeader);
