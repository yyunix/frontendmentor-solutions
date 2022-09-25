import AuthForm from "@/components/auth-form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const LoginPage = () => {
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
      <AuthForm isLogin />
    </div>
  );
};

export default LoginPage;
