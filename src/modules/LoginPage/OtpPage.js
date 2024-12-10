import { Box, Grid, IconButton } from "@mui/material";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackArrowIcon from "../../assets/Icons/BackArrowIcon";
import BigLogo from "../../assets/Icons/BigLogo";
import CustomEyeIcon from "../../assets/Icons/CustomEyeIcon";
import CustomEyeOffIcon from "../../assets/Icons/CustomEyeOffIcon";
import EditIcon from "../../assets/Icons/EditIcon";
import IcanioLogo from "../../assets/Icons/IcanioLogo";
import LoginImage from "../../assets/Images/LoginImg.png";
import CustomTextbox from "../../components/TextField/TextField";
import SnackbarMessage from "../../utils/SnackbarMessage";
import {
  BackButtonContainer,
  BackButtonStyle,
  ContentContainer,
  CustomButton,
  ImageContainer,
  LoginBox,
  OtpContainer,
  OtpInput,
  StyledContainer,
  SubTextItem,
  TextItem,
} from "../LoginPage/Styles";
import { TitleTypography } from "../Projects/Styles";
function OtpPage() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const otpRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [emailError, setEmailError] = useState("");

  const [errors, setErrors] = useState({});
  const [isVerify, setIsVerify] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [otpError, setOtpError] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);
  const validatePassword = (password) => {
    const passwordCriteria =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordCriteria.test(password);
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setErrorMessage("");

    if (!validatePassword(newPassword)) {
      setPasswordError(
        "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character."
      );
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (event) => {
    const newConfirmPassword = event.target.value;
    setConfirmPassword(newConfirmPassword);
    setErrorMessage("");

    if (newConfirmPassword !== password) {
      setErrorMessage("Your confirm password is not similar to the password");
    }
  };
  const handlePasswordLogin = async () => {
    if (passwordError) {
      setErrorMessage(passwordError);
      return;
    }

    if (!password || !confirmPassword) {
      setErrorMessage(
        "Please fill in both password and confirm password fields."
      );
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Your confirm password is not similar to the password.");
      return;
    }

    try {
      const resetPasswordUrl = `${process.env.REACT_APP_API_BASE_URL}/users/reset-password/completed`;
      const response = await axios.post(resetPasswordUrl, {
        email: email,
        newPassword: password,
        confirmPassword: confirmPassword,
      });

      if (response.data.success) {
        alert("Password reset successfully!");
        navigate("/auth/login");
      } else {
        setErrorMessage(
          response.data.message ||
          "An error occurred while resetting the password."
        );
        SnackbarMessage(
          response.data.message ||
          "An error occurred while resetting the password.",
          "error"
        );
      }
    } catch (error) {
      if (error.code === "ERR_NETWORK") {
        setErrorMessage(
          "Network error occurred. Please check your connection and try again."
        );
        SnackbarMessage(
          "Network error occurred. Please check your connection and try again.",
          "error"
        );
      } else if (error.response) {
        const errorMessage =
          error.response.data?.message ||
          "An error occurred while resetting the password.";
        setErrorMessage(errorMessage);
        SnackbarMessage(errorMessage, "error");
      } else {
        setErrorMessage(
          "An unexpected error occurred. Please try again later."
        );
        SnackbarMessage(
          "An unexpected error occurred. Please try again later.",
          "error"
        );
      }
    }
  };

  const handleOtpChange = (index, event) => {
    const { value } = event.target;
    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value.length === 1 && index < otpRefs.length - 1) {
        otpRefs[index + 1].current.focus();
      }
    }
    setOtpError("");
  };

  const handleVerify = async () => {
    const otpValue = otp.join("");

    if (otpValue.length !== 4) {
      setOtpError("Please fill in all OTP fields.");
      SnackbarMessage("Please fill in all OTP fields.", "error");
      return;
    }

    try {
      const otpValidationUrl = `${process.env.REACT_APP_API_BASE_URL}/users/reset-password/otp-validation`;
      const response = await axios.post(otpValidationUrl, {
        otp: otpValue,
        email: email,
        newPassword: "",
        confirmPassword: "",
      });

      if (response.data.success) {
        alert("OTP verified successfully!", "success");
        setIsVerify(true);
      } else {
        setErrors(response.data.errors || {});

        if (response.data.errors?.otp) {
          setOtpError(response.data.errors.otp);
        }

        if (response.data.errors?.email) {
          setEmailError(response.data.errors.email);
        }

        SnackbarMessage(response.data.message || "Invalid OTP.", "error");
      }
    } catch (error) {
      if (error.code === "ERR_NETWORK") {
        SnackbarMessage(
          "Network error occurred. Please check your connection and try again.",
          "error"
        );
      } else if (error.response) {
        const errorMessage =
          error.response.data?.message || "An error occurred";

        SnackbarMessage(errorMessage, "error");
      } else {
        SnackbarMessage(
          "An unexpected error occurred. Please try again later.",
          "error"
        );
      }
    }
  };

  const handleBackLoginClick = () => {
    navigate("/auth/login");
  };

  return (
    <LoginBox>
      <StyledContainer container>
        <Grid item>
          <ImageContainer>
            <img
              src={LoginImage}
              alt="Login Image"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </ImageContainer>
        </Grid>
        {isVerify ? (
          <Grid item xs={12} sm={6}>
            <LoginBox>
              <ContentContainer>
                <BackButtonContainer>
                  <BackButtonStyle
                    text="Back"
                    onClick={handleBackLoginClick}
                    startIcon={<BackArrowIcon />}
                  >
                    Back
                  </BackButtonStyle>
                </BackButtonContainer>
                <Box sx={{ textAlign: "center", mb: 2 }}>
                  <BigLogo />
                </Box>
                <TextItem style={{ marginTop: "15px" }}>
                  Set new Password
                </TextItem>
                <SubTextItem style={{ fontSize: "12px" }}>
                  Reset password for the Email <b>{email}</b>
                </SubTextItem>
                <div style={{ width: "100%" }}>
                  <TitleTypography sx={{ mt: 2, color: "#5B738B" }}>
                    Password
                  </TitleTypography>
                  <Box position="relative">
                    <CustomTextbox
                      fullWidth
                      margin="normal"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      style={{
                        position: "absolute",
                        right: 0,
                        top: 17,
                      }}
                    >
                      {showPassword ? <CustomEyeIcon /> : <CustomEyeOffIcon />}
                    </IconButton>
                  </Box>
                  {passwordError && (
                    <div style={{ color: "red", marginTop: "10px" }}>
                      {passwordError}
                    </div>
                  )}
                  <TitleTypography sx={{ mt: 2, color: "#5B738B" }}>
                    Confirm Password
                  </TitleTypography>
                  <Box position="relative">
                    <CustomTextbox
                      fullWidth
                      margin="normal"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      value={confirmPassword}
                      onChange={handleConfirmPasswordChange}
                    />
                    <IconButton
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      style={{
                        position: "absolute",
                        right: 0,
                        top: 17,
                      }}
                    >
                      {showConfirmPassword ? (
                        <CustomEyeIcon />
                      ) : (
                        <CustomEyeOffIcon />
                      )}
                    </IconButton>
                  </Box>
                </div>
                {errorMessage && (
                  <div style={{ color: "red", marginTop: "10px" }}>
                    {errorMessage}
                  </div>
                )}
                <CustomButton
                  variant="contained"
                  fullWidth
                  onClick={handlePasswordLogin}
                  style={{ marginTop: "25px", marginBottom: "10px" }}
                >
                  Login
                </CustomButton>
                <div style={{ marginTop: "30px" }}>
                  <a
                    href="https://www.icanio.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IcanioLogo isLoggedIn />
                  </a>
                </div>
              </ContentContainer>
            </LoginBox>
          </Grid>
        ) : (
          <Grid item xs={12} sm={6}>
            <LoginBox>
              <ContentContainer>
                <BackButtonContainer>
                  <BackButtonStyle
                    text="Back"
                    onClick={handleBackLoginClick}
                    startIcon={<BackArrowIcon />}
                    style={{ marginTop: "-85px" }}
                  >
                    Back
                  </BackButtonStyle>
                </BackButtonContainer>
                <Box sx={{ textAlign: "center", mb: 2 }}>
                  <BigLogo />
                </Box>
                <TextItem style={{ marginTop: "15px" }}> Verify OTP</TextItem>
                <SubTextItem style={{ fontSize: "12px", display: "flex" }}>
                  An OTP has been sent to the Email <b> {email}</b>
                  <EditIcon />
                </SubTextItem>
                <OtpContainer>
                  {otp?.map((digit, index) => (
                    <OtpInput
                      key={index}
                      ref={otpRefs[index]}
                      type="text"
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e)}
                      maxLength="1"
                      hasValue={digit !== ""}
                    />
                  ))}
                </OtpContainer>
                {otpError && (
                  <div style={{ color: "red", marginTop: "10px" }}>
                    {otpError}
                  </div>
                )}
                <CustomButton
                  variant="contained"
                  fullWidth
                  onClick={handleVerify}
                  style={{ marginTop: "25px", marginBottom: "10px" }}
                >
                  Verify
                </CustomButton>
                <div style={{ marginTop: "85px" }}>
                  <a
                    href="https://www.icanio.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IcanioLogo isLoggedIn />
                  </a>
                </div>
              </ContentContainer>
            </LoginBox>
          </Grid>
        )}
      </StyledContainer>
    </LoginBox>
  );
}

export default OtpPage;
