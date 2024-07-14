import React, { useEffect, useState } from "react";
import ai_img from "../../assets/img/ai_img.svg";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import google from "../../assets/img/google.svg";
import facebook from "../../assets/img/facebook.svg";
import { GoogleLogin } from "@react-oauth/google";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../../redux/signupSlice";

const SignIn = () => {
  const navigation = useNavigate();

  const [phnNumber, setPhnNumber] = useState("");

  const signInResponse = useSelector((state) => state.signupReducer.data);

  const dispatch = useDispatch();

  const onNextClick = () => {
    const payload = {
      type: 1,
      mobileNumber: phnNumber,
      signUpWithMobileOrEmail: 1,
    };

    dispatch(signupUser(payload));
  };

  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  useEffect(() => {
    console.log("SignIn Response ===>", signInResponse);
    if (signInResponse != null && signInResponse.status === 1) {
      navigation("/Otp");
    }
  }, [signInResponse]);

  return (
    <>
      <div className="inner">
        <div className="sec_bg">
          <div className="logotype">
            <img src={ai_img} alt="ai_img" />
            <h3>Logotype</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="signup_bg">
          <div className="text_btn">
            <h4>Already have an account?</h4>
            <Button onClick={() => navigation(-1)}>Sign Up</Button>
          </div>
          <div className="signup_form">
            <Form>
              <h3>Sign In</h3>
              <Form.Group
                className="mb-3 form_group"
                controlId="formBasicEmail"
              >
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Mobile Number"
                  onChange={(v) => setPhnNumber(v.target.value)}
                />
              </Form.Group>
              <p>Forgot Account?</p>
              <div className="next_btn">
                <Button onClick={() => onNextClick()}>Sign In</Button>
              </div>
              <div class="separator">
                <span>or</span>
              </div>
              <div className="goog_fac_btn">
                <GoogleLogin
                  onSuccess={responseMessage}
                  onError={errorMessage}
                />
                {/* <Link to="/" class="button facebook">
                  <img src={google} alt="google" /> Google
                </Link> */}
                <Link to="/" class="button facebook">
                  <img src={facebook} alt="facebook" /> Facebook
                </Link>
              </div>
            </Form>
          </div>

          <p>
            Protected by reCAPTCHA and subject to the Rhombus <br />
            <b>Privacy Policy</b> and <b>Terms of Service.</b>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignIn;
