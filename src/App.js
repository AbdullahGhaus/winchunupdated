import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Pages/LoginSignup/Signup";
import Opportunity from "./Pages/LoginSignup/Components/Opportunity";
import Question1 from "./Pages/LoginSignup/Components/Question1";
import Question2 from "./Pages/LoginSignup/Components/Question2";
import LikeToWork from "./Pages/LoginSignup/Components/LikeToWork";
import Experience from "./Pages/LoginSignup/Components/Experience";
import 'bootstrap/dist/css/bootstrap.min.css';
import Education from "./Pages/LoginSignup/Components/Education";
import Services1 from "./Pages/LoginSignup/Components/Services1";
import Services2 from "./Pages/LoginSignup/Components/Services2";
import Services3 from "./Pages/LoginSignup/Components/Services3";
import Profile1 from "./Pages/LoginSignup/Components/Profile1";
import Profile2 from "./Pages/LoginSignup/Components/Profile2";
import HourlyRate from "./Pages/LoginSignup/Components/HourlyRate";
import HireTalent1 from "./Pages/LoginSignup/Components/HireTalent1";
import HireTalent2 from "./Pages/LoginSignup/Components/HireTalent2";
import VerifyEmail from "./Pages/LoginSignup/Components/VerifyEmail";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/opportunity" element={<Opportunity />} />
        <Route path="/question1" element={<Question1 />} />
        <Route path="/question2" element={<Question2 />} />
        <Route path="/liketowork" element={<LikeToWork />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/service1" element={<Services1 />} />
        <Route path="/service2" element={<Services2 />} />
        <Route path="/service3" element={<Services3 />} />
        <Route path="/profile1" element={<Profile1 />} />
        <Route path="/profile2" element={<Profile2 />} />
        <Route path="/hourlyrates" element={<HourlyRate />} />
        <Route path="/hiretalent" element={<HireTalent1 />} />
        <Route path="/hiretalent2" element={<HireTalent2 />} />
        <Route path="/verify-email" element={<VerifyEmail />} />

      </Routes>
    </Router>
  );
}

export default App;
