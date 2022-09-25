import Link from "next/link";
import {
  createRef,
  forwardRef,
  InputHTMLAttributes,
  SyntheticEvent,
} from "react";
import { signIn } from "next-auth/react";
import Logo from "@/assets/logo.svg";
import { useRouter } from "next/router";

const InputField = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>((props, ref) => (
  <input
    {...props}
    ref={ref}
    className="bg-transparent border-b border-gray-blue pb-[18px] sm:pb-3.5 px-4 text-base font-light outline-none w-full placeholder:text-white/50 caret-red focus:border-white"
  />
));

InputField.displayName = "InputField";

const AuthForm = ({ isLogin = false }) => {
  const emailInputRef = createRef<HTMLInputElement>();
  const passwordInputRef = createRef<HTMLInputElement>();
  const passwordConfirmInputRef = createRef<HTMLInputElement>();

  const router = useRouter();

  const createUser = async (email: string, password: string) => {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "applciation/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong!");
    }

    return data;
  };

  const onSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    const email = emailInputRef.current!.value;
    const password = passwordInputRef.current!.value;
    // const confirmPassword = passwordConfirmInputRef.current!.value;

    // Validation

    // Log user in
    if (isLogin) {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (!result!.error) {
        router.replace("/");
      }
    }
    // Signup
    else {
      try {
        const result = await createUser(email, password);

        if (!result!.error) {
          router.replace("/");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <Logo className="m-auto" />
      <div className="bg-semi-dark-blue px-6 pt-6 pb-8 rounded-[10px] mt-16 mx-auto sm:w-[400px]">
        <h1 className="heading-lg mb-10">{isLogin ? "Login" : "Sign Up"}</h1>

        <form onSubmit={onSubmit}>
          <div className="space-y-6">
            <div>
              <InputField
                type="email"
                placeholder="Email address"
                ref={emailInputRef}
              />
            </div>
            <div>
              <InputField
                type="password"
                placeholder="Password"
                ref={passwordInputRef}
              />
            </div>
            {!isLogin && (
              <div>
                <InputField
                  type="password"
                  placeholder="Repeat Password"
                  ref={passwordConfirmInputRef}
                />
              </div>
            )}
          </div>

          <button
            type="submit"
            className="bg-red py-3.5 rounded-md w-full mt-10 mb-6"
          >
            {isLogin ? "Login to your account" : "Create an account"}
          </button>
        </form>

        <div className="font-light flex justify-center gap-2">
          <p>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </p>
          <Link href={isLogin ? "/signup" : "/login"}>
            <a className="text-red">{isLogin ? "Sign Up" : "Login"}</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AuthForm;
