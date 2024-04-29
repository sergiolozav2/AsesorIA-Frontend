import { AuthService } from "@/backend";
import { useMutation } from "@tanstack/react-query";

export function useLogin() {
  return useMutation({
    mutationFn: AuthService.postAuthLogin,
  });
}