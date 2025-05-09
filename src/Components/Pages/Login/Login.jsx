import React from 'react';
import login from '../../../assets/login.png'

const Login = () => {
    return (




        <div className='w-100svw h-[calc(100svh-50px)] lg:h-[calc(100svh-70px)] flex justify-center items-center' style={{ backgroundColor: 'rgba(15, 23, 42, 1)' }}>

            <div className='md:w-[62%] md:h-[80%] h-[50%] w-[60%] flex justify-center items-center shadow-md shadow-fuchsia-800'>

                {/* Left image section */}
                <div className='hidden lg:block lg:w-1/2 lg:h-full'>
                    <img src={login} alt="login_img" className='w-full h-full object-cover opacity-[0.5]' />
                </div>

                {/* Right form section */}
                <div className='w-full h-full lg:w-1/2 bg-gradient-to-r from-[#0a0a0a] to-[#071a4a] flex justify-center items-center'>

                    <div className='w-full h-full lg:w-[80%] lg:h-[70%] border-3 border-fuchsia-900 backdrop-blur-3xl rounded-2xl opacity-[0.7] relative'>

                        {/* Heading */}
                        <h3 className='text-[5svw] md:text-5xl lg:text-4xl text-fuchsia-600 text-center relative transform lg:translate-y-10 md:translate-y-20 translate-y-10 opacity-[0.8]'>Login</h3>

                        {/* Form container */}
                        <div className='absolute bottom-0 w-full h-[80%] px-[4vw] sm:px-10 sm:py-5 rounded-b-lg'>

                            <form action="" className='flex flex-col gap-6'>

                                {/* Username input */}
                                <input type="text" placeholder='Username' className='border-2 border-fuchsia-500 rounded-md w-full px-[2vw] sm:px-4 py-2 bg-gradient-to-r from-fuchsia-600 via-purple-500 to-pink-500 bg-clip-text text-transparent focus:outline-none' />

                                {/* Password input */}
                                <input type="password" placeholder="Password" className='border-2 border-fuchsia-500 rounded-md w-full px-[2vw] sm:px-4 py-2 bg-gradient-to-r from-fuchsia-600 via-purple-500 to-pink-500 bg-clip-text text-transparent focus:outline-none' />

                                {/* Submit button */}
                                <button type="submit" className='border-2 border-fuchsia-500 rounded-md w-full px-[2vw] sm:px-4 py-2 text-fuchsia-300 hover:text-black bg-gradient-to-r from-fuchsia-600 via-purple-500 to-pink-500 transition-all duration-300 text-[4vw] sm:text-2xl sm:font-semibold'>Login</button>

                                {/* Links */}
                                <div className='flex flex-col sm:flex-row justify-between items-center text-[4vw] sm:text-sm text-fuchsia-400 mt-2 gap-2 '>

                                    <a href="#" className='hover:underline'>Forgot Password?</a>
                                    <a href="#" className='hover:underline'>Create an Account</a>

                                </div>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default Login