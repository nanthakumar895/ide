import React from 'react'
import { SignIn, SignUp } from '@clerk/clerk-react'
import { useState } from 'react'

const Auth: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0b0e14] px-4">
      <div className="mb-8 text-center">
         <div className="inline-flex w-12 h-12 bg-[#ff5a00] rounded-xl items-center justify-center text-white font-black text-2xl mb-4 shadow-lg shadow-[#ff5a00]/20">P</div>
         <h2 className="text-2xl font-black text-white">ProCode IDE</h2>
      </div>

      {isSignUp ? (
        <SignUp
          signInUrl="/editor.html"
          routing="path"
          path="/signup"
          afterSignUpUrl="/editor.html"
        />
      ) : (
        <SignIn
          signUpUrl="/editor.html"
          routing="path"
          path="/signin"
          afterSignInUrl="/editor.html"
        />
      )}

      <div className="mt-8 text-center pt-6">
         <button
           onClick={() => setIsSignUp(!isSignUp)}
           className="text-slate-400 text-xs font-bold hover:text-[#ff5a00] transition-colors tracking-tight"
         >
           {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
         </button>
      </div>
    </div>
  )
}

export default Auth
