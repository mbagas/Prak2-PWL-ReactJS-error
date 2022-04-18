import React from "react";
import { createUseStyles } from "react-jss";
import { COLOR_THEME } from "../../utils/theme";

export const Card = (props) => {
  const styles = style();
  return (
    <div className={styles.card}>
      {/* <img src="img_avatar.png" alt="Avatar" style="width:100%"> */}
      <image />
      <div className={styles.container}>
        <h4>
          <b>{props.name}</b>
        </h4>
        <p>Architect & Engineer</p>
      </div>
    </div>
  );
};

const style = createUseStyles({
  container: {
    padding: "2px 16px",
    backgroundColor: "white",
  },
  card: {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    backgroundColor: "white",
    flex: "1 0 20%",
    margin: "1rem",
    padding: "1rem",
  },
});

export default Card;
