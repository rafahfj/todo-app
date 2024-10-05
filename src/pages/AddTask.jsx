import { useState } from "react";
import { useDispatch } from "react-redux";
import PageTransition from "../components/framer/PageTransition";

export default function AddTask() {
  const dispatch = useDispatch();

  const [formAdd, setFormAdd] = useState({
    title: "",
    description: "",
  });

  const submitTask = () => {
    dispatch();
  };

  return (
    <PageTransition>
      <div className="top-0 right-0 bottom-0 left-0 fixed bg-slate-800/30">
        <div
          id="card"
          className="right-0 bottom-0 left-0 fixed bg-primary-4 p-5 rounded-t-3xl-2xl h-[35%]"
        >
          <div>
            <h1 className="mb-3 font-semibold text-xl">Add Task</h1>
            <input
              type="text"
              placeholder="Tittle"
              className="bg-primary-4 mb-2 focus:p-2 w-full transition-all duration-500"
            />
            <input
              type="text"
              placeholder="Description"
              className="bg-primary-4 mb-2 focus:p-2 w-full transition-all duration-500"
            />
          </div>
          <div className="right-3 bottom-3 left-3 absolute flex justify-between">
            <div className="flex gap-3">
              <button className="button-addtask">
                <img
                  src={require("../assets/images/icons/stopwatch.png")}
                  alt=""
                />
              </button>
              <button className="button-addtask">
                <img src={require("../assets/images/icons/label.png")} alt="" />
              </button>
              <button className="button-addtask">
                <img src={require("../assets/images/icons/flag.png")} alt="" />
              </button>
            </div>
            <div>
              <button className="button-addtask">
                <img
                  src={require("../assets/images/icons/application.png")}
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
