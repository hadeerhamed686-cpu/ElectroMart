import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("user", JSON.stringify({ email }));

    setIsLoggedIn(true);

    navigate("/");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white">

      <div className="w-[380px] p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">

        <h1 className="text-3xl font-bold text-center mb-2">
          ⚡ ElectroMart
        </h1>

        <p className="text-gray-400 text-center mb-6">
          Login to your account
        </p>

        <form onSubmit={handleLogin} className="space-y-5">

          {/* Email */}
          <div>
            <label className="text-sm text-gray-300">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-3 rounded-xl bg-black/40 border border-white/10 outline-none focus:border-blue-500 transition"
            />
          </div>
          {/* Password */}
          <div>
            <label className="text-sm text-gray-300">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full mt-1 px-4 py-3 rounded-xl bg-black/40 border border-white/10 outline-none focus:border-blue-500 transition"
            />
          </div>


          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-semibold"
          >
            Login
          </button>

        </form>


        {/* Register Link */}
        <p className="text-center text-gray-400 text-sm mt-5">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-blue-400 cursor-pointer hover:underline"
          >
            Register
          </span>
        </p>


      </div>

    </div>
  );
}