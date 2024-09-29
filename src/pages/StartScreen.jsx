import { Outlet, useLocation, useNavigate } from "react-router";
import PageTransition from "../components/framer/PageTransition";
import RouterBack from "../components/button/RouterBack";

export default function StartScreen() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  if (pathname === "/start/login" || pathname === "/start/register") {
    return <Outlet />;
  } else {
    return (
      <PageTransition>
        <div className="bg-primary-4">
          <div className="relative md:mx-auto p-8 max-w-screen-md h-[100vh]">
            <RouterBack />
            <h1 className="font-semibold text-2xl text-center">
              Welcome to afAction
            </h1>
            <p className="my-5 text-center">
              Please login to your account or create new account to continue
            </p>
            <div className="right-0 bottom-0 left-0 absolute p-8">
              <button
                className="block border-4 border-primary-1 bg-primary-1 shadow-standard m-2 p-3 w-full"
                onClick={() => navigate("/start/login")}
              >
                <span className="block drop-shadow-xl font-semibold text-white -translate-x-1">
                  LOGIN
                </span>
              </button>
              <button
                className="block border-4 border-primary-1 shadow-standard m-2 p-3 w-full"
                onClick={() => navigate("/start/register")}
              >
                <span className="block font-bold text-primary-1 -translate-x-1">
                  CREATE ACCOUNT
                </span>
              </button>
            </div>
          </div>
        </div>
      </PageTransition>
    );
  }
}
