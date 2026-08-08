import { useState } from "react";
import axios from "../api/axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Alert from "../components/Alert";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const [alertMessage, setAlertMessage] = useState("");
    const [alertType, setAlertType] = useState("error");

    // navigate
    const navigate = useNavigate();

    // AuthContext
    const { login: saveToken } = useAuth();

    async function login(event) {
        event.preventDefault();
        setAlertMessage("");

        try {
            const response = await axios.post("/api/v1/auth/login", {
                identifier,
                password,
            });

            console.log("LOGIN RESPONSE =", response.data);

            setAlertType("success");
            setAlertMessage("Login successful!");

            // Save token and role
            localStorage.setItem("authToken", response.data.token);
            localStorage.setItem("role", response.data.role);
            saveToken(response.data.token);

            // Redirect based on role
            setTimeout(() => {
                if (response.data.role === "ADMIN") {
                    navigate("/admin/dashboard");
                } else {
                    navigate("/");
                }
            }, 1000);
        } catch (err) {
            if (err.response?.data?.error) {
                const errorObj = err.response.data.error;
                const msgs = typeof errorObj === "string" ? [errorObj] : Object.values(errorObj);
                setAlertMessage(msgs);
                setAlertType("error");
            } else {
                setAlertType("error");
                setAlertMessage("Something went wrong!");
            }
        }
    }

    const inputClass =
        "w-full h-11 px-3 rounded-md ring-1 ring-rose-500/20 " +
        "bg-[#040203] text-rose-100 placeholder-rose-200/40 " +
        "dark:bg-[#040203] dark:border-rose-500/20 dark:placeholder-rose-200/40 dark:text-rose-100 " +
        "dark:ring-rose-500/30 focus:outline-none focus:ring-2 " +
        "focus:ring-rose-500 focus:ring-opacity-50 transition";

    const buttonClass =
        "px-6 py-2 text-white font-semibold text-base tracking-wide " +
        "transition-all duration-300 transform rounded-lg bg-rose-600 " +
        "hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-opacity-50";

    return (
        <div className="flex items-center justify-center min-w-screen min-h-screen bg-[#040203]">
            {/* Alert messages */}
            {alertMessage && (
                <Alert type={alertType} message={alertMessage} onClose={() => setAlertMessage("")} />
            )}

            {/* Login Card */}
            <div className="w-full max-w-sm mx-auto overflow-hidden bg-[#0c0608] rounded-xl border border-rose-500/20 shadow-2xl">
                <div className="px-6 py-6">
                    <div className="flex justify-center items-center gap-2 mb-2">
                        <span className="text-rose-500 text-lg animate-spin duration-1000">❖</span>
                        <span className="font-serif text-xl font-extrabold tracking-wider text-white">
                            TRENDY<span className="text-rose-500">FY</span>
                        </span>
                    </div>
                    <h3 className="mt-2 text-xl font-medium text-center text-rose-100">
                        <span className="text-rose-500">Welcome </span>
                        Back
                    </h3>
                    <p className="mt-1 text-center text-xs tracking-[0.15em] uppercase text-rose-200/60">
                        Login or Create Account
                    </p>
                    <form onSubmit={login}>
                        {/* Identifier */}
                        <div className="mt-6 mb-5 w-full">
                            <input
                                className={inputClass}
                                type="text"
                                placeholder="Email or Username"
                                aria-label="Email or Username"
                                onChange={(e) => setIdentifier(e.target.value)}
                            />
                        </div>

                        {/* Password */}
                        <div className="mb-5 w-full relative">
                            <input
                                className={`${inputClass} appearance-none`}
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                aria-label="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-rose-200/60 hover:text-rose-400 cursor-pointer transition-colors"
                                onClick={() => setShowPassword((prev) => !prev)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>

                        <div className="mt-7 mb-3 w-full flex justify-end">
                            <button className={buttonClass}>Sign In</button>
                        </div>
                    </form>
                </div>

                <div className="flex items-center justify-center py-4 w-full text-center bg-[#060305] border-t border-rose-500/10">
                    <span className="text-xs text-rose-200/70">
                        Don't have an account?
                    </span>
                    <Link to="/register" className="text-xs font-bold text-rose-400 hover:text-rose-300 ml-1.5 transition-colors">
                        Register
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;