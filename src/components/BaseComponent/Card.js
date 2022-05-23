import React from "react";
import { createUseStyles } from "react-jss";
import { COLOR_THEME } from "../../utils/theme";

export const Card = (props) => {
  const styles = style();

  const comment = (id) => {
    console.log(id);
  };
  return (
    <div className={styles.card} onClick={() => console.log("asdasd")}>
      {/* <img src="img_avatar.png" alt="Avatar" style="width:100%"> */}
      asd
      <div className={styles.container} onClick={() => console.log("asdasd")}>
        <h4 onClick={() => console.log("asdasd")}>
          <b>{props.name}</b>
        </h4>
        <p>Architect & Engineer</p>
        <button onClick={() => console.log("asdasd")}>asdasd</button>
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
