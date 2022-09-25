import AuthForm from "@/components/auth-form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const SignupPage = () => {
  const router = useRouter();
  const { status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "authenticated") {
    router.replace("/");
  }

  return (
    <div className="section-auth">
      <AuthForm />
    </div>
  );
};

export default SignupPage;
