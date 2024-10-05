import { useSelector } from "react-redux";
import { Navigate } from "react-router";

export default function PrivateNotLog({ children }) {
  const user = useSelector((state) => state.auth.user);

  if (user.uid) {
    return <Navigate to={"/home"} />;
  } else if (!user.uid) {
    return children;
  }
}
