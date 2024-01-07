import { Route, Routes } from "react-router-dom"
import LoginPage from "./Pages/LoginPage"
import './App.css'
import ForgotPasswordPage from "./Pages/ForgotPasswordPage"
import EmailResetPage from "./Pages/EmailResetPage"
import HomePage from "./Pages/HomePage"
import ProfilePage from "./Pages/ProfilePage"
import TaskPage from "./Pages/TaskPage"
import DashboardPage from "./Pages/DashboardPage"
import CapstonePage from "./Pages/CapstonePage"
import QueriesPage from "./Pages/QueriesPage"
import RequirementsPage from "./Pages/RequirementsPage"
import PortfolioPage from "./Pages/Portfolio"
import ApplicationsPage from "./Pages/ApplicationsPage"
import InterviewTasksPage from "./Pages/InterviewTasksPage"
import LeaveApplicationsPage from "./Pages/LeaveApplicationsPage"
import CertificatePage from "./Pages/CertificatePage"
import TestimonialPage from "./Pages/TestimonialPage"
import SyllabusPage from "./Pages/Syllabus"
import PlacementBoardPage from "./Pages/PlacementBoardPage"
import RegisterPage from "./Pages/RegisterPage"
import TaskSubmissionPage from "./Pages/TaskSubmissionPage"

function App() {
  return (
    //Routes and Route is imported and used to navigate between pages
    <Routes>
      <Route exact path="/" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/forgot" element={<ForgotPasswordPage/>}/>
      <Route path="/reset/:id" element={<EmailResetPage/>}/>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/profile" element={<ProfilePage/>}/>
      <Route path="/task" element={<TaskPage/>}/>
      <Route path="/dashboard" element={<DashboardPage/>}/>
      <Route path="/capstone" element={<CapstonePage/>}/>
      <Route path="/queries" element={<QueriesPage/>}/>
      <Route path="/requirements" element={<RequirementsPage/>}/>
      <Route path="/portfolio" element={<PortfolioPage/>}/>
      <Route path="/application" element={<ApplicationsPage/>}/>
      <Route path="/interviewTasks" element={<InterviewTasksPage/>}/>
      <Route path="/leaveApplication" element={<LeaveApplicationsPage/>}/>
      <Route path="/certificate" element={<CertificatePage/>}/>
      <Route path="/testimonial" element={<TestimonialPage/>}/>
      <Route path="/syllabus" element={<SyllabusPage/>}/>
      <Route path="/placement" element={<PlacementBoardPage/>}/>
      <Route path="/taskSubmit" element={<TaskSubmissionPage/>}/>
     
    </Routes>
  )
}

export default App
