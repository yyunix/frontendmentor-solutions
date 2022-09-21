import { useState } from "react";
import CopyIcon from "@/assets/images/icon-copy.svg";

interface ResultProps {
  password: string;
}

const Result = ({ password }: ResultProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    if (password) {
      navigator.clipboard.writeText(password).then(() => {
        setIsCopied(true);
      });

      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
  };

  return (
    <div className="relative w-full flex items-center bg-dark-gray p-4 sm:py-5 sm:px-8">
      <input
        type="text"
        placeholder="P4$5W0rD!"
        value={password}
        onChange={() => undefined}
        disabled
      />
      {isCopied && <div className="text-green mr-4">COPIED</div>}
      <button className="group" onClick={copyToClipboard}>
        <CopyIcon className="h-6 w-5 group-hover:fill-almost-white" />
      </button>
    </div>
  );
};

export default Result;
