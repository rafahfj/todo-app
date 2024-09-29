import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setVisited } from "../features/visited/visitedSlice";
import Next from "../components/button/Next";
import Back from "../components/button/BackOnStart";

const ScreenOne = () => {
  return (
    <div className="relative box-border p-8 w-[100vw] h-[100vh] text-center">
      <h1 className="mt-[30vh] font-semibold text-3xl">Manage your tasks</h1>
      <p className="mt-5">
        You can easily manage all of your daily tasks in DoMe for free
      </p>
      <div className="float-right right-0 bottom-0 absolute p-8">
        <Next />
      </div>
    </div>
  );
};

const ScreenTwo = () => {
  return (
    <div className="relative box-border p-8 w-[100vw] h-[100vh] text-center">
      <h1 className="mt-[30vh] font-semibold text-3xl">Create daily routine</h1>
      <p className="mt-5">
        You can easily manage all of your daily tasks in DoMe for free
      </p>
      <div className="bottom-0 absolute flex justify-between pb-8 w-[88vw]">
        <Back />
        <Next />
      </div>
    </div>
  );
};

const ScreenThree = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onStart = () => {
    localStorage.setItem("visited", true);
    dispatch(setVisited(true));
    navigate("/start");
  };
  return (
    <div className="relative box-border p-8 w-[100vw] h-[100vh] text-center">
      <h1 className="mt-[30vh] font-semibold text-3xl">Organize your tasks</h1>
      <p className="mt-5">
        You can organize your daily tasks by adding your tasks into separate
        categories
      </p>
      <div className="bottom-0 absolute flex justify-between pb-8 w-[88vw]">
        <Back />
        <button
          onClick={onStart}
          className="block border-3 border-primary-1 bg-primary-1 px-5 py-3 font-semibold text-white tracking-wider"
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default function OnBoading() {
  const onScreen = useSelector((state) => state.visited.onScreen);

  return (
    <div className="overflow-x-hidden">
      <div
        className={`bg-primary-4 flex  w-[300vw] transition-all duration-300 ${
          onScreen === 2 ? "-translate-x-1/3" : ""
        } ${onScreen === 3 ? "-translate-x-2/3" : ""}`}
      >
        <ScreenOne />
        <ScreenTwo />
        <ScreenThree />
      </div>
    </div>
  );
}
