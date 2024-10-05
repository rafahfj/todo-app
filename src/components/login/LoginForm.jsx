import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleLogin } from "../../features/auth/authSlice";
export default function LoginForm() {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.auth);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState("");

  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.id]: e.target.value,
    });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleIn = async (e) => {
    e.preventDefault();
    setErrors(""); // Reset error state
    //   dispatch(setError());

    let validationErrors = {};

    if (!validateEmail(input.email)) {
      setErrors("Email is not valid");
      return;
    }

    if (Object.keys(validateEmail).length === 0) {
      const { email, password } = input;
      const resultAction = await dispatch(handleLogin({ email, password }));

      if (handleLogin.fulfilled.match(resultAction)) {
      } else if (handleLogin.rejected) {
        console.log(resultAction.payload);
        setErrors(resultAction.payload);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="my-10 w-full h-auto">
      <form onSubmit={handleIn} className="mb-4 w-full h-auto">
        <label htmlFor="email" className="block">
          <span className="mb-1.5 ml-1">Email</span>
          <input
            type="text"
            placeholder="Enter your Email"
            id="email"
            onChange={onChange}
            className="block border-2 mb-2 p-2 rounded-sm w-full"
          />
        </label>
        <label htmlFor="password" className="block">
          <span className="mb-1.5 ml-1">Password</span>
          <input
            type="password"
            placeholder="Enter your Password"
            id="password"
            onChange={onChange}
            className="block border-2 mb-2 p-2 rounded-sm w-full"
          />
        </label>
        <button
          type="submit"
          disabled={loading}
          className="block bg-primary-1 shadow-sm mx-auto my-2 mt-8 px-3 py-2.5 rounded-sm w-full max-w-screen-md font-semibold text-white"
        >
          {loading ? "Loading..." : "Login"}
        </button>
        {errors && <p style={{ color: "red" }}>{errors}</p>}
      </form>
    </div>
  );
}
