import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ResponsiveDrawer from "../components/Navbar/SideBar";
import MainIndex from "../layouts/Main";
import GuidelineIndex from "../modules/Guideline";
import AuthIndex from "../modules/LoginPage/Auth";
import LoginPage from "../modules/LoginPage/LoginPage";
import OtpPage from "../modules/LoginPage/OtpPage";
import SignUp from "../modules/LoginPage/SignUp";
import ProjectsIndex from "../modules/Projects";
import ReportThreeIndex from "../modules/Projects/Chapter3/Reports";
import ReportFourIndex from "../modules/Projects/Chapter4/Reports";
import ReportFiveIndex from "../modules/Projects/Chapter5/Reports";
import ChapterCards from "../modules/Projects/Partials/Chapter1/ChapterCards";
import ReportsIndex from "../modules/Projects/Partials/Reports";
import SettingsIndex from "../modules/Settings";

export default function RootLayout() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/auth" />} />
        <Route path="/auth" element={<MainIndex />}>
          <Route path="/auth" element={<AuthIndex />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/signup" element={<SignUp />} />
          <Route path="/auth/otp" element={<OtpPage />} />
        </Route>
        <Route path="/" element={<ResponsiveDrawer />}>
          <Route path="/projects" element={<ProjectsIndex />} />
          <Route
            path="/projects/chapter-card/:projectTitle/:id"
            element={<ChapterCards />}
          />
          <Route
            path="/projects/reports/:title/:chapterId"
            element={<ReportsIndex />}
          />
          <Route
            path="/projects/reports-page/:title/:chapterId"
            element={<ReportThreeIndex />}
          />
          <Route
            path="/projects/reports-four-page/:title"
            element={<ReportFourIndex />}
          />
          <Route
            path="/projects/reports-five-page/:projectId/:title"
            element={<ReportFiveIndex />}
          />
          <Route path="/guidelines" element={<GuidelineIndex />} />
          <Route path="/settings" element={<SettingsIndex />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
