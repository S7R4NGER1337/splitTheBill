import "./App.css";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ScanReceipt from "./components/scanReceipt/ScanReceipt";

function App() {
  return (
    <div className="App">
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scanReceipt" element={<ScanReceipt />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
