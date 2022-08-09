import React from "react";
import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <div>
      <MainNavigation>
        <main className={classes.main}>{props.children}</main>
      </MainNavigation>
    </div>
  );
};

export default Layout;
