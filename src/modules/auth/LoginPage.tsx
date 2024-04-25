import { Link, useNavigate } from "@tanstack/react-router";
import { AuthInput } from "./components/AuthInput";
import { ImageContainer } from "./components/ImageContainer";
import { AuthButton } from "./components/AuthButton";
import { AuthContainer } from "./components/AuthContainer";
import { BorderLink } from "./components/BorderLink";

export function LoginPage() {
  const navigate = useNavigate();
  function handleLogin() {
    navigate({ to: "/admin/" });
  }
  return (
    <div className="min-h-screen bg-background lg:flex lg:flex-wrap">
      <AuthContainer>
        <div className="text-center">
          <Link to="/">
            <img
              className="mx-auto mt-12 w-24"
              src="/images/logo/logo-256.png"
              alt="logo"
            />
          </Link>
          <h4 className="mb-12 mt-1 pb-1 text-xl font-medium">Asesor.IA</h4>
        </div>

        <form>
          <h1 className="mb-4 text-foreground">Inicia sesión a tu cuenta</h1>
          <div className="flex flex-col">
            <AuthInput type="text" placeholder="Usuario" />
            <AuthInput type="text" placeholder="Contraseña" />
          </div>

          <div className="mb-12 pb-1 pt-1 text-center">
            <AuthButton onClick={handleLogin} type="button">
              Iniciar sesión
            </AuthButton>
            <a href="#!" className="text-sm font-medium">
              ¿Contraseña olvidada?
            </a>
          </div>

          <div className="flex items-center justify-between pb-6">
            <p className="mb-0 mr-2 text-sm font-medium text-muted-foreground">
              ¿No tienes una cuenta?
            </p>
            <BorderLink to="/register">Regístrate</BorderLink>
          </div>
        </form>
      </AuthContainer>
      <ImageContainer>
        <h2 className="mb-6 text-xl font-semibold md:text-3xl">
          Bienvenido a Asesor.IA
        </h2>
        <p className="text-sm md:text-xl">
          Potencia tus negocios y manejo de clientes de forma inteligente con
          nuestro sistema!
        </p>
      </ImageContainer>
    </div>
  );
}
