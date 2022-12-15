export default function Header() {
  return (
    <>
      <div className="max-w-7xl mx-auto space-y-24">
        <h1 className="text-7xl font-bold tracking-tighter text-gray-900 text-center mt-24">
          Brandii.
        </h1>
        <div className="flex flex-row justify-center space-x-12">
          <div className="bg-slate-100 rounded-2xl w-4/12 h-96 overflow-hidden">
            <img
              className="w-full backdrop-contrast-150"
              src="https://images.pexels.com/photos/4091883/pexels-photo-4091883.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            />
          </div>
          <div className="bg-slate-100 rounded-2xl w-4/12 h-96 overflow-hidden">
            <img
              className="w-full backdrop-contrast-150"
              src="https://images.pexels.com/photos/6364034/pexels-photo-6364034.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            />
          </div>
          <div className="bg-slate-100 rounded-2xl w-4/12 h-96 overflow-hidden">
            <img
              className="w-full backdrop-contrast-150"
              src="https://images.pexels.com/photos/4925894/pexels-photo-4925894.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            />
          </div>
        </div>
      </div>
    </>
  );
}
