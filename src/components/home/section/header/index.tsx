export default function Header() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-8 mb-16">
        <div className="flex items-center py-8">
          <img src="https://images.pexels.com/photos/8101596/pexels-photo-8101596.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
          <div className="flex flex-col space-y-6 items-start ml-16">
            <h1 className="-ml-2 text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-cyan-100 via-violet-600 to-indigo-900">
              Brandii.
            </h1>
            <h3 className="text-2xl tracking-tight text-gray-400">
              Vivamus euismod facilisis urna, a sodales nulla viverra ultrices.
              Nunc malesuada metus leo.
            </h3>
            <button className="bg-indigo-600 px-8 py-4 rounded-md text-white text-md font-medium">
              Voir les produits
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
