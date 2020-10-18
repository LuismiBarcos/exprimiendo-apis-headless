import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default ({ loginViewModel }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  //   const { setAuthTokens } = useAuth();

  //   const referer = props.location.state ? props.location.state.referer : "/";

  //   function postLogin() {
  //     axios
  //       .post("https://myapi.com/login.php", {
  //         userName,
  //         password,
  //       })
  //       .then((result) => {
  //         if (result.status === 200) {
  //           setAuthTokens(result.data);
  //           setLoggedIn(true);
  //           console.log(result.data);
  //         } else {
  //           setIsError(true);
  //         }
  //       })
  //       .catch((e) => {
  //         setIsError(true);
  //         console.log(e);
  //       });
  //   }

  //   if (isLoggedIn) {
  //     return <Redirect to={referer} />;
  //   }

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
        //   loginViewModel.login(userName, password);
        }}
      >
        Sign In
      </Button>
      {isError && <div>The username or password provider were incorrect.</div>}
    </>
  );
};
