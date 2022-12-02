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
        <div className="flex flex-row w-full">
          <div className="w-8/12">
            <div className="flex flex-col space-y-8">
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Description
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Description du produit"
                ></textarea>
              </div>
            </div>
            <div className="flex flex-col space-y-8">
              <img
                className="max-w-lg h-auto rounded-lg"
                src="/docs/images/examples/image-1@2x.jpg"
                alt="image description"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
