import { InputHTMLAttributes } from "react";

type AuthInputProps = InputHTMLAttributes<HTMLInputElement>;

export function AuthInput(props: AuthInputProps) {
  return (
    <input
      className="mb-4 rounded-sm border bg-background px-2 py-1 outline-primary/75"
      {...props}
    />
  );
}
