export default function Header() {
  return (
    <>
      <div className="max-w-7xl mx-auto space-y-32">
        <div className="text-center mt-36">
          <h1 className="text-7xl font-bold tracking-tighter">Brandii.</h1>
        </div>
        <div className="flex flex-row justify-center space-x-12">
          <div className="bg-slate-100 rounded-2xl w-4/12 h-96"></div>
          <div className="bg-slate-100 rounded-2xl w-4/12 h-96"></div>
          <div className="bg-slate-100 rounded-2xl w-4/12 h-96"></div>
        </div>
      </div>
    </>
  );
}
