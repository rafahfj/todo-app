import { useDispatch } from "react-redux";
import { setScreen } from "../../features/visited/visitedSlice";

export default function Back() {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(setScreen(-1))}
      className="block border-4 border-primary-1 px-5 py-3 font-semibold text-primary-1 tracking-wider"
    >
      Back
    </button>
  );
}
