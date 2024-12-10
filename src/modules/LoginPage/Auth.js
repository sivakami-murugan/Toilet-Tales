import { Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import BigLogo from "../../assets/Icons/BigLogo";
import IcanioLogo from "../../assets/Icons/IcanioLogo";
import LoginImage from "../../assets/Images/LoginImg.png";
import {
  ContentContainer,
  CustomButton,
  CustomLoginButton,
  ImageContainer,
  LoginBox,
  StyledContainer,
  SubTextItem,
  TextItem,
} from "../LoginPage/Styles";
function AuthIndex({ width }) {
  const navigate = useNavigate();

  const handleLogin = () => {
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
        <Grid item xs>
          <LoginBox>
            <ContentContainer>
              <div>
                <div>
                  <BigLogo />
                </div>
                <TextItem>Welcome !</TextItem>
                <SubTextItem>Choose an option</SubTextItem>
              </div>

              <CustomButton
                variant="contained"
                onClick={() => navigate("/auth/signup")}
              >
                Sign Up
              </CustomButton>
              <CustomLoginButton
                variant="outlined"
                fullWidth
                onClick={handleLogin}
                sx={{ mt: 1 }}
              >
                Login
              </CustomLoginButton>
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
            </ContentContainer>
          </LoginBox>
        </Grid>
      </StyledContainer>
    </LoginBox>
  );
}

export default AuthIndex;
