import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackArrowIcon from "../../assets/Icons/BackArrowIcon";
import BigLogo from "../../assets/Icons/BigLogo";
import IcanioLogo from "../../assets/Icons/IcanioLogo";
import LoginImage from "../../assets/Images/LoginImg.png";
import CustomTextbox from "../../components/TextField/TextField";
import api from "../../redux/api";
import {
  BackButtonStyle,
  CustomButton,
  ImageContainer,
  LoginBox,
  LoginGrid,
  SmallSpanText,
  SmallText,
  StyledContainer,
  SubTextItem,
  TextItem,
} from "../LoginPage/Styles";
import { TitleTypography } from "../Projects/Styles";

function LoginPage({ width }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [isResetPassword, setIsResetPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = async () => {
    let isValid = true;

    if (!email) {
      setEmailError("Please fill the required field");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Please fill the required field");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (isValid) {
      try {
        const loginUrl = `${process.env.REACT_APP_API_BASE_URL}/users/login`;
        const response = await axios.post(loginUrl, {
          email,
          password,
        });
        if (response?.data?.success) {
          const { accessToken, refreshToken, user } = response?.data?.data;
          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("refreshToken", refreshToken);
          localStorage.setItem("email", email);
          localStorage.setItem("userId", user.id);
          localStorage.setItem("userName", user.fullName);
          localStorage.setItem("occupation", user.occupation);
          api.defaults.headers["Authorization"] = `Bearer ${accessToken}`;

          navigate("/projects");
        } else {
          setEmailError(response.data.message || "Invalid email or password");
        }
      } catch (error) {
        // if (error.response) {
        //   setEmailError("Invalid email or password");
        // } else {
        //   setEmailError("An error occurred. Please try again.");
        // }
        if (error.response) {
          if (error?.response?.code === 401) {
            if (error?.response?.status === 401) {
              localStorage.removeItem("accessToken");
              localStorage.removeItem("refreshToken");
              localStorage.removeItem("email");
              localStorage.removeItem("userId");
              localStorage.removeItem("userName");
              localStorage.removeItem("occupation");
              // Redirect to the auth page
              navigate("/auth");
            }
          } else {
            setEmailError("Invalid email or password");
          }
        } else {
          setEmailError("An error occurred. Please try again.");
        }
      }
    }
  };

  const handleMailChange = (event) => {
    setEmail(event.target.value);
    setEmailError("");
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError("");
  };

  const handleBackLoginClick = () => {
    navigate("/auth");
  };

  const handleResetPasswordClick = () => {
    setIsResetPassword(true);
  };

  const handleReset = () => {
    navigate("/auth/signup");
  };

  const handleSendOtp = async () => {
    if (!email) {
      setEmailError("Please fill the required field");
      return;
    }

    try {
      const resetPasswordInitiateUrl = `${process.env.REACT_APP_API_BASE_URL}/users/reset-password/initiate`;
      const response = await axios.post(resetPasswordInitiateUrl, {
        email,
      });

      if (response.data.success) {
        alert("OTP has been sent to your email address.");
        localStorage.setItem("email", email);
        navigate("/auth/otp");
      } else {
        setEmailError(response.data.message);
      }
    } catch (error) {
      if (error.response) {
        const errorMessage = error.response.data?.message || "";

        if (errorMessage.toLowerCase().includes("email already exists")) {
          setEmailError("Email already exists. Please use a different email.");
        } else {
          setEmailError(errorMessage);
        }
      } else {
        setEmailError("An error occurred. Please try again.");
      }
    }
  };
  return (
    <LoginBox>
      <StyledContainer container>
        <Grid item xs={6}>
          <ImageContainer>
            <img
              src={LoginImage}
              alt="Login Image"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </ImageContainer>
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              {isResetPassword ? (
                <>
                  <Grid item style={{ padding: "24px" }}>
                    <BackButtonStyle
                      text="Back"
                      onClick={handleBackLoginClick}
                      startIcon={<BackArrowIcon />}
                    >
                      Back
                    </BackButtonStyle>
                  </Grid>
                  <LoginGrid item>
                    <LoginGrid
                      container
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: "0px 24px 0px 36px",
                        // marginLeft: "-24px",
                      }}
                    >
                      <div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            marginLeft: "-24px",
                          }}
                        >
                          <BigLogo />
                        </div>
                        <TextItem>Reset Password</TextItem>
                        <SubTextItem style={{ padding: "8px 0px" }}>
                          Enter your Email Address to receive OTP
                        </SubTextItem>
                      </div>
                      <LoginGrid
                        item
                        xs={12}
                        sx={{
                          width: "100%",
                          paddingTop: "0px",
                        }}
                      >
                        <TitleTypography
                          sx={{ mt: 2, color: "#5B738B", textAlign: "left" }}
                        >
                          Email Id
                        </TitleTypography>
                        <CustomTextbox
                          fullWidth
                          value={email}
                          onChange={handleMailChange}
                          margin="normal"
                          placeholder="Enter your Email ID"
                        />
                        {emailError && (
                          <div style={{ color: "red", marginTop: "10px" }}>
                            {emailError}
                          </div>
                        )}
                      </LoginGrid>
                      <LoginGrid item xs={12}>
                        <CustomButton
                          variant="contained"
                          fullWidth
                          onClick={handleSendOtp}
                          style={{
                            marginTop: "25px",
                            marginBottom: "10px",
                            width: "366px",
                          }}
                        >
                          Send OTP
                        </CustomButton>
                      </LoginGrid>
                      <LoginGrid item></LoginGrid>
                      <LoginGrid item xs={12}>
                        <footer
                          style={{
                            bottom: 0,
                            width: "100%",
                            padding: "40px 0px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              padding: "20px 0",
                            }}
                          >
                            <a
                              href="https://www.icanio.com"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <IcanioLogo isLoggedIn />
                            </a>
                          </div>
                        </footer>
                      </LoginGrid>
                    </LoginGrid>
                  </LoginGrid>
                </>
              ) : (
                <>
                  <Grid item style={{ padding: "24px" }}>
                    <BackButtonStyle
                      text="Back"
                      onClick={handleBackLoginClick}
                      startIcon={<BackArrowIcon />}
                    >
                      Back
                    </BackButtonStyle>
                  </Grid>
                  <LoginGrid item>
                    <LoginGrid
                      container
                      spacing={3}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: "0px 24px 0px 36px",
                        margin: "0px",
                      }}
                    >
                      <div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginLeft: "-24px",
                          }}
                        >
                          <BigLogo />
                        </div>
                        <TextItem>Welcome Back !</TextItem>
                        <SubTextItem>Login to your account</SubTextItem>
                      </div>
                      <LoginGrid
                        item
                        xs={12}
                        sx={{
                          width: "100%",
                          paddingRight: "24px",
                          paddingTop: "0px",
                        }}
                      >
                        <TitleTypography
                          sx={{ color: "#5B738B", paddingTop: "0px" }}
                        >
                          Email Id
                        </TitleTypography>
                        <CustomTextbox
                          fullWidth
                          value={email}
                          onChange={handleMailChange}
                          margin="normal"
                          placeholder="Enter your Email ID"
                        />
                        {emailError && (
                          <div style={{ color: "red", marginTop: "10px" }}>
                            {emailError}
                          </div>
                        )}
                      </LoginGrid>
                      <LoginGrid
                        item
                        xs={12}
                        sx={{
                          width: "100%",
                          paddingRight: "24px",
                          paddingTop: "0px",
                          paddingLeft: "24px",
                        }}
                      >
                        <TitleTypography
                          sx={{ color: "#5B738B", paddingTop: "0px" }}
                        >
                          Password
                        </TitleTypography>
                        <CustomTextbox
                          fullWidth
                          margin="normal"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          value={password}
                          onChange={handlePasswordChange}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  onClick={togglePasswordVisibility}
                                  onMouseDown={handleMouseDownPassword}
                                  edge="end"
                                >
                                  {showPassword ? (
                                    <Visibility />
                                  ) : (
                                    <VisibilityOff />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        />
                        {passwordError && (
                          <div style={{ color: "red", marginTop: "10px" }}>
                            {passwordError}
                          </div>
                        )}
                      </LoginGrid>
                      <LoginGrid
                        item
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          flexDirection: "column",
                          textAlign: "center",
                          alignItems: "center",
                          paddingLeft: "0px",
                          marginLeft: "-24px",
                        }}
                      >
                        <SmallText>
                          Forgot Password ?
                          <SmallSpanText onClick={handleResetPasswordClick}>
                            {" "}
                            Reset Password
                          </SmallSpanText>
                        </SmallText>
                      </LoginGrid>
                      <LoginGrid item xs={12}>
                        <CustomButton
                          variant="contained"
                          fullWidth
                          onClick={handleLogin}
                          style={{
                            marginTop: "25px",
                            marginBottom: "10px",
                            width: "366px",
                            marginLeft: "-24px",
                          }}
                        >
                          Login
                        </CustomButton>
                      </LoginGrid>
                      <SmallText>
                        Don’t have an account ?
                        <SmallSpanText onClick={handleReset}>
                          {" "}
                          Sign up for Free
                        </SmallSpanText>
                      </SmallText>
                      {/* </LoginGrid> */}

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          padding: "20px 0",
                        }}
                      >
                        <a
                          href="https://www.icanio.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <IcanioLogo isLoggedIn />
                        </a>
                      </div>
                    </LoginGrid>
                  </LoginGrid>
                </>
              )}
            </Grid>
          </Grid>
        </Grid>
      </StyledContainer>
    </LoginBox>
  );
}

export default LoginPage;
