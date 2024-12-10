import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import BackArrowIcon from "../../assets/Icons/BackArrowIcon";
import IcanioLogo from "../../assets/Icons/IcanioLogo";
import { LogoIcon } from "../../assets/Icons/LogoIcon";
import LogoutIcon from "../../assets/Icons/LogoutIcon";
import { ProfileIcon } from "../../assets/Icons/ProfileIcon";
import { ProjectIcon } from "../../assets/Icons/ProjectIcon";
import {
  HeaderItems,
  MenuTextContainer,
  StyledMenu,
  StyledSpan,
} from "../Navbar/Style";
const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [showBackButton, setShowBackButton] = useState(false);
  const [userName, setUserName] = useState("");
  const [occupation, setOccupation] = useState("");

  useEffect(() => {
    const showBackButtonPaths = [
      "/projects/chapter-card",
      "/projects/reports",
      "/projects/reports-page",
      "/projects/reports-four-page",
    ];

    const reportsFivePageRegex =
      /^\/projects\/reports-five-page\/[^/]+\/[^/]+$/;

    const shouldShowBackButton =
      showBackButtonPaths.some((path) => location.pathname.startsWith(path)) ||
      reportsFivePageRegex.test(location.pathname);

    setShowBackButton(shouldShowBackButton);

    const storedUserName = localStorage.getItem("userName");
    const storedOccupation = localStorage.getItem("occupation");

    if (storedUserName) setUserName(storedUserName);
    if (storedOccupation) setOccupation(storedOccupation);
  }, [location]);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleBackClick = () => {
    navigate(-1);
    setShowBackButton(false);
  };

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("email");
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    navigate("/auth");
  };

  const drawerItems = [
    { text: "Projects", path: "/projects", icon: ProjectIcon },
    // { text: "Guidelines", path: "/guidelines", icon: GuidelineIcon },
    // { text: "Settings", path: "/settings", icon: SettingsIcon },
  ];

  const drawer = (
    <div>
      <Toolbar>
        <LogoIcon />
      </Toolbar>
      <Divider />
      <List sx={{ paddingTop: "30px" }}>
        {drawerItems?.map((item, index) => {
          const isActive = location.pathname.includes(item.path);
          const Icon = item.icon;
          return (
            <ListItem
              key={item.text}
              disablePadding
              sx={{
                backgroundColor: isActive ? "#F49600" : "transparent",
                width: "90%",
                margin: "auto ",
                borderRadius: "15px",
              }}
            >
              <ListItemButton
                component={Link}
                to={item.path}
                onClick={handleDrawerClose}
                sx={{
                  color: isActive ? "white !important" : "inherit",
                }}
              >
                <ListItemIcon
                  sx={{
                    color: isActive ? "white !important" : "inherit",
                  }}
                >
                  <Icon active={isActive} />
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ color: "white" }} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <footer style={{ position: "absolute", bottom: 0, width: "100%" }}>
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
            <IcanioLogo />
          </a>
        </div>
      </footer>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <style>
        {`
          @media print {
            .drawer-container {
              display: none; /* Hide the drawer container during print */
            }
          }
        `}
      </style>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#FFFFFF",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px",
          minHeight: "70px",
        }}
        className="drawer-container" // Add the class here
      >
        <Toolbar>
          {showBackButton && (
            <Button
              primary="Back"
              text="Back"
              onClick={handleBackClick}
              startIcon={<BackArrowIcon />}
              sx={{
                color: "#223548",
                fontSize: "16px",
                fontWeight: "600",
                textTransform: "capitalize",
              }}
            >
              Back
            </Button>
          )}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <div>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                mr: 2,
                color: "#223548",
                fontWeight: "600",
                fontSize: "16px",
              }}
            >
              {userName || "Guest"}{" "}
            </Typography>
            <Typography sx={{ color: "#738496" }}>
              {occupation || "User"}
            </Typography>
          </div>
          <IconButton onClick={handleAvatarClick}>
            <Avatar>
              <ProfileIcon />
            </Avatar>
          </IconButton>
          <StyledMenu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            PaperProps={{
              sx: {
                fontFamily: "Open sans !important",
                borderRadius: "0px 0px 14px 10px",
                width: "150px",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <HeaderItems onClick={handleLogout}>
              <MenuTextContainer>
                <div style={{ marginTop: "6px" }}>
                  <LogoutIcon />
                </div>
                <StyledSpan>Logout</StyledSpan>
              </MenuTextContainer>
            </HeaderItems>
          </StyledMenu>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
        className="drawer-container" // Add the class here
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "black !important",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
