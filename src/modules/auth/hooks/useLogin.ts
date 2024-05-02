import { AuthService } from "@/backend";
import { useAuthStore } from "@/modules/core/store/useAuthStore";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "react-toastify";

export function useLogin() {
  const setLoggedIn = useAuthStore((state) => state.setLoggedIn);
  const navigate = useNavigate();
  const login = useMutation({
    mutationFn: AuthService.postAuthLogin,
    onSuccess: () => {
      setLoggedIn();
      navigate({ to: "/admin/" });
    },
    onError: () => {
      toast.error("Correo o contraseñas incorrectas");
    },
  });

  return {
    login: login.mutate,
    isPending: login.isPending,
    isError: login.isError,
    data: login.data,
  };
}
