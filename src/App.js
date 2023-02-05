import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import FormText from "./components/FormText";
import Navbar from "./components/Navbar";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import About from "./components/About";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#022615";
      showAlert("Dark Mode Enabled Successfully", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled Successfully", "success");
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar header="WeText" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="mt-3 container">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />} /> */}
            {/* <Route */}
              {/* path="/"
              element={ */}
                <FormText
                  title="Enter Text to Analyze "
                  mode={mode}
                  showAlert={showAlert}
                />
              {/* } */}
            {/* /> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
