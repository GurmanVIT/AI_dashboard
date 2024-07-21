import React, { useEffect, useState } from "react";
import ai_img from "../../assets/img/ai_img.svg";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import google from "../../assets/img/google.svg";
import facebook from "../../assets/img/facebook.svg";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { useDispatch, useSelector } from "react-redux";
import { clearDataSignUp, signupUser } from "../../redux/signupSlice";
import {
  clearGoogleLoginData,
  googleLogin,
} from "../../redux/GoogleSignInSlice";

const SignIn = () => {
  const navigation = useNavigate();

  const [phnNumber, setPhnNumber] = useState("");
  var from = 0;

  const [id, setId] = useState();

  const signInResponse = useSelector((state) => state.signupReducer.data);
  const googleLoginResponse = useSelector(
    (state) => state.googleLoginReducer.data
  );

  const dispatch = useDispatch();

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      from = 1;
      const payload = {
        googleId: tokenResponse.access_token,
      };
      dispatch(googleLogin(payload));
    },
  });

  const onNextClick = () => {
    from = 0;
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
      console.log("Data ===> ", signInResponse.data._id);
      setId(signInResponse.data._id);

      gotoAnotherScreen();
    }
  }, [signInResponse]);
  useEffect(() => {
    console.log("SignIn Response ===>", signInResponse);
    if (googleLoginResponse != null && googleLoginResponse.status === 1) {
      console.log("Data ===> ", googleLoginResponse.data._id);
      localStorage.setItem("token", googleLoginResponse.token);
      setId(googleLoginResponse.data._id);
    }
  }, [googleLoginResponse]);

  useEffect(() => {
    if (id != null) {
      if ((from = 0)) {
        console.log("otp");
        navigation("/Otp", { state: { id } });
        dispatch(clearDataSignUp());
      } else {
        console.log("google======>");
        navigation("/Project");
        dispatch(clearGoogleLoginData());
      }
    }
  }, [id]);

  const gotoAnotherScreen = () => { };

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
            <Button onClick={() => navigation('/SignUp')}>Sign Up</Button>
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
              {/* <p>Forgot Account?</p> */}
              <div className="next_btn">
                <Button onClick={() => onNextClick()}>Sign In</Button>
              </div>
              <div class="separator">
                <span>or</span>
              </div>
              <div className="goog_fac_btn">
                {/* <GoogleLogin
                  onSuccess={responseMessage}
                  onError={errorMessage}
                /> */}
                <div to="/" class="button facebook" onClick={() => login()}>
                  <img src={google} alt="google" /> Google
                </div>
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
