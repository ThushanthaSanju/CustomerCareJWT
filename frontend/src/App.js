import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Home from "./layouts/Home";
import { Routes, Route } from "react-router-dom";
import Packages from "./pages/Packages";
import AddPackage from "./components/AddPackage";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateResort from "./components/createResort";
import ShowResort from "./pages/showResorts";
import UpdateResort from "./components/updateResort";
import UpdatePackage from "./components/UpdatePackage";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/addpackage" element={<AddPackage />} />
        <Route path="/resorts" element={<ShowResort />} />
        <Route path="/create-resorts" element={<CreateResort />} />
        <Route
          path="/update-resorts/:id"
          exact={false}
          element={<UpdateResort />}
        />
        <Route
          path="/packages/updatepackage/:id"
          exact={false}
          element={<UpdatePackage />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
