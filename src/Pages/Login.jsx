import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import toast from "react-hot-toast"
import img from '../../src/assets/login.svg';
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";
const Login = () => {
    const location = useLocation();
    console.log(location)
    const { singInUser, signInWithGoogle } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        singInUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
                navigate( location?.state ? location?.state : "/")
                toast.success('Login successfully')
            })

            .catch(error => {
                console.log(error.message)
                toast.error('Invalid User login')
            })
    }
    const googleLogin = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                
                navigate( location?.state ? location?.state : "/")
                toast.success('Login successfully')

            })
            .catch(error => {
                console.error(error)
            })
    }


    return (
        <div className="hero mb-10 p-5 bg-[#d9f99d]">
            <Helmet>
                <title>Login | Consulthub</title>
            </Helmet>

            <div className="hero-content bg-[#7dd3fc] flex-col">
                <h1 className="text-5xl mb-3 font-bold">Please Login Your Account</h1>
                <div className="hero-content grid gap-10 md:grid-cols-2 flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img className='w-3/4 lg:h-screen' src={img} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-[#a78bfa]">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control pr-4">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="flex items-center">
                                    <input type={showPassword ? "text" : "password"} placeholder="password" name="password" className="input input-bordered w-full" required />
                                    <span className="relative  right-7" onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <FaEye /> : <FaEyeSlash />
                                        }
                                    </span>
                                </div>
                                <label className="label">
                                    <a className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                                <div className="mt-5">
                                    <div className="divider divider-primary ">Or</div>
                                    <div className="form-control">
                                        <button onClick={googleLogin}
                                            className="btn w-full btn-ghost lg:text-xl font-bold px-5 border-2 flex flex-row border-gray-300"><span><FcGoogle /></span> Login with google</button>

                                    </div>

                                </div>
                                <p className="text-lg mt-5">Dont have an account? please <Link to="/register" className="underline text-red-500">Register</Link></p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;