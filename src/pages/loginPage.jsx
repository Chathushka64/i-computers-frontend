import axios from "axios";
import { BiKey } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-hot-toast";
import api from "../utils/api";

export default function LoginPage() {

    const[email , setEmail] = useState("")
    const[password , setPassword] = useState("")

    async function handleLogin(){
        toast.success("Email: " + email + " Password: " + password)
        try {
            // const res = await axios.post("http://localhost:3000/users/login", {
            //     email: email,
            //     password: password
            // })

            const res = await api.post("/users/login", {
                email: email,
                password: password
            })
            console.log(res)
            toast.success("Login successful!")

        } catch(err) {
            console.log(err)
            toast.error("Login failed")
        }
    }

    return (
        <div className="w-full h-full bg-[url('/login-bg.jpg')] bg-cover bg-no-repeat flex items-center justify-center">
            <div className="w-[400px] h-[500px] backdrop-blur-md shadow-2xl shadow-white rounded-xl flex flex-col p-8">

                <h1 className="w-full h-[80px]text-center text-3xl font-bold text-white flex justify-center">Login</h1>

                <div className="w-full mt-8">
                    <label className="text-white text-lg flex items-center gap-2"><MdEmail/> Email</label>
                    <input className="w-full h-10 rounded-md px-2 border border-white" type="email" placeholder="Enter your email" 
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    />
                </div>

                <div className="w-full mt-5">
                    <label className="text-white text-lg flex items-center gap-2"><BiKey/> Password</label>
                    <input className="w-full h-10 rounded-md px-2 border border-white" type="password" placeholder="Enter your password" 
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    />
                </div>

                <p className="w-full h-2 text-white text-right italic">Forget Password? <Link to="/forget-password" className="text-blue-500 hover:underline">Click here</Link></p>

                <button className="w-full h-10 bg-accent text-white rounded-md mt-8 hover:bg-blue-600" onClick={handleLogin}>Sign in</button>

                <p className="w-full h-2 text-white text-right mt-4 italic">Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign up</Link></p>

                <button className="w-full h-10 bg-gray-700 text-white rounded-md mt-7 hover:bg-gray-600 flex justify-center items-center gap-3"><FcGoogle className="text-xl"/>Sign in with Google</button>

            </div>
        </div>
    ) 
}