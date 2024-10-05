import { Route, Routes, useLocation } from "react-router-dom";
import Root from "./pages/Root";
import OnBoading from "./pages/OnBoading";
import StartScreen from "./pages/StartScreen";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useState } from "react";
import FirstLoading from "./pages/Loading";
import PrivateFirstVisit from "./route/PrivateFirstVisit";
import PrivateNotLog from "./route/PrivateNotLog";
import Home from "./pages/Home";
import PrivateLogIn from "./route/PrivateLogIn";
import { AnimatePresence } from "framer-motion";
import AddTask from "./pages/AddTask";

function App() {
  const [direct, setDirect] = useState(false);
  const location = useLocation();

  setTimeout(() => {
    setDirect(true);
  }, 10);

  return (
    <AnimatePresence initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={direct ? <Root /> : <FirstLoading />}>
          <Route
            path="intro"
            element={
              <PrivateFirstVisit>
                <OnBoading />
              </PrivateFirstVisit>
            }
          />
          <Route
            path="start"
            element={
              <PrivateNotLog>
                <StartScreen />
              </PrivateNotLog>
            }
          >
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route
            path="home"
            element={
              <PrivateLogIn>
                <Home />
              </PrivateLogIn>
            }
          >
            <Route path="addtask" element={<AddTask />} />
          </Route>
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
