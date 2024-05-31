import { Link, useNavigate } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast"
import img from '../../src/assets/login.svg';
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";


const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const { createUser } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const handleRegister = e => {
        console.log(e)

        const name = e.name;
        const email = e.email;
        const photo = e.photo;
        const password = e.password;
        const confirmPassword = e.confirmPassword;
        console.log(name, email, photo, password, confirmPassword);
        // console.log(name)


        createUser(email, password)
            .then(result => {
                console.log(result?.user);
                
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                }).then(() => {
                }).catch((error) => {
                    console.error(error)
                });

                navigate( location?.state ? location?.state : "/")
                toast.success('Registration successfully')
            })
            .catch(error => {
                console.log(error.message)

            })

    }
    return (
        <div className="hero mb-10 p-5 bg-[#d9f99d]">
            <Helmet>
                <title>Register | Consulthub</title>
            </Helmet>

            <div className="hero-content bg-[#7dd3fc] flex-col ">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-3">Register Your Account</h1>
                <div className="hero-content grid gap-10 md:grid-cols-2 flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img className='w-3/4 lg:h-screen' src={img} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-[#a78bfa]">
                        <form onSubmit={handleSubmit(handleRegister)} className="card-body">
                            <div className="form-control pr-4">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register('name')} placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control pr-4">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register('email')} placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control pr-4">
                                <label className="label">
                                    <span>Photo Url</span>
                                </label>
                                <input type="url" placeholder="Photo_Url" {...register('photo')} required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="flex items-center">
                                    <input
                                        {...register('password', {
                                            pattern: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/

                                        })}
                                        type={showPassword ? "text" : "password"} placeholder="password" className="input input-bordered w-full" required />

                                    <span className="relative  right-7" onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <FaEye /> : <FaEyeSlash />
                                        }
                                    </span>
                                </div>
                                {
                                    errors?.password?.type === 'pattern' && (
                                        <p className="text-red-500 mt-2">Password must have 6 characters or longer and  one Upper case and Lower case letter</p>
                                    )
                                }
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <div className="flex items-center">
                                    <input
                                        {...register('confirmPassword', {
                                            validate: data => {
                                                if (watch('password') !== data) {
                                                    return "Password didn't match"
                                                }
                                            }
                                        })}
                                        type={showConfirmPassword ? "text" : "password"} placeholder="Confirm password" name="confirmPassword" className="input input-bordered w-full" required />
                                    <span className="relative  right-7" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                        {
                                            showConfirmPassword ? <FaEye /> : <FaEyeSlash />
                                        }
                                    </span>
                                </div>
                                <p className="text-red-500 mt-2">{errors.confirmPassword?.message}</p>
                            </div>
                            <div className="form-control mt-6 ">
                                <button className="btn btn-primary mr-4">REGISTER</button>
                                <p className="text-lg mt-5">Already have an account? please <Link to="/login" className="underline text-green-500">Login</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;