import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Home from "./layouts/Home";
import { Routes, Route } from "react-router-dom";
import Packages from "./pages/Packages";
import AddPackage from "./components/AddPackage";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/addpackage" element={<AddPackage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
