import "./styles.css";
import { Dashboard } from "./Components/Dashboard";
import { TopContainer } from "./Components/TopContainer";
import { TestData } from "./Components/TestData";
import { Footer } from "./Components/Footer";

export default function App() {
  return (
    <div className="App">
      <TopContainer />
      <TestData />
      <Footer />
    </div>
  );
}
