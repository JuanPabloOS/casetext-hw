import "./App.css";
import Welcome from "@/screens/Welcome";
import Home from "@/screens/Home";

import { BrowserRouter, Routes, Route } from "react-router";
import PrivateRoute from "./components/PrivateRoute";
import PinBox from "./components/PinBox";
import Balance from "./components/Balance";
import Withdraw from "./components/Withdraw";
import Deposit from "./components/Deposit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />}>
          <Route path="pin" element={<PinBox />} />
        </Route>
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        >
          <Route index element={null} />
          <Route path="balance" element={<Balance />} />
          <Route path="withdraw" element={<Withdraw />} />
          <Route path="deposit" element={<Deposit />} />
          <Route path="re-enter" element={<PinBox />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
