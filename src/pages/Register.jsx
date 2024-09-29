import { useNavigate } from "react-router";
import RouterBack from "../components/button/RouterBack";
import PageTransition from "../components/framer/PageTransition";
import RegistForm from "../components/register/RegistForm";

export default function Register() {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="bg-primary-4 p-8 h-auto">
        <RouterBack />
        <div className="md:flex">
          <h1 className="mt-5 font-semibold text-3xl">Register</h1>
          <RegistForm />
        </div>
        <p>Already have an account?</p>
        <button
          onClick={() => navigate("/start/login")}
          className="font-semibold underline"
        >
          Login
        </button>
      </div>
    </PageTransition>
  );
}
