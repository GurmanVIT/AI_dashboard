import React, { useState } from 'react';
import ai_img from '../../assets/img/ai_img.svg';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import OTPInput from 'react-otp-input';

const Otp = () => {

    const [otp, setOtp] = useState('');

    return (
        <>
            <div className='inner'>
                <div className='sec_bg'>
                    <div className='logotype'>
                        <img src={ai_img} alt='ai_img' />
                        <h3>Logotype</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='signup_bg'>
                    <div className='text_btn'>

                    </div>
                    <div className='signup_form'>
                        <Form>
                            <h3>Enter OTP</h3>
                            <p className='numnber_otp'>Enter 4-digit code we just texted to your phone number<span><b>+91 9855 6584 991</b></span></p>
                            <Form.Group className="mb-3 input_otp" controlId="formBasicEmail">
                                <OTPInput
                                    value={otp}
                                    onChange={setOtp}
                                    numInputs={4}
                                    renderSeparator={<span className='space'></span>}
                                    renderInput={(props) => <input {...props} />}
                                />
                            </Form.Group>
                            <div className='next_btn'>
                                <Button>Submit</Button>
                            </div>
                            <div class="separator">
                                <span>or</span>
                            </div>
                            <p className='numnber_otp'>Resend Code</p>
                        </Form>
                    </div>

                    <p>Protected by reCAPTCHA and subject to the Rhombus <br /><b>Privacy Policy</b> and <b>Terms of Service.</b></p>
                </div>
            </div>
        </>
    )
}

export default Otp;