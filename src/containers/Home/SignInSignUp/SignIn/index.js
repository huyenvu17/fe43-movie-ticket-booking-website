import React, { Component } from "react";
import SignInForm from "./SignInForm";
import { userLogin } from "../../../../Config/config";
const SignIn = (props) => {
  if (localStorage.getItem(userLogin)) {
    props.history.push("/");
  }
  return (
   
      <SignInForm navigator={props} />
    
  );
};

export default SignIn;