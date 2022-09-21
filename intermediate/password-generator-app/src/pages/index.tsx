import Form from "@/components/form";
import Result from "@/components/result";
import type { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [password, setPassword] = useState("");

  const updatePassword = (newPassword: string) => {
    setPassword(newPassword);
  };

  return (
    <div className="w-full p-4 sm:w-540 sm:p-0">
      <h1 className="text-sm md:text-lg lg:text-xl text-center mb-[31px] text-gray">
        Password Generator
      </h1>
      <Result password={password} />
      <Form updatePassword={updatePassword} />
      <p className="text-gray text-sm text-center mt-2">
        Challege completed by{" "}
        <a href="https://yyunix.dev" className="underline">
          Yujeong Yun
        </a>
      </p>
    </div>
  );
};

export default Home;
