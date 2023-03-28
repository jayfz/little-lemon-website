import "./App.css";
import { DeviceProvider } from "./context/deviceContext";
import Header from "./components/Header";

import HomePage from "./components/HomePage";
import BookingPage from "./components/BookingPage";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import BookingConfirmationPage from "./components/BookingConfirmationPage";

function App() {
  return (
    <DeviceProvider>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
        <Route path="/booking-succesful" element={<BookingConfirmationPage />}></Route>
      </Routes>
      {/* <Footer /> */}
    </DeviceProvider>
  );
}

export default App;
