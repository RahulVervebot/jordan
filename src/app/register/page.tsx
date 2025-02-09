'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import Footer from '@/components/Footer/Footer'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { useRouter } from 'next/navigation'
import { error } from 'console'

const Register = () => {
  const router = useRouter()

  // 1. Add state for each input
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [mobile, setMobile] = useState('')

  // 2. Handle registration
  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const response = await fetch('https://jordan.agoxn.cloud/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          fname,
          lname,
          mobile
        })
      })
console.log("register responsex",response);
      if (!response.ok) {
        // You can show an error toast or message here
        alert('Registration failed. Please check your details and try again.')
        return
      }

      // If successful, decide where to go next (e.g. /login)
      // Optionally, you can parse JSON to see the response
      // const data = await response.json()
      // console.log('Registration success:', data)

      alert('Registration successful! Redirecting to login page...')
      router.push('/login')
    } catch (error) {
      console.error('Registration error:', error)
      alert('Something went wrong, please try again.')
    }
  }

  return (
    <>
      <TopNavOne props="style-one bg-black" slogan="Welcome to Jordan. We provides best IT Electronics item" />
      <div id="header" className='relative w-full'>
        <MenuOne props="bg-transparent" />
        <Breadcrumb heading='Create An Account' subHeading='Create An Account' />
      </div>
      <div className="register-block md:py-20 py-10">
        <div className="container">
          <div className="content-main flex gap-y-8 max-md:flex-col">
            <div className="left md:w-1/2 w-full lg:pr-[60px] md:pr-[40px] md:border-r border-line">
              <div className="heading4">Register</div>

              {/* 
                  3. Hook up form to handleRegister 
                  (Don't change the layout — just add onSubmit & state bindings)
              */}
              <form className="md:mt-7 mt-4" onSubmit={handleRegister}>
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
                    id="firstname"
                    type="text"
                    placeholder="First name *"
                    required
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                  />
                </div>

                <div className="pass mt-5">
                  <input
                    className="border-line px-4 pt-3 pb-3 w-full rounded-lg"
                    id="lastname"
                    type="text"
                    placeholder="Last name *"
                    required
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                  />
                </div>

                <div className="pass mt-5">
                  <input
                    className="border-line px-4 pt-3 pb-3 w-full rounded-lg"
                    id="mobile"
                    type="text"
                    placeholder="Mobile number *"
                    required
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
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

                <div className='flex items-center mt-5'>
                  <div className="block-input">
                    <input
                      type="checkbox"
                      name='remember'
                      id='remember'
                    />
                    <Icon.CheckSquare size={20} weight='fill' className='icon-checkbox' />
                  </div>
                  <label htmlFor='remember' className="pl-2 cursor-pointer text-secondary2">
                    I agree to the
                    <Link href={'#!'} className='text-black hover:underline pl-1'>
                      Terms of User
                    </Link>
                  </label>
                </div>

                <div className="block-button md:mt-7 mt-4">
                  <button className="button-main">Register</button>
                </div>
              </form>
            </div>

            <div className="right md:w-1/2 w-full lg:pl-[60px] md:pl-[40px] flex items-center">
              <div className="text-content">
                <div className="heading4">Already have an account?</div>
                <div className="mt-2 text-secondary">
                  Welcome back. Sign in to access your personalized experience, saved preferences, and more.
                  We{"'"}re thrilled to have you with us again!
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
