import ListBoxCategories from '../categories/ListBoxCategories';
import ComboBoxBrand from '../brands/ComboBoxBrand';

export default function AddProduct() {
  return (
    <>
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-12">
        <div className="relative sm:rounded-lg w-full">
          <div className="flex flex-row justify-between pb-8">
            <h3 className="text-3xl tracking-tighter font-bold text-slate-800">
              Ajout d'un produit
            </h3>
          </div>
        </div>
        <div className="flex flex-row w-full justify-between bg-white px-8 py-6">
          <div className="flex flex-col space-y-4 w-6/12">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Titre
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="John"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Sous-titre
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="John"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Description
              </label>
              <textarea
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Description du produit"
              ></textarea>
            </div>
            <ComboBoxBrand />
            <div className="flex flex-row justify-between space-x-8">
              <div className="flex flex-col w-6/12">
                <label
                  htmlFor="size"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Taille
                </label>
                <input
                  type="number"
                  id="size"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="80 cm"
                  required
                />
              </div>
              <div className="flex flex-col w-6/12">
                <label
                  htmlFor="weight"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Poids
                </label>
                <input
                  type="number"
                  id="weight"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="0 g"
                  required
                />
              </div>
            </div>
            <div className="flex flex-row justify-between space-x-8">
              <div className="flex flex-col w-8/12">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Prix
                </label>
                <input
                  type="number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="80 cm"
                  required
                />
              </div>
              <div className="flex flex-col w-4/12">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Quantité
                </label>
                <input
                  type="number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="0 g"
                  required
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-4 w-4/12">
            <ListBoxCategories />
            <div className="flex items-center justify-center w-full">
              <div className="flex flex-col w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Image du produit
                </label>
                <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      aria-hidden="true"
                      className="w-10 h-10 mb-3 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">
                        Clique pour ajouter une image
                      </span>{' '}
                      ou drag and drop
                    </p>
                    <p className="text-xs text-gray-500 ">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
            </div>
            <div className="flex items-center pl-4 rounded border border-gray-200 bg-gray-50">
              <div className="flex px-2 py-4">
                <div className="flex items-center h-5">
                  <input
                    id="helper-checkbox"
                    aria-describedby="helper-checkbox-text"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-200 focus:ring-blue-500 focus:ring-2"
                  />
                </div>
                <div className="ml-2 text-sm">
                  <label className="font-medium text-gray-900">
                    Disponiblité du produit
                  </label>
                  <p
                    id="helper-checkbox-text"
                    className="text-xs font-normal text-gray-500"
                  >
                    Permet de mentionner la disponibilité du produit au client
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between space-x-8">
              <div className="flex flex-col w-4/12">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Stock
                </label>
                <input
                  type="number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="10"
                  required
                />
              </div>
              <div className="flex flex-col w-8/12">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Composition
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="80% coton..."
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
