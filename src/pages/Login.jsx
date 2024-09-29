import { useNavigate } from "react-router";
import RouterBack from "../components/button/RouterBack";
import PageTransition from "../components/framer/PageTransition";
import LoginForm from "../components/login/LoginForm";

export default function Login() {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="bg-primary-4 p-8 h-[100vh]">
        <RouterBack />
        <div className="md:flex">
          <h1 className="mt-8 font-semibold text-3xl">Login </h1>
          <LoginForm />
        </div>
        <p>don't have an account?</p>
        <button
          onClick={() => navigate("/start/register")}
          className="font-semibold underline"
        >
          Register
        </button>
      </div>
    </PageTransition>
  );
}
