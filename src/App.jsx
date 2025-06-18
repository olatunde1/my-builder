import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./pages/HomePage";
import QuizPage from "./components/QuizPage";
import HomeComponent from "./components/HomeComponent";
import QuizPageComponent from "./components/QuizPageComponent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/quiz" element={<QuizPageComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
