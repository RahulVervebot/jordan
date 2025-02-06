'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import Footer from '@/components/Footer/Footer'
import * as Icon from "@phosphor-icons/react/dist/ssr";

const ForgotPassword = () => {
  // 1. State to hold the email input
  const [email, setEmail] = useState('');

  // 2. Handler for form submit
  const handleForgotPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('https://jordan.agoxn.cloud/api/auth/forgot-password', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      if (!response.ok) {
        alert('Something went wrong. Please check your email or try again.');
        return;
      }

      // On success, parse the response if needed
      // const data = await response.json();
      // console.log('Forgot password response:', data);

      // Show a success message or redirect
      alert('A password reset email has been sent. Please check your inbox.');
    } catch (error) {
      console.error('Forgot password error:', error);
      alert('Failed to send reset email. Please try again.');
    }
  };

  return (
    <>
      <TopNavOne props="style-one bg-black" slogan="Welcome to Jordan. We provides best IT Electronics item" />
      <div id="header" className='relative w-full'>
        <MenuOne props="bg-transparent" />
        <Breadcrumb heading='Forget your password' subHeading='Forget your password' />
      </div>
      <div className="forgot-pass md:py-20 py-10">
        <div className="container">
          <div className="content-main flex gap-y-8 max-md:flex-col">
            <div className="left md:w-1/2 w-full lg:pr-[60px] md:pr-[40px] md:border-r border-line">
              <div className="heading4">Reset your password</div>
              <div className="body1 mt-2">We will send you an email to reset your password</div>

              {/* 3. Hook up form to handler */}
              <form className="md:mt-7 mt-4" onSubmit={handleForgotPassword}>
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
                <div className="block-button md:mt-7 mt-4">
                  <button className="button-main">Submit</button>
                </div>
              </form>
            </div>
            <div className="right md:w-1/2 w-full lg:pl-[60px] md:pl-[40px] flex items-center">
              <div className="text-content">
                <div className="heading4">New Customer</div>
                <div className="mt-2 text-secondary">
                  Be part of our growing family of new customers! Join us today and unlock a world of exclusive benefits, offers, and personalized experiences.
                </div>
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

export default ForgotPassword
