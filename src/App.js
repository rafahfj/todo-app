import { BrowserRouter, Route, Routes } from "react-router-dom";
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

function App() {
  const [direct, setDirect] = useState(false);

  setTimeout(() => {
    setDirect(true);
  }, 10);

  return (
    <BrowserRouter>
      <Routes>
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
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
