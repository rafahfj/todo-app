import { Outlet, useLocation, useNavigate } from "react-router";

export default function StartScreen() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  if (pathname === "/start/login" || pathname === "/start/register") {
    return <Outlet />;
  } else {
    return (
      <div className=" size-[100%]">
        <div className="p-8 h-72 w-96 mt-24 m-auto shadow-lg rounded-xl ">
          <h1 className="text-center text-2xl font-semibold">Start Screen</h1>
          <button onClick={() => navigate("/start/login")}>Login</button>
          <button onClick={() => navigate("/start/register")}>Register</button>
        </div>
      </div>
    );
  }
}
