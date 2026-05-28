import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";

import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import Membres from "./pages/Membres";
import Parametre from "./pages/Parametre";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* LOGIN */}

        <Route
          path="/"
          element={<Login />}
        />

        {/* REGISTER */}

        <Route
          path="/register"
          element={<Register />}
        />

        {/* FORGOT PASSWORD */}

        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />

        {/* DASHBOARD */}

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        {/* PROJECTS */}

        <Route
          path="/projects"
          element={<Projects />}
        />

        {/* TASKS */}

        <Route
          path="/tasks"
          element={<Tasks />}
        />

        {/* MEMBRES */}

        <Route
          path="/membres"
          element={<Membres />}
        />

        {/* PARAMETRES */}

        <Route
          path="/parametre"
          element={<Parametre />}
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;