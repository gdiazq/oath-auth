"use client";

import { FormSignUp } from '@/components/ui/form/FormSignUp';
import ButtonGoogle from '@/components/ui/button/ButtonGoogle';
import ButtonGithub from '@/components/ui/button/ButtonGithub';

const SignUp = () => {
  return (
    <main className="flex flex-grow flex-col w-full min-h-screen items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-900">
      <div className="space-y-6 pt-12 pb-8 text-center px-4">
        <h1 className="text-5xl font-semibold text-white drop-shadow-md">
          🔐 Sign Up
        </h1>
        <p className="text-sm text-white"> Already have an account? - <a className="font-semibold hover:text-black" href="/signin">
          Sign in.</a>
        </p>
        <div>
          <FormSignUp />
        </div>
        <p className="text-xs text-white">Or with</p>
        <div className="flex flex-row gap-x-4">
          <form action="/api/auth/google" method="POST">
            <input type="hidden" name="auth-google" value="google" />
            <ButtonGoogle/>
          </form>
          <form action="/api/auth/github" method="POST">
            <input type="hidden" name="auth-github" value="github" />
            <ButtonGithub />
          </form>
        </div>
      </div>
      <div className="py-4">
        <p className="text-xs text-white"><a href="/">Volver al inicio</a></p>
      </div>
    </main>
  );
}

export default SignUp;
