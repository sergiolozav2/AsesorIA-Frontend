import { ButtonHTMLAttributes } from "react";

type AuthButton = ButtonHTMLAttributes<HTMLButtonElement>;

export function AuthButton(props: AuthButton) {
  return (
    <button
      className="mb-3 inline-block w-full bg-primary-950 rounded px-6 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
      {...props}
    ></button>
  );
}
