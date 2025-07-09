import React from 'react';
import signupImg from '../../../assets/login.png'; 

const Register = () => {
 

  const inputFieldStyle =
    'border-2 border-fuchsia-500 rounded-md w-full px-[2vw] sm:px-4 py-2 bg-gradient-to-r from-fuchsia-600 via-purple-500 to-pink-500 bg-clip-text text-transparent focus:outline-none caret-fuchsia-600 selection:text-fuchsia-700';

  const buttonStyle =
    'border-2 border-fuchsia-500 rounded-md w-full px-[2vw] sm:px-4 py-2 text-fuchsia-300 hover:text-black bg-gradient-to-r from-fuchsia-600 via-purple-500 to-pink-500 transition-all duration-300 text-[4vw] sm:text-2xl sm:font-semibold';

  const handleSignupSubmission = async (e) => {
    e.preventDefault();
    
  };

  return (
    <div
      className="w-100svw h-[calc(100svh)]  flex justify-center items-center"
      style={{ backgroundColor: 'rgba(15, 23, 42, 1)' }}
    >
      <div className="lg:w-[70%]  h-[70%] w-[60%] md:w-[55%] flex justify-center items-center shadow-md shadow-fuchsia-800">
        {/* Left image section */}
        <div className="hidden lg:block lg:w-1/2 lg:h-full">
          <img
            src={signupImg}
            alt="signup_img"
            className="w-full h-full object-cover opacity-[0.5]"
          />
        </div>

        {/* Right form section */}
        <div className="w-full h-full lg:w-1/2 bg-gradient-to-r from-[#0a0a0a] to-[#071a4a] flex justify-center items-center">
          <div className="w-full h-full lg:w-[85%] lg:h-[90%] border-3 border-fuchsia-900 backdrop-blur-3xl rounded-2xl opacity-[0.7] relative">
            {/* Heading */}
            <h3 className="text-[5svw] md:text-5xl lg:text-4xl text-fuchsia-600 text-center relative transform lg:translate-y-7 md:translate-y-13 translate-y-10 opacity-[0.8]">
              Register
            </h3>

            {/* Form container */}
            <div className="absolute bottom-1.5 w-full h-[83%] px-[4vw] sm:px-10 sm:py-5  rounded-b-lg">
              <form
                onSubmit={handleSignupSubmission}
                className="flex flex-col gap-6"
              >
                {/* Name */}
                <input
                  type="text"
                  placeholder="Full Name"
                  className={inputFieldStyle}
                  name="name"
                  required
                />

                {/* Email */}
                <input
                  type="email"
                  placeholder="Email"
                  className={inputFieldStyle}
                  name="email"
                  required
                />

  
                

                {/* Password */}
                <input
                  type="password"
                  placeholder="Password"
                  className={inputFieldStyle}
                  name="password"
                  required
                />

                

                {/* Submit */}
                <button type="submit" className={buttonStyle}>
                  Signup
                </button>

                {/* Links */}
                <div className="flex flex-col sm:flex-row justify-between items-center text-[3vw] sm:text-sm text-fuchsia-400  gap-2">
                  <a href="#" className="hover:underline">
                    Already have an account?
                  </a>
                  <a href="/login" className="hover:underline">
                    Login Here
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
