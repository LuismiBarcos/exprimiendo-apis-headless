import { Button } from "@material-ui/core";
import React, { useState } from "react";

export default ({ loginViewModel }) => {
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <input
        type="username"
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
        placeholder="username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="password"
      />
      <Button
        type="submit"
        onClick={() => {
          setIsError(loginViewModel.login(userName, password));
        }}
      >
        Sign In
      </Button>
      {isError && <div>The username or password provider were incorrect.</div>}
    </>
  );
};
