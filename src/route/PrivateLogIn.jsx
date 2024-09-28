import { useSelector } from "react-redux";
import { Navigate } from "react-router";

export default function PrivateLogIn({ children }) {
  const user = useSelector((state) => state.auth.user);

  if (user?.uid) {
    return children;
  } else {
    return <Navigate to={"/start"} />;
  }
}
