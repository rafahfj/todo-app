import { useDispatch, useSelector } from "react-redux";
import image from "../assets/images/user-profile.jpg";
import { toggleTodo } from "../features/todos/todoSlice";
import { Outlet, useNavigate } from "react-router";

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const todolist = useSelector((state) => state.todo.lists);

  return (
    <>
      <header className="top-0 right-0 left-0 fixed flex justify-between bg-primary-3 p-4">
        <div className="flex">
          <button className="m-auto">
            <img
              className="size-6"
              src={require("../assets/images/icons/sort.png")}
              alt=""
            />
          </button>
        </div>
        <div className="flex">
          <h1 className="m-auto">Home</h1>
        </div>
        <div>
          <div className="rounded-full overflow-hidden size-9">
            <img src={image} alt="" />
          </div>
        </div>
      </header>
      {!todolist.lenght ? (
        <div className="flex h-[100vh]">
          <div className="m-auto text-center">
            <h1>What do you want to do today?</h1>
            <h2>Tap + to add your tasks</h2>
          </div>
        </div>
      ) : (
        <div className="py-20">
          {todolist.map((list) => {
            return (
              <div key={list.id}>
                <input
                  type="checkbox"
                  value={list.checked}
                  onChange={() => dispatch(toggleTodo(list.id))}
                />
                <h1>{list.name}</h1>
                <h2>{list.deadline}</h2>
              </div>
            );
          })}
        </div>
      )}
      <div className="relative z-50">
        <Outlet />
      </div>
      <footer className="right-0 bottom-0 left-0 fixed bg-primary-3">
        <div className="flex justify-around mx-auto p-3 container">
          <div className="home-menu">
            <img src={require("../assets/images/icons/home.png")} alt="" />
            <h1>Home</h1>
          </div>
          <div className="home-menu">
            <img src={require("../assets/images/icons/calendar.png")} alt="" />
            <h1>Calendar</h1>
          </div>
          <div className="relative p-3 home-menu">
            <div className="absolute flex bg-primary-1 rounded-full -translate-x-1/2 -translate-y-12 size-14">
              <button
                className="m-auto font-extralight text-4xl text-white"
                onClick={() => navigate("/home/addtask")}
              >
                +
              </button>
            </div>
          </div>
          <div className="home-menu">
            <img src={require("../assets/images/icons/time.png")} alt="" />
            <h1>Focuse</h1>
          </div>
          <div className="home-menu">
            <img src={require("../assets/images/icons/user.png")} alt="" />
            <h1>Profile</h1>
          </div>
        </div>
      </footer>
    </>
  );
}
