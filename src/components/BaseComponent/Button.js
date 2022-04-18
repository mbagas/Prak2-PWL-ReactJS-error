import React from "react";
import { createUseStyles } from "react-jss";
import { COLOR_THEME } from "../../utils/theme";

export const Button = () => {
  const styles = style();
  return <button className={styles.button}>Login</button>;
};

const style = createUseStyles({
  button: {
    backgroundColor: COLOR_THEME.primary,
  },
});

export default Button;
