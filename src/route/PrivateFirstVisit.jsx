import { useSelector } from "react-redux";
import { Navigate } from "react-router";

export default function PrivateFirstVisit({ children }) {
  const isVisited = useSelector((state) => state.visited.isVisited);

  if (!isVisited) {
    return children;
  } else if (isVisited) {
    return <Navigate to={"/start"} />;
  }
}
