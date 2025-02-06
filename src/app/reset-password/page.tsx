'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import Footer from '@/components/Footer/Footer'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { useRouter } from 'next/navigation'

const Register = () => {
  const router = useRouter()

  // State for form inputs
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')  // Renamed for clarity
  const [otp, setOtp] = useState('')

  // Handle registration
  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const response = await fetch('https://jordan.agoxn.cloud/api/auth/forgot-reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          password_confirmation: passwordConfirmation,  // Updated field name
          otp,
        })
      })

      if (!response.ok) {
        const errorData = await response.json()
        alert(`Registration failed: ${errorData.message || 'Please check your details and try again.'}`)
        return
      }

      alert('Password reset successful! Redirecting to login page...')
      router.push('/login')
    } catch (error) {
      console.error('Registration error:', error)
      alert('Something went wrong, please try again.')
    }
  }

  return (
    <>
      <TopNavOne props="style-one bg-black" slogan="Welcome to Jordan. We provide the best IT Electronics items" />
      <div id="header" className='relative w-full'>
        <MenuOne props="bg-transparent" />
        <Breadcrumb heading='Reset Your Password' subHeading='reset-password' />
      </div>
      <div className="register-block md:py-20 py-10">
        <div className="container">
          <div className="content-main flex gap-y-8 max-md:flex-col">
            <div className="left md:w-1/2 w-full lg:pr-[60px] md:pr-[40px] md:border-r border-line">
              <div className="heading4">Reset Password</div>

              <form className="md:mt-7 mt-4" onSubmit={handleRegister}>
                <div className="email">
                  <input
                    className="border-line px-4 pt-3 pb-3 w-full rounded-lg"
                    id="email"
                    type="email"
                    placeholder="Email address *"
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
                    placeholder="New Password *"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="pass mt-5">
                  <input
                    className="border-line px-4 pt-3 pb-3 w-full rounded-lg"
                    id="passwordConfirmation"
                    type="password"
                    placeholder="Confirm New Password *"
                    required
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                  />
                </div>

                <div className="otp mt-5">
                  <input
                    className="border-line px-4 pt-3 pb-3 w-full rounded-lg"
                    id="otp"
                    type="text"
                    placeholder="OTP *"
                    required
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </div>

                <div className='flex items-center mt-5'>
                  <div className="block-input">
                    <input
                      type="checkbox"
                      name='remember'
                      id='remember'
                      required
                    />
                    <Icon.CheckSquare size={20} weight='fill' className='icon-checkbox' />
                  </div>
                  <label htmlFor='remember' className="pl-2 cursor-pointer text-secondary2">
                    I agree to the
                    <Link href={'#!'} className='text-black hover:underline pl-1'>
                      Terms of Use
                    </Link>
                  </label>
                </div>

                <div className="block-button md:mt-7 mt-4">
                  <button className="button-main" type="submit" style={{backgroundColor: "#000"}}>Submit</button>
                </div>
              </form>
            </div>

            <div className="right md:w-1/2 w-full lg:pl-[60px] md:pl-[40px] flex items-center">
              <div className="text-content">
                <div className="heading4">Already have an account?</div>
                <div className="mt-2 text-secondary">
                  Welcome back! Sign in to access your personalized experience, saved preferences, and more.
                </div>
                <div className="block-button md:mt-7 mt-4">
                  <Link href={'/login'} className="button-main">Login</Link>
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

export default Register
