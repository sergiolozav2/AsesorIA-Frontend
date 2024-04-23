import { Link } from "@tanstack/react-router";
import { AuthInput } from "./components/AuthInput";
import { ImageContainer } from "./components/ImageContainer";
import { AuthButton } from "./components/AuthButton";
import { AuthContainer } from "./components/AuthContainer";
import { BorderLink } from "./components/BorderLink";

export function RegisterPage() {
  return (
    <div className="min-h-screen bg-stone-100 lg:flex lg:flex-wrap">
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
          <h1 className="mb-4">Registra una nueva cuenta</h1>
          <div className="flex flex-col">
            <AuthInput type="text" placeholder="Usuario" />
            <AuthInput type="password" placeholder="Contraseña" />
          </div>

          <div className="mb-12 pb-1 pt-1 text-center">
            <AuthButton type="button">Crear cuenta</AuthButton>
          </div>

          <div className="flex items-center justify-between pb-6">
            <p className="mb-0 mr-2 text-sm font-medium text-stone-600">
              ¿Tienes una cuenta?
            </p>
            <BorderLink to="/login">Inicia sesión</BorderLink>
          </div>
        </form>
      </AuthContainer>

      <ImageContainer>
        <h2 className="mb-6 text-xl font-semibold md:text-3xl">
          Únete a la comunidad de Asesor.IA
        </h2>
        <p className="text-sm md:text-xl">
          ¡Regístrate ahora y lleva tu negocio al siguiente nivel, conectar con
          tus clientes nunca ha sido tan sencillo.
        </p>
      </ImageContainer>
    </div>
  );
}
