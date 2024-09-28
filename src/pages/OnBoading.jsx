import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setVisited } from "../features/visited/visitedSlice";

export default function OnBoading() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onStart = () => {
    localStorage.setItem("visited", true);
    dispatch(setVisited(true));
    navigate("/start");
  };

  return (
    <div>
      <h1>This on Boading</h1>
      <div>
        <button onClick={onStart}>Start</button>
      </div>
    </div>
  );
}
