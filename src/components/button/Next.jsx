import { useDispatch } from "react-redux";
import { setScreen } from "../../features/visited/visitedSlice";

export default function Next({ operation }) {
  const dispatch = useDispatch();

  return (
    <button
      className="block border-3 border-primary-1 bg-primary-1 px-5 py-3 font-semibold text-white tracking-wider"
      onClick={() => dispatch(setScreen(1))}
    >
      Next
    </button>
  );
}
