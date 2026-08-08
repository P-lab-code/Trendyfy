import { useState } from "react";
import axios from "../api/axios";
import Alert from "../components/Alert";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const [fieldErrors, setFieldErrors] = useState({});
    const [alertMessage, setAlertMessage] = useState("");
    const [alertType, setAlertType] = useState("error");

    // navigate
    const navigate = useNavigate();
    const { login } = useAuth();

    async function register(event) {
        event.preventDefault();
        setFieldErrors({});
        setAlertMessage("");

        try {
            // Register
            await axios.post("/api/v1/auth/register", {
                username,
                email,
                password,
            });

            // Auto Login
            const loginResponse = await axios.post("/api/v1/auth/login", {
                identifier: email,
                password,
            });

            // Save Token
            localStorage.setItem("authToken", loginResponse.data.token);

            // Update AuthContext
            login(loginResponse.data.token);

            setAlertType("success");
            setAlertMessage("Registration successful!");

            setTimeout(() => {
                navigate("/");
            }, 1000);
        } catch (err) {
            if (err.response?.data?.error) {
                // Handle specific error messages from the server
                const errorObj = err.response.data.error;

                // If the error is a string, wrap it in an array; otherwise, use Object.values
                const msgs = typeof errorObj === "string" ? [errorObj] : Object.values(errorObj);

                setAlertMessage(msgs);
                setAlertType("error");
            } else if (err.response?.data) {
                setFieldErrors(err.response.data);
            } else {
                setAlertMessage("Something went wrong!");
                setAlertType("error");
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
        <div className="flex flex-col items-center justify-center min-w-screen min-h-screen bg-[#040203]">
            {/* Alert messages */}
            {alertMessage && (
                <Alert type={alertType} message={alertMessage} onClose={() => setAlertMessage("")} />
            )}

            {/* Registration Card */}
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
                        New User
                    </h3>
                    <p className="mt-1 text-center text-xs tracking-[0.15em] uppercase text-rose-200/60">
                        Login or Create Account
                    </p>

                    <form onSubmit={register}>
                        {/* Username */}
                        <div className="mt-6 mb-5 w-full">
                            {fieldErrors.username && (
                                <div className="mb-2 font-medium text-sm text-red-400">
                                    {fieldErrors.username}
                                </div>
                            )}
                            <input
                                className={inputClass}
                                type="text"
                                placeholder="Username"
                                aria-label="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>

                        {/* Email */}
                        <div className="mt-4 mb-5 w-full">
                            {fieldErrors.email && (
                                <div className="mb-2 font-medium text-sm text-red-400">
                                    {fieldErrors.email}
                                </div>
                            )}
                            <input
                                className={inputClass}
                                type="email"
                                placeholder="Email"
                                aria-label="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        {/* Password */}
                        {fieldErrors.password && (
                            <div className="mb-2 font-medium text-sm text-red-400">
                                {fieldErrors.password}
                            </div>
                        )}
                        <div className="mb-5 w-full relative">
                            <input
                                className={`${inputClass} appearance-none`}
                                type={showPassword ? "text" : "password"}
                                placeholder="Set Password"
                                aria-label="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-rose-200/60 hover:text-rose-400 cursor-pointer transition-colors"
                                onClick={() => setShowPassword((prev) => !prev)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>

                        {/* Submit */}
                        <div className="mt-7 mb-3 w-full flex justify-end">
                            <button className={buttonClass}>Sign Up</button>
                        </div>
                    </form>
                </div>

                <div className="flex items-center justify-center py-4 w-full text-center bg-[#060305] border-t border-rose-500/10">
                    <span className="text-xs text-rose-200/70">
                        Already have an account?
                    </span>
                    <Link to={"/login"} className="text-xs font-bold text-rose-400 hover:text-rose-300 ml-1.5 transition-colors">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Register;