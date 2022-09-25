import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import Avatar from "@/assets/image-avatar.png";
import LinkIcon from "@/assets/icon-external-link.svg";
import CloseIcon from "@/assets/icon-close.svg";

type PropfileProps = {
  onClose: () => void;
};

type ButtonProps = {
  href: string;
  label: string;
};

const Button = ({ href, label }: ButtonProps) => (
  <Link href={href}>
    <a className="modal-button">{label}</a>
  </Link>
);

const SiteLink = ({ href, label }: ButtonProps) => (
  <p>
    <a href={href} className="inline-flex items-center hover:underline">
      <span>{label}</span>
      <LinkIcon className="w-4 h-4 ml-1" />
    </a>
  </p>
);

const Profile = ({ onClose }: PropfileProps) => {
  const { status } = useSession();

  const logout = () => {
    signOut();
  };

  if (status === "loading") {
    return <p>Loading</p>;
  }

  return (
    <div
      className="z-10 fixed inset-0 bg-dark-blue bg-opacity-95 transition-opacity"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div className="flex min-h-full justify-center text-center items-center px-4 sm:px-[25px]">
        <div
          className="relative transform overflow-hidden rounded-lg bg-semi-dark-blue text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-lg"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            className="absolute right-3 top-3"
            onClick={onClose}
            tabIndex={0}
            aria-label="Close modal"
          >
            <CloseIcon className="h-6 w-6" />
          </button>

          <div className="px-4 pt-5 pb-4 sm:p-6 sm:py-10">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full sm:mx-0">
                <Image src={Avatar} alt="User Avatar" />
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-6 lg:text-left">
                <h3 className="heading-md mb-2" id="modal-title">
                  Created by Yujeong Yun.
                </h3>
                <div className="mt-2 sm:text-left">
                  <SiteLink href="https://yyunix.dev" label="Website" />
                  <SiteLink href="https://yyunix.dev" label="Github" />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/30 flex flex-col sm:flex-row items-center justify-between px-4 pt-3 pb-4 sm:p-6 sm:py-5">
            <p>Authentication Pages</p>
            <div>
              {status !== "authenticated" ? (
                <>
                  <Button href="/login" label="Login" />
                  <Button href="/signup" label="Signup" />
                </>
              ) : (
                <button className="modal-button" onClick={logout}>
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
