import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Box, Grid } from "@mui/material";
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
import {
  BackButtonStyle,
  CheckboxContainer,
  ContentContainer,
  CustomButton,
  ImageContainer,
  LoginBox,
  OrangeCheckbox,
  SignupContainer,
  SmallSpanText,
  SmallText,
  StyledContainer,
  SubTextItem,
  TextItem,
} from "../LoginPage/Styles";
import { TitleTypography } from "../Projects/Styles";

function SignupIndex() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState(""); // Initial state is an empty string
  const [email, setEmail] = useState(""); // Initial state is an empty string
  const [password, setPassword] = useState(""); // Initial state is an empty string
  const [confirmPassword, setConfirmPassword] = useState(""); // Initial state is an empty string
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [emailError, setEmailError] = useState("");
  const [apiError, setApiError] = useState("");
  const [showPasswordFields, setShowPasswordFields] = useState(false); // New state to control password field visibility
  const [occupation, setOccupation] = useState(""); // New state for occupation
  const [city, setCity] = useState(""); // New state for city

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "fullName":
        if (!value) error = "Full Name is required";
        break;
      case "email":
        if (!value) error = "Email ID is required";
        else if (!/\S+@\S+\.\S+/.test(value)) error = "Email ID is invalid";
        break;
      case "password":
        if (!value) error = "Password is required";
        break;
      case "confirmPassword":
        if (!value) error = "Confirm Password is required";
        else if (value !== password) error = "Passwords do not match";
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const validate = () => {
    let tempErrors = {};

    if (!fullName) tempErrors.fullName = "Full Name is required";
    if (!email) tempErrors.email = "Email ID is required";
    else if (!/\S+@\S+\.\S+/.test(email))
      tempErrors.email = "Email ID is invalid";
    if (!password) tempErrors.password = "Password is required";
    if (!confirmPassword)
      tempErrors.confirmPassword = "Confirm Password is required";
    else if (confirmPassword !== password)
      tempErrors.confirmPassword = "Passwords do not match";

    if (password && confirmPassword && password === confirmPassword) {
      delete tempErrors.password;
      delete tempErrors.confirmPassword;
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSignup = async () => {
    if (!showPasswordFields) {
      setShowPasswordFields(true);
      return;
    }
    if (!validate()) return;

    try {
      const userUrl = `${process.env.REACT_APP_API_BASE_URL}/users`;
      const response = await axios.post(userUrl, {
        fullName,
        email,
        password,
        confirmPassword,
        city,
        occupation,
      });

      if (response.data.success) {
        navigate("/auth/login");
      } else {
        setErrors(response.data.errors || {});

        if (response.data.errors?.email) {
          setEmailError(response.data.errors.email);
        }
      }
    } catch (error) {
      console.log("Full Error Object:", error);
      console.log("Error Response Data:", error.response?.data);

      console.error("Error during signup:", error);

      if (error.response) {
        const errorMessage = error.response.data?.message || "";

        if (errorMessage.toLowerCase().includes("email already exists")) {
          setEmailError("Email already exists. Please use a different email.");
        } else {
          setErrors(error.response.data.errors || {});

          if (error.response.data.errors?.email) {
            setEmailError(error.response.data.errors.email);
          }
        }
      } else {
        setErrors({
          apiError: "An error occurred during signup. Please try again.",
        });
      }
    }
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
    validateField("fullName", event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    validateField("email", event.target.value);
    setEmailError("");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    validateField("password", event.target.value);
    validateField("confirmPassword", confirmPassword);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    validateField("confirmPassword", event.target.value);
  };

  const handleOccupationChange = (event) => {
    setOccupation(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleBackLoginClick = (event) => {
    navigate("/auth");
  };
  const handleLoginClick = () => {
    navigate("/auth/login");
  };

  return (
    <LoginBox>
      <StyledContainer
        container
        style={{ maxWidth: "1200px", minHeight: "500px" }}
      >
        <Grid item>
          <ImageContainer>
            <img
              src={LoginImage}
              alt="Login Image"
              style={{ maxWidth: "100%", height: "100%" }}
            />
          </ImageContainer>
        </Grid>
        <Grid item xs>
          <BackButtonStyle
            text="Back"
            style={{ paddingLeft: "24px" }}
            onClick={handleBackLoginClick}
            startIcon={<BackArrowIcon />}
          >
            Back
          </BackButtonStyle>
          <ContentContainer>
            <BigLogo />
            <TextItem>Create an Account</TextItem>
            <SubTextItem>Let’s get started</SubTextItem>
          </ContentContainer>
          {!showPasswordFields && (
            <Box sx={{ px: 5 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TitleTypography sx={{ mt: 2, color: "#5B738B" }}>
                    Full Name
                  </TitleTypography>
                  <CustomTextbox
                    fullWidth
                    value={fullName}
                    onChange={handleFullNameChange}
                    margin="normal"
                    placeholder="Enter your Full Name"
                    error={!!errors.fullName}
                    helperText={errors.fullName}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TitleTypography sx={{ mt: 2, color: "#5B738B" }}>
                    Email Id
                  </TitleTypography>
                  <CustomTextbox
                    fullWidth
                    value={email}
                    onChange={handleEmailChange}
                    margin="normal"
                    placeholder="Enter your Email ID"
                    error={!!errors.email || !!emailError}
                    helperText={errors.email || emailError}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TitleTypography sx={{ mt: 2, color: "#5B738B" }}>
                    Occupation
                  </TitleTypography>
                  <CustomTextbox
                    fullWidth
                    margin="normal"
                    placeholder="Enter your Occupation"
                    value={occupation}
                    onChange={handleOccupationChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TitleTypography sx={{ mt: 2, color: "#5B738B" }}>
                    City
                  </TitleTypography>
                  <CustomTextbox
                    fullWidth
                    margin="normal"
                    placeholder="Enter your City"
                    value={city}
                    onChange={handleCityChange}
                  />
                </Grid>
              </Grid>
            </Box>
          )}

          {showPasswordFields && (
            <>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                flexDirection={"column"}
                spacing={2}
              >
                <Grid item xs={12} sm={6}>
                  <TitleTypography sx={{ mt: 2, color: "#5B738B" }}>
                    Password
                  </TitleTypography>
                  <CustomTextbox
                    fullWidth
                    margin="normal"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={handlePasswordChange}
                    error={!!errors.password}
                    helperText={errors.password}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={togglePasswordVisibility}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TitleTypography sx={{ mt: 2, color: "#5B738B" }}>
                    Confirm Password
                  </TitleTypography>
                  <CustomTextbox
                    fullWidth
                    margin="normal"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={toggleConfirmPasswordVisibility}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showConfirmPassword ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <SignupContainer>
                  <OrangeCheckbox defaultChecked />
                  <SmallText>
                    I agree to the
                    <SmallSpanText> Terms and Conditions </SmallSpanText>
                  </SmallText>
                </SignupContainer>
              </Grid>
            </>
          )}

          <ContentContainer>
            <CustomButton variant="contained" fullWidth onClick={handleSignup}>
              Sign Up
            </CustomButton>
          </ContentContainer>

          {!showPasswordFields && (
            <CheckboxContainer>
              <SmallText>
                Already have an account ?{" "}
                <SmallSpanText onClick={handleLoginClick}> Login</SmallSpanText>
              </SmallText>
            </CheckboxContainer>
          )}
          <div
            style={{
              padding: "40px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <IcanioLogo isLoggedIn />
          </div>
          {apiError && <Box sx={{ mt: 2, color: "red" }}>{apiError}</Box>}
        </Grid>
      </StyledContainer>
    </LoginBox>
  );
}

export default SignupIndex;
