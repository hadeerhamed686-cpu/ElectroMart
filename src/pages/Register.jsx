import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    console.log(name, email, password);

    alert("Account created successfully");

    navigate("/login");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white">

      <div className="w-[400px] p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">

        <h1 className="text-3xl font-bold text-center mb-2">
          Create Account ⚡
        </h1>

        <p className="text-gray-400 text-center mb-6">
          Join ElectroMart
        </p>

        <form onSubmit={handleRegister} className="space-y-5">

          <div>
            <label className="text-sm text-gray-300">
              Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full mt-1 px-4 py-3 rounded-xl bg-black/40 border border-white/10 outline-none focus:border-blue-500 transition"
            />
          </div>
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


          <div>
            <label className="text-sm text-gray-300">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create password"
              className="w-full mt-1 px-4 py-3 rounded-xl bg-black/40 border border-white/10 outline-none focus:border-blue-500 transition"
            />
          </div>


          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-semibold"
          >
            Create Account
          </button>

        </form>


        <p className="text-center text-gray-400 text-sm mt-5">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-400 cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>


      </div>

    </div>
  );
}