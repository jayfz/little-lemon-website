import "./App.css";
import { DeviceProvider } from "./context/deviceContext";
import Header from "./components/Header";

import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <DeviceProvider>
        <Header />
        <Main />
        {/* <Footer /> */}
      </DeviceProvider>
    </>
  );
}

export default App;
