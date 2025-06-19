import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./pages/HomePage";
import QuizPage from "./components/QuizPage";
import HomeComponent from "./components/HomeComponent";
import QuizPageComponent from "./components/QuizPageComponent";
// import ResultPage from "./components/Result";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/quiz" element={<QuizPageComponent />} />
        {/* Add more routes as needed */}
        {/* <Route path="/result" element={<ResultPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
