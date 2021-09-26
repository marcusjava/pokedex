import React from "react";
import SignIn from "../../components/sign-in";
import SignUp from "../../components/sign-up";
import { Container } from "./styles/signInAndSignUp";
import { useSelector } from "react-redux";
import Spinner from "../../components/spinner";

// import { Container } from './styles';

function SignInAndSignUp(props) {
  const { loading } = useSelector((state) => state.user);

  console.log(loading);
  return loading ? (
    <Spinner />
  ) : (
    <Container>
      <SignIn />
      <SignUp />
    </Container>
  );
}

export default SignInAndSignUp;
