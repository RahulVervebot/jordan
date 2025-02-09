'use client'
import React, { useState, FormEvent } from 'react'
import Link from 'next/link'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import Footer from '@/components/Footer/Footer'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { useRouter } from 'next/navigation'

const Login = () => {
    const router = useRouter();

    // 1. Add state to capture email & password
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // 2. Handle login (API call, store data, redirect if success)
    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch("https://jordan.agoxn.cloud/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email,
                    password
                })
            });
console.log(response, 'response');
            if (!response.ok) {
                // Handle error
                alert("Login failed. Please check your credentials.");
                return;
            }

            const data = await response.json();

            // 3. Store data in localStorage (or your preferred storage)
            localStorage.setItem("access_token", data.access_token);
            localStorage.setItem("token_type", data.token_type);
            localStorage.setItem("expires_in", data.expires_in);
            localStorage.setItem("user_info", JSON.stringify(data.user));

            /**
             * If you want to do an expiration check right away, you can set a 
             * custom "expires_at" in localStorage. For example:
             *
             * const expiresAt = Date.now() + (data.expires_in * 1000);
             * localStorage.setItem("expires_at", expiresAt);
             *
             * Then, on page load or any protected route, you can compare
             * Date.now() with the stored "expires_at" to see if token is still valid.
             */

            // 4. Redirect if token is valid
            if (data.access_token) {
                // Optionally, do an immediate check for expiry if you want
                // For now, we assume a fresh token is valid
                router.push("/my-account");
            }
        } catch (error) {
            console.error("Login error:", error);
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="Welcome to Jordan. We provides best IT Electronics item" />
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-transparent" />
                <Breadcrumb heading='Login' subHeading='Login' />
            </div>
            <div className="login-block md:py-20 py-10">
                <div className="container">
                    <div className="content-main flex gap-y-8 max-md:flex-col">
                        <div className="left md:w-1/2 w-full lg:pr-[60px] md:pr-[40px] md:border-r border-line">
                            <div className="heading4">Login</div>

                            {/* 
                                5. Hook up form to handleLogin
                                (Don't change the front-end structure—only add onSubmit and value/onChange)
                            */}
                            <form className="md:mt-7 mt-4" onSubmit={handleLogin}>
                                <div className="email">
                                    <input
                                        className="border-line px-4 pt-3 pb-3 w-full rounded-lg"
                                        id="username"
                                        type="email"
                                        placeholder="Username or email address *"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="pass mt-5">
                                    <input
                                        className="border-line px-4 pt-3 pb-3 w-full rounded-lg"
                                        id="password"
                                        type="password"
                                        placeholder="Password *"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="flex items-center justify-between mt-5">
                                    <div className='flex items-center'>
                                        <div className="block-input">
                                            <input
                                                type="checkbox"
                                                name='remember'
                                                id='remember'
                                            />
                                            <Icon.CheckSquare size={20} weight='fill' className='icon-checkbox' />
                                        </div>
                                        <label htmlFor='remember' className="pl-2 cursor-pointer">Remember me</label>
                                    </div>
                                    <Link href={'/forgot-password'} className='font-semibold hover:underline'>Forgot Your Password?</Link>
                                </div>
                                <div className="block-button md:mt-7 mt-4">
                                    <button className="button-main">Login</button>
                                </div>
                            </form>
                        </div>
                        <div className="right md:w-1/2 w-full lg:pl-[60px] md:pl-[40px] flex items-center">
                            <div className="text-content">
                                <div className="heading4">New Customer</div>
                                <div className="mt-2 text-secondary">Be part of our growing family of new customers! Join us today and unlock a world of exclusive benefits, offers, and personalized experiences.</div>
                                <div className="block-button md:mt-7 mt-4">
                                    <Link href={'/register'} className="button-main">Register</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login
