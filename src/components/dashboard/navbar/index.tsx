import { UserCircleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      <nav className="bg-white border-b border-gray-100">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-4">
          <Link href="/dashboard" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-6 mr-3 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-bold whitespace-nowrap tracking-tighter">
              Brandii.
            </span>
          </Link>
          <div className="flex items-center">
            <a href="#" className="text-sm text-gray-800 hover:underline">
              <UserCircleIcon className="w-8 h-8" />
            </a>
          </div>
        </div>
      </nav>
      <nav className="bg-white">
        <div className="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
          <div className="flex flex-row justify-between items-center">
            <ul className="flex flex-row mt-0 mr-6 space-x-16 text-sm font-medium items-center">
              <li>
                <Link
                  href="/dashboard"
                  className="text-gray-500 hover:underline"
                  aria-current="page"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/products"
                  className="text-gray-500 hover:underline"
                >
                  Produits
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/categories"
                  className="text-gray-500 hover:underline"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  href="dashboard/users"
                  className="text-gray-500 hover:underline"
                >
                  Utilisateurs
                </Link>
              </li>
              <li>
                <Link
                  href="dashboard/orders"
                  className="text-gray-500 hover:underline"
                >
                  Commandes
                </Link>
              </li>
            </ul>
            <form className="flex items-center">
              <label htmlFor="simple-search" className="sr-only">
                Recherche
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Votre recherche..."
                  required
                />
              </div>
              <button
                type="submit"
                className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
