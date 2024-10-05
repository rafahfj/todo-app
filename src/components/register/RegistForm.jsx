import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleRegister, setError } from "../../features/auth/authSlice";

export default function RegistForm() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
    confirmPW: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setErrors({});
  }, []);

  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.id]: e.target.value,
    });
    console.log(e.target.value);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    let errorMessage = "";

    // Minimal 8 karakter
    if (!/.{8,}/.test(password)) {
      errorMessage += "Kata sandi harus memiliki minimal 8 karakter.\n";
    }

    // Minimal satu huruf kecil
    if (!/[a-z]/.test(password)) {
      errorMessage +=
        "Kata sandi harus mengandung setidaknya satu huruf kecil.\n";
    }

    // Minimal satu huruf besar
    if (!/[A-Z]/.test(password)) {
      errorMessage +=
        "Kata sandi harus mengandung setidaknya satu huruf besar.\n";
    }

    // Minimal satu angka
    if (!/\d/.test(password)) {
      errorMessage += "Kata sandi harus mengandung setidaknya satu angka.\n";
    }

    // Minimal satu karakter khusus
    if (!/[!@#$%^&*]/.test(password)) {
      errorMessage +=
        "Kata sandi harus mengandung setidaknya satu karakter khusus (misalnya !@#$%^&*).\n";
    }

    return errorMessage || "";
  };

  const handleRegist = async (e) => {
    e.preventDefault();
    let validationErrors = {};
    dispatch(setError());

    if (!validateEmail(input.email)) {
      validationErrors.email = "Email is not valid";
    }

    if (validatePassword(input.password)) {
      validationErrors.password = validatePassword(input.password);
    }

    if (input.password !== input.confirmPW) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(validationErrors).length === 0) {
      const { email, password, username } = input;
      const resultAction = await dispatch(
        handleRegister({ email, password, username })
      );
      if (handleRegister.fulfilled.match(resultAction)) {
      } else if (handleRegister.rejected) {
        validationErrors.api = resultAction.payload;
        setErrors(validationErrors);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="my-10 p-1 w-full h-auto">
      <form onSubmit={handleRegist} className="mb-4 w-full h-auto">
        <div>
          <label htmlFor="username">
            <span className="mb-1.5 ml-1">Username</span>
            <input
              type="text"
              placeholder="Enter your Username"
              id="username"
              onChange={onChange}
              className="block border-2 mb-2 p-2 rounded-md w-full"
            />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            <span className="mb-1.5 ml-1">Email</span>
            <input
              type="text"
              placeholder="Enter your Email"
              id="email"
              onChange={onChange}
              className="block border-2 mb-2 p-2 rounded-md w-full"
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </label>
        </div>
        <div>
          <label htmlFor="password">
            <span className="mb-1.5 ml-1">Password</span>
            <input
              type="password"
              placeholder="Enter your Password"
              id="password"
              onChange={onChange}
              className="block border-2 mb-2 p-2 rounded-md w-full"
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </label>
        </div>
        <div>
          <label>
            <span className="mb-1.5 ml-1">Confirm Password</span>
            <input
              type="password"
              id="confirmPW"
              placeholder="Confirm your Password"
              onChange={onChange}
              className="block border-2 mb-2 p-2 rounded-md w-full"
            />
            {errors.confirmPassword && (
              <p style={{ color: "red" }}>{errors.confirmPassword}</p>
            )}
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="block bg-primary-1 shadow-md mx-auto my-5 p-2.5 rounded-sm w-full max-w-[100rem] font-medium text-white tracking-wider"
        >
          {loading ? "Loading..." : "Register"}
        </button>
      </form>
      {errors.api && <p style={{ color: "red" }}>{errors.api}</p>}
    </div>
  );
}
