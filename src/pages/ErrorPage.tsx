import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

// import { Container } from './styles';

const ErrorPage: React.FC = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <div className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8 h-full w-full bg-white">
          <div className="text-center">
            <p className="text-3xl font-semibold text-orange-600">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Página não encontrada
            </h1>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Desculpa, não encontramos a página que está procurando!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/products"
                className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                Voltar para home
              </a>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8 h-full w-full bg-white">
          <div className="text-center">
            <p className="text-3xl font-semibold text-orange-600">
              {error.status}
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Error!
            </h1>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Desculpa pelo inprevisto, tivemos algum problema {":("}!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/products"
                className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                Voltar para home
              </a>
            </div>
          </div>
        </div>
      );
    }
  }
};

export default ErrorPage;
