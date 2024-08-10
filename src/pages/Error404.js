import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className="flex flex-col items-center p-5">
      <h1 className="text-gray-700 text-[300px] md:text-[190px] sm:text-[100px] mt-5 mb-10">
        404
      </h1>
      <p className="text-gray-700 text-2xl md:text-base sm:text-lg mt-0 mb-15 sm:mb-10 text-center">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link 
        to="/"
        className="underline text-black text-lg sm:text-sm mt-5 mb-12"
      >
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default Error404;
