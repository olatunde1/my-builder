import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./pages/HomePage";
import QuizPage from "./components/QuizPage";
import HomeComponent from "./components/HomeComponent";
import QuizPageComponent from "./components/QuizPageComponent";
import BuilderTypesComponent from "./components/BuilderTypesComponent";
import VisionaryComponent from "./components/pages/VisionaryComponent";
import StrategistPageComponent from "./components/pages/StrategistPageComponent";
import ArchitectPageComponent from "./components/pages/ArchitectPageComponent";
import OperatorPageComponent from "./components/pages/OperatorPageComponent";
import ConnectorPageComponent from "./components/pages/ConnectorPageComponent";
import "./App.css";
// import ResultPage from "./components/Result";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/quiz" element={<QuizPageComponent />} />
        <Route path="/builder-types" element={<BuilderTypesComponent />} />
        <Route path="/pages/visionary" element={<VisionaryComponent />} />
        <Route path="/pages/strategist" element={<StrategistPageComponent />} />
        <Route path="/pages/architect" element={<ArchitectPageComponent />} />
        <Route path="/pages/operator" element={<OperatorPageComponent />} />
        <Route path="/pages/connector" element={<ConnectorPageComponent />} />

        {/* Add more routes as needed */}
        {/* <Route path="/result" element={<ResultPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
