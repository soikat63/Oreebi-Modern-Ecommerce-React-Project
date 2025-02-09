import React, { useState } from "react";
import Container from "./layer/Container";
import Tittle from "./layer/Tittle";
import Breadcrumb from "./layer/Breadcrumb";
import ButtonS from "./layer/ButtonS";
import Input from "./layer/Input";
import { GoEye, GoEyeClosed } from "react-icons/go";
import AlertMassage from "./layer/AlertMassage";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  //Defining and calling a variable and function for the email-address - start.
  let [email, setEmail] = useState("");
  let [emailAlertMassage, setemailAlertMassage] = useState("");
  let emailFill = (e) => {
    setEmail(e.target.value);
    setemailAlertMassage("");
  };
  //Defining and calling a variable and function for the email-address - end.

  //Defining and calling a variable and function for the password - start.
  let [password, setPassword] = useState("");
  let [passwordAlertMassage, setPasswordAlertMassage] = useState("");
  let passwordFill = (e) => {
    setPassword(e.target.value);
    setPasswordAlertMassage("");
  };

  //Defining and calling a variable and function for the password - end.

  let [passwordEye, setPasswordEye] = useState(false);
  
  // Write a auth variable for firebase..
     const auth = getAuth();

  let submit = () => {
    if (!email) {
      setemailAlertMassage("Enter your valid email.");
    }
    if (!password) {
      setPasswordAlertMassage ("Enter your password.")
    }

    // Email and Password matching from sign-up page at firebase -start !
      if (email && password) {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              // ...
                
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
            });
        
      }
    // Email and Password matching from sign-up page at firebase -end !
  };
  return (
    <div className="px-5 lg:px-0 lg:mt-[124px] mt-6">
      <Container>
        <Tittle className="lg:text-[49px]" text="Login" />
        <Breadcrumb />
        <div className="lg:mt-32 mt-6 lg:mb-16 mb-5 border-b border-[#F0F0F0] lg:pb-16 pb-6">
          <p className="font-DM lg:text-base text-sm text-[#767676] lg:leading-7 leading-5 max-w-[664px] ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </p>
        </div>

        <div className=" lg:pb-[69px]  lg:border-b ">
          <Tittle className="lg:mb-11 mb-4" text="Returning Customer" />
          <div className="main flex flex-wrap lg:gap-10 gap-5">
            <Input
              value={email}
              onChange={emailFill}
              htmlFor=""
              text="Email"
              type="email"
              placeholder="company@domain.com"
            >
              {emailAlertMassage && (
                <AlertMassage>{emailAlertMassage}</AlertMassage>
              )}
            </Input>
            <Input
              value={password}
              onChange={passwordFill}
              htmlFor=""
              text="Password"
              type={passwordEye ? "text" : "password"}
              placeholder="Password"
            >

               {
                passwordAlertMassage && (
                  <AlertMassage> {passwordAlertMassage}</AlertMassage>
                )
               }
              {passwordEye ? (
                <GoEye
                  onClick={() => setPasswordEye(!passwordEye)}
                  className="absolute right-0 top-1/2"
                />
              ) : (
                <GoEyeClosed
                  onClick={() => setPasswordEye(!passwordEye)}
                  className="absolute right-0 top-1/2"
                />
              )}
            </Input>
          </div>

          <ButtonS
            onClick={submit}
            className="lg:mt-7 mt-4 lg:mb-50 mb-8 lg:py-4 lg:px-20 px-10 "
          >
            Log in
          </ButtonS>
        </div>

        <div className=" lg:mb-[140px] mb-16">
          <Tittle className="lg:mb-9 mb-3" text="New Customer" />
          <p className="font-DM lg:text-base text-sm text-[#767676] lg:leading-7 leading-5 max-w-[664px] ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </p>
          <ButtonS className="lg:mt-[51px] mt-6  lg:py-4 lg:px-20 px-10">
            Continue
          </ButtonS>
        </div>
      </Container>
    </div>
  );
};

export default Login;
