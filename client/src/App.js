import "./App.css";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ScanReceipt from "./components/scanReceipt/ScanReceipt";
import ReceiptPage from "./components/receiptPage/ReceiptPage";

function App() {
  return (
    <div className="App">
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scanReceipt" element={<ScanReceipt />} />
          <Route path="/receipt/:id" element={<ReceiptPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
