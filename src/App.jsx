import "./App.css";
import General from "./components/General.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";

export default function App() {
  return (
    <>
      <h1>CV Application</h1>
      <div className="paper">
        <General />
        <Education />
        <Experience />
      </div>
    </>
  );
}
