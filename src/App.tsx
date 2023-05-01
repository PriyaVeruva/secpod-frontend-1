import { Routes, Route } from "react-router-dom";
import styles from "./App.module.scss";
import LandingPage from "./pages/LandingPage/LandingPage";
import Test from "./components/Test.component";

function App(): JSX.Element {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
