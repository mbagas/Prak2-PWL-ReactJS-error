import React from "react";
import { createUseStyles } from "react-jss";
import { NavBar } from "../../components";

export const PageLayout = (props) => {
  const styles = style();
  return (
    <React.Fragment>
      <NavBar />
      <div className={styles.container}>{props.children}</div>
    </React.Fragment>
  );
};

const style = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    margin: "0 2rem",
    alignContent: "center",
    justifyContent: "center",
    flex: 1,
  },
});

export default PageLayout;
