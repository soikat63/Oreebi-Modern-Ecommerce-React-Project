import React, { useState } from "react";
import Container from "../layer/Container";
import Tittle from "../layer/Tittle";
import Breadcrumb from "../layer/Breadcrumb";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import Input from "./Input";
import ButtonS from "./ButtonS";
import AlertMassage from "./AlertMassage";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { ColorRing } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const SignUp = () => {
  //Defining and calling a variable and function  for the first name -start
  let [firstName, setfirstName] = useState("");
  let [firstNameAlertMassage, setfirstNameAlertMassage] = useState("");

  let firstNameFill = (e) => {
    setfirstName(e.target.value);
    setfirstNameAlertMassage("");
  };
  //Defining and calling a variable and function  for the first name -end.

  //Defing and calling a variablr and function for the last name -start .
  let [lastName, setlastName] = useState("");
  let [lastNameAlertMassage, setlastNameAlertMassage] = useState("");

  let lastNameFill = (e) => {
    setlastName(e.target.value);
    setlastNameAlertMassage("");
  };
  //Defining and calling a variable and function for the last name - end.
  //Defining and calling a variable and function for the email-address - start.
  let [email, setemail] = useState("");
  let [emailAlertMassage, setemailAlertMassage] = useState("");

  let emailFill = (e) => {
    setemail(e.target.value);
    setemailAlertMassage("");
  };
  //Defining and calling a variable and function for the email-address - end.

  //Defining and calling a variable and function for the telephone number -start.
  let [telephone, settelephone] = useState("");
  let [telephoneAlertMassage, settelephoneAlertMassage] = useState("");

  let telephoneFill = (e) => {
    settelephone(e.target.value);
    settelephoneAlertMassage("");
  };
  //Defining and calling a variable and function for the telephone number -end.

  //Defining and calling a variable and function for the address1 -start.
  let [address1, setaddress1] = useState("");
  let [address1AlertMassage, setaddress1AlertMassage] = useState("");

  let address1Fill = (e) => {
    setaddress1(e.target.value);
    setaddress1AlertMassage("");
  };
  //Defining and calling a variable and function for the address1 -end.

  //Defining and calling a variable and function for the address2 -start.
  let [address2, setaddress2] = useState("");
  let [address2AlertMassage, setaddress2AlertMassage] = useState("");

  let address2Fill = (e) => {
    setaddress2(e.target.value);
    setaddress2AlertMassage(" ");
  };
  //Defining and calling a variable and function for the address2 -end.

  //Defining and calling a variable and function for the city -start.
  let [city, setcity] = useState("");
  let [cityAlertMassage, setcityAlertMassage] = useState("");

  let cityFill = (e) => {
    setcity(e.target.value);
    setcityAlertMassage("");
  };
  //Defining and calling a variable and function for the city -end.

  //Defining and calling a variable and function for the post-code -start.
  let [postCode, setpostCode] = useState("");
  let [postCodeAlertMassage, setpostCodeAlertMassage] = useState("");

  let postCodeFill = (e) => {
    setpostCode(e.target.value);
    setpostCodeAlertMassage("");
  };
  //Defining and calling a variable and function for the post-code -end.

  //Defining and calling a variable and function for the division -start.
  let [division, setdivision] = useState("");
  let [divisionAlertMassage, setdivisionAlertMassage] = useState("");

  let divisionFill = (e) => {
    setdivision(e.target.value);
    setdivisionAlertMassage("");
  };
  //Defining and calling a variable and function for the division -end.

  //Defining and calling a variable and function for the district -start.
  let [district, setdistrict] = useState("");
  let [districtAlertMassage, setdistrictAlertMassage] = useState("");

  let districtFill = (e) => {
    setdistrict(e.target.value);
    setdistrictAlertMassage("");
  };
  //Defining and calling a variable and function for the district -end.

  //Defining and calling a variable and function for the password -start.
  let [password, setpassword] = useState("");
  let [passwordAlertMassage, setpasswordAlertMassage] = useState("");

  let passwordFill = (e) => {
    setpassword(e.target.value);
    setpasswordAlertMassage("");
  };
  //Defining and calling a variable and function for the password -end.

  //Defining and calling a variable and function for the repet-password -start.
  let [repetPassword, setrepetPassword] = useState("");
  let [repetPasswordAlertMassage, setrepetPasswordAlertMassage] = useState("");

  let repetPasswordFill = (e) => {
    setrepetPassword(e.target.value);
    setrepetPasswordAlertMassage("");
  };
  //Defining and calling a variable and function for the repeat-password -end.

  //  Decclear a array-function for the password and repeat-password matching .
  let matchPassword = (e) => {
    e.preventDefault();
  };

  //Write 2 variable for password & repeat-password -start.
  let [passwordEye, setpasswordEye] = useState(false);
  let [repeatPasswordEye, setrepeatPasswordEye] = useState(false);
  //Write 2 variable for password & repeat-password -end.

  // Write a auth variable for firebase..
  const auth = getAuth();

  let [spiner, setSpiner] = useState(true); //write a state for spiner!
  let navigate = useNavigate(); //Decclear a navigate function from react for redirecting page!..

  //actions and conditional after button click part start now and this section is end before return ..
  let submit = () => {
    if (!firstName) {
      setfirstNameAlertMassage("First name is required!");
    }
    if (!lastName) {
      setlastNameAlertMassage("Last name is required!");
    }
    if (!email) {
      setemailAlertMassage("Email is required!");
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/.test(email)) {
      setemailAlertMassage("You have entered an invalid email address!");
    }
    if (!telephone) {
      settelephoneAlertMassage("Phone number is required!");
    }
    if (!address1) {
      setaddress1AlertMassage("Address 1 is required!");
    }
    if (!address2) {
      setaddress2AlertMassage("Address 2 is required!");
    }
    if (!city) {
      setcityAlertMassage("City is required!");
    }
    if (!postCode) {
      setpostCodeAlertMassage("Post code is required!");
    }
    if (!division) {
      setdivisionAlertMassage("Division is required!");
    }
    if (!district) {
      setdistrictAlertMassage("District is required!");
    }
    if (!password) {
      setpasswordAlertMassage("Password is required!");
    } else if (!/(?=.*[a-z])/.test(password)) {
      setpasswordAlertMassage(
        "The string must contain at least 1 lowercase alphabetical character!"
      );
    } else if (!/(?=.*[A-Z])/.test(password)) {
      setpasswordAlertMassage(
        "The string must contain at least 1 uppercase alphabetical character!"
      );
    } else if (!/(?=.*[0-9])/.test(password)) {
      setpasswordAlertMassage(
        "The string must contain at least 1 numeric character!"
      );
    } else if (!/(?=.*[!@#$%^&*])/.test(password)) {
      setpasswordAlertMassage(
        "The string must contain at least one special character!"
      );
    } else if (!/(?=.{8,})/.test(password)) {
      setpasswordAlertMassage("The string must be eight characters or longer!");
    }
    if (!repetPassword) {
      setrepetPasswordAlertMassage("Repeat- password is required!");
    }
    if (password !== repetPassword) {
      setrepetPasswordAlertMassage("Password and Repeat-Password do not match!");
    }

    // Email and Password authentication at firebase -start !
    if (
      firstName &&
      lastName &&
      email &&
      telephone &&
      address1 &&
      address2 &&
      city &&
      postCode &&
      division &&
      district &&
      password &&
      repetPassword &&
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/.test(email) && //email-regax
      /(?=.*[a-z])/.test(password) && //password-regax
      /(?=.*[A-Z])/.test(password) && //password-regax
      /(?=.*[0-9])/.test(password) && //password-regax
      /(?=.*[!@#$%^&*])/.test(password) && //password-regax
      /(?=.{8,})/.test(password) //password-regax
    ) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          setfirstName("");
          setlastName("");
          setemail("");
          settelephone("");
          setaddress1("");
          setaddress2("");
          setcity("");
          setpostCode("");
          setdivision("");
          setdistrict("");
          setpassword("");
          setrepetPassword("");
          setSpiner(false); //spiner
          toast.success("🦄 Registration Complete!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

          // ...
        })
        .then(() => {
          sendEmailVerification(auth.currentUser).then(() => {
            // Email verification sent!
            // ...
            setTimeout(() => {
              //Navigate timing
              navigate("/login");
            }, 3500);
          });
        })
        .catch((error) => {
          if (error.code.includes("auth/email-already-in-use")) {
            setemailAlertMassage("Email already in use!");
          }
        });
    }
    // Email and Password authentication at firebase -end !
  };

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        // transition="Bounce"
      />
      <div className="px-5 lg:px-0 lg:mt-[124px] mt-6">
        <form onClick={matchPassword}>
          <Container>
            <Tittle className="lg:text-[49px]" text="SignUp" />
            <Breadcrumb />
            <div className="lg:mt-32 mt-6 lg:mb-16 mb-5 border-b border-[#F0F0F0] lg:pb-16 pb-6">
              <p className="font-DM lg:text-base text-sm text-[#767676] lg:leading-7 leading-5 max-w-[664px] ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the.
              </p>
            </div>

            {/* ==========Your Personal Details- section - start===========> */}

            <div className=" lg:pb-[69px]  lg:border-b">
              <Tittle className="lg:mb-11 mb-4" text="Your Personal Details" />
              <div className="main flex flex-wrap lg:gap-10 gap-6">
                {/* ==========first-name - section - start===========> */}

                <Input
                  value={firstName}
                  onChange={firstNameFill}
                  htmlFor=""
                  text="First Name *"
                  type="text"
                  placeholder="First Name"
                >
                  {firstNameAlertMassage && (
                    <AlertMassage>{firstNameAlertMassage} </AlertMassage>
                  )}
                </Input>
                {/* ==========first-name - section - end<=========== */}

                <Input
                  value={lastName}
                  onChange={lastNameFill}
                  htmlFor=""
                  text="Last Name *"
                  type="text"
                  placeholder="Last Name"
                >
                  {lastNameAlertMassage && (
                    <AlertMassage>{lastNameAlertMassage}</AlertMassage>
                  )}
                </Input>
                <Input
                  value={email}
                  onChange={emailFill}
                  htmlFor=""
                  text="Email address *"
                  type="email"
                  placeholder="company@domain.com"
                >
                  {emailAlertMassage && (
                    <AlertMassage>{emailAlertMassage}</AlertMassage>
                  )}
                </Input>
                <Input
                  value={telephone}
                  onChange={telephoneFill}
                  htmlFor=""
                  text="Telephone *"
                  type="tel"
                  placeholder="Your phone number"
                >
                  {telephoneAlertMassage && (
                    <AlertMassage>{telephoneAlertMassage}</AlertMassage>
                  )}
                </Input>
              </div>
            </div>

            {/* ==========Your Personal Details- section - end<=========== */}

            {/* ==========New Customer- section -start===========> */}

            <div className=" lg:mt-[58px] mt-[26px] lg:pb-[69px]  lg:border-b">
              <Tittle className="lg:mb-11 mb-6" text="New Customer" />
              <div className="main flex flex-wrap lg:gap-10 gap-6 ">
                <Input
                  value={address1}
                  onChange={address1Fill}
                  htmlFor=""
                  text="Address 1 *"
                  type="text"
                  placeholder="4279 Zboncak Port Suite 6212"
                >
                  {address1AlertMassage && (
                    <AlertMassage>{address1AlertMassage}</AlertMassage>
                  )}
                </Input>
                <Input
                  value={address2}
                  onChange={address2Fill}
                  htmlFor=""
                  text="Address 2 *"
                  type="text"
                  placeholder="-"
                >
                  {address2AlertMassage && (
                    <AlertMassage>{address2AlertMassage}</AlertMassage>
                  )}
                </Input>
                {/* CITY SECTION -START */}
                <Input
                  value={city}
                  onChange={cityFill}
                  htmlFor=""
                  text="City *"
                  type="text"
                  placeholder="Your city "
                >
                  {/* CITY ALERT MASSAGE- START */}
                  {cityAlertMassage && (
                    <AlertMassage>{cityAlertMassage}</AlertMassage>
                  )}
                  {/* CITY ALERT MASSAGE- END */}
                </Input>
                {/* CITY SECTION -END */}
                {/* POST-CODE SECTION -START */}
                <Input
                  value={postCode}
                  onChange={postCodeFill}
                  htmlFor=""
                  text="Post Code *"
                  type="text"
                  placeholder="05228"
                >
                  {/* POST-CODE ALERT MASSAGE- START */}
                  {postCodeAlertMassage && (
                    <AlertMassage>{postCodeAlertMassage}</AlertMassage>
                  )}
                  {/* POST-CODE ALERT MASSAGE- END */}
                </Input>
                {/* POST-CODE SECTION -END */}
                {/* DIVISION SECTION -START */}
                <Input
                  value={division}
                  onChange={divisionFill}
                  htmlFor=""
                  text="Division *"
                  type="text"
                  placeholder="Please select"
                >
                  {/* DIVISOIN ALERT MASSAGE- START */}
                  {divisionAlertMassage && (
                    <AlertMassage>{divisionAlertMassage}</AlertMassage>
                  )}
                  {/* DIVISOIN ALERT MASSAGE- END */}
                </Input>
                {/* DIVISION SECTION -END */}

                {/* DISTRICT SECTION -START */}
                <Input
                  value={district}
                  onChange={districtFill}
                  htmlFor=""
                  text="District *"
                  type="text"
                  placeholder="Please select"
                >
                  {/* DISTRICT  ALERT MASSAGE- START */}
                  {districtAlertMassage && (
                    <AlertMassage>{districtAlertMassage}</AlertMassage>
                  )}
                  {/* DISTRICT  ALERT MASSAGE- END */}
                </Input>
                {/* DISTRICT SECTION -END */}
              </div>
            </div>
            {/* ==========New Customer- section - end<=========== */}

            {/* ==========Your Password- section - start===========> */}
            <div className=" lg:mt-[58px] mt-[26px] lg:pb-[69px] lg:border-b">
              <Tittle className="lg:mb-11 mb-5" text="Your Password" />
              <div className="main flex flex-wrap lg:gap-10 gap-11 ">
                {/* FIRST PASSWORD SECTION -START */}

                <Input
                  value={password}
                  onChange={passwordFill}
                  htmlFor=""
                  text="Password *"
                  type={passwordEye ? "text" : "password"}
                  placeholder="Password"
                >
                  {/* PASSWORD ALERT MASSAGE- START */}
                  {passwordAlertMassage && (
                    <AlertMassage>{passwordAlertMassage}</AlertMassage>
                  )}
                  {/* PASSWORD ALERT MASSAGE- END */}

                  {/* password eye on/off >*/}
                  {passwordEye ? (
                    <IoIosEye
                      onClick={() => setpasswordEye(!passwordEye)}
                      className="absolute right-0 top-1/2"
                    />
                  ) : (
                    <IoIosEyeOff
                      onClick={() => setpasswordEye(!passwordEye)}
                      className="absolute right-0 top-1/2"
                    />
                  )}
                  {/* password eye on/off <*/}
                </Input>
                {/* FIRST PASSWORD SECTION -END */}

                {/*  REPET-PASSWORD SECTION -START */}
                <Input
                  value={repetPassword}
                  onChange={repetPasswordFill}
                  htmlFor=""
                  text="Repeat Password *"
                  type={repeatPasswordEye ? "text" : "password"}
                  placeholder="Repeat Password"
                >
                  {/* PASSWORD ALERT MASSAGE- START */}
                  {repetPasswordAlertMassage && (
                    <AlertMassage>{repetPasswordAlertMassage}</AlertMassage>
                  )}
                  {/* PASSWORD ALERT MASSAGE- END */}

                  {/* Repet-password eye on/off >*/}
                  {repeatPasswordEye ? (
                    <IoIosEye
                      onClick={() => setrepeatPasswordEye(!repeatPasswordEye)}
                      className="absolute right-0 top-1/2"
                    />
                  ) : (
                    <IoIosEyeOff
                      onClick={() => setrepeatPasswordEye(!repeatPasswordEye)}
                      className="absolute right-0 top-1/2"
                    />
                  )}
                  {/* Repet-password eye on/off <*/}
                </Input>
                {/* REPET-PASSWORD SECTION -END */}
              </div>
            </div>

            {/* ==========Your Password- section - end<=========== */}

            {/* <p className="flex items-center gap-x-4 lg:mt-16 mt-4">
                <input type="checkbox" />
              <span>
              </span>
              I have read and agree to the Privacy Policy
            </p> */}

            {/* spiner defining and condition applied- start */}
            {
              spiner ? (
                <ButtonS
                  onClick={submit}
                  className="lg:mb-[140px] mb-[40px] lg:mt-7 mt-8  lg:py-4 lg:px-20 px-10"
                >
                  Log in
                </ButtonS>
              ) : (
                //   React - loder- spiner - start!
                <ColorRing
                  visible={true}
                  height="80"
                  width="80"
                  ariaLabel="color-ring-loading"
                  wrapperStyle={{}}
                  wrapperClass="color-ring-wrapper"
                  colors={[
                    "#e15b64",
                    "#f47e60",
                    "#f8b26a",
                    "#abbd81",
                    "#849b87",
                  ]}
                />
              )
              //  React - loder- spiner - end!
            }

            {/* spiner defining and condition applied- end */}
          </Container>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
{
  /*  SECTION -END */
}
