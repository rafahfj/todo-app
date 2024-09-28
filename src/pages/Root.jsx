import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import { setVisited } from "../features/visited/visitedSlice";
import { setUserLocal } from "../features/auth/authSlice";

export default function Root() {
  const dispatch = useDispatch();
  const isVisited = useSelector((state) => state.visited.isVisited);
  const user = useSelector((state) => state.auth.user);
  const localVisited = localStorage.getItem("visited");
  const localUser = localStorage.getItem("user");

  useEffect(() => {
    if (!isVisited) {
      if (localVisited) {
        dispatch(setVisited(true));
      }
      if (localUser) {
        dispatch(setUserLocal(localUser));
      }
    }
  }, [dispatch]);

  if (user?.uid) {
    return <Outlet />;
  } else if (isVisited) {
    return (
      <div>
        <Outlet />
      </div>
    );
  } else if (!isVisited) {
    return (
      <div>
        <Navigate to={"/intro"} />
        <Outlet />
      </div>
    );
  }
}
