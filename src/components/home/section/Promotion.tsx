import { ArrowRightIcon } from '@heroicons/react/24/solid';

export default function SectionPromotion() {
  return (
    <div className="bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-row justify-between relative py-32 overflow-hidden">
          <div className="flex flex-col px-8">
            <h3 className="text-5xl tracking-tighter text-white font-bold pb-8">
              Final stock.
              <br />
              Up to 50% off.
            </h3>
            <button className="text-white border-b pb-2 flex justify-between items-center">
              Voir les produits
              <ArrowRightIcon className="w-4 h-4 text-white" />
            </button>
          </div>
          <div className="flex flex-row space-x-12">
            <div className="flex flex-col space-y-8 absolute top-8 right-96">
              <img
                className="w-72 h-72 rounded-md object-cover"
                src="https://images.pexels.com/photos/8101525/pexels-photo-8101525.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              />
              <img
                className="w-72 h-72 rounded-md object-cover"
                src="https://images.pexels.com/photos/7797007/pexels-photo-7797007.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              />
            </div>
            <div className="flex flex-col space-y-6 absolute bottom-8 right-8">
              <img
                className="w-72 h-72 rounded-md object-cover"
                src="https://images.pexels.com/photos/8101525/pexels-photo-8101525.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              />
              <img
                className="w-72 h-72 rounded-md overflow-hidden object-cover"
                src="https://images.pexels.com/photos/7038222/pexels-photo-7038222.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
