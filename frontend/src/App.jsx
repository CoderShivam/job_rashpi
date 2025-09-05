import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login.jsx";
import Arena from "./components/Pages/Arena.jsx";
import AppRoutes from "./routes.jsx";
import { Toaster } from "react-hot-toast";
import Home from "./components/Pages/home.jsx";
import QuestionsPage from "./components/Pages/Platforms/Questions.jsx";
import PlatformList from "./components/Pages/Platforms/PlatformList.jsx";
import ResumeBuilder from "./components/Pages/ResumeBuilder.jsx";
import CodeforcesAPI from "./components/Pages/Platforms/Codeforces.jsx";
import ContestsWithLinks from "./components/Pages/Platforms/Contests.jsx";
import ResourcesPage from "./components/Pages/Resources.jsx";
import CompaniesPage from "./components/Pages/CompaniesPage.jsx";
import Register from "./components/Auth/Signup.jsx";
import Experience from "./components/Pages/Experience.jsx";
import SetLoginFromURL from "../Setgooglelogin.jsx";

const App = () => {
  return (
    <Router>
      <SetLoginFromURL />
      <Routes>
        {/* Arena & Platforms */}
        <Route path="/arena" element={<Arena />} />
        <Route path="/questions" element={<QuestionsPage />} />
        <Route path="/resumebuilder" element={<ResumeBuilder />} />
        <Route path="/platformlist" element={<PlatformList />} />
        <Route path="/platform/QuestionsPage" element={<QuestionsPage />} />
        <Route path="/platform/CodeforcesAPI" element={<CodeforcesAPI />} />
        <Route path="/platform/ContestsWithLinks" element={<ContestsWithLinks />} />

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/companiespage" element={<CompaniesPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </Router>
  );
};

export default App;
