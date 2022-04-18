import React from "react";
import { createUseStyles } from "react-jss";
import { pageLayout } from "../../components";
import { Button } from "../../components";
export const Login = () => {
  const styles = style();

  return (
    <pageLayout>
      <div>Login</div>
      <Button />
    </pageLayout>
  );
};

const style = createUseStyles({});

export default Login;
