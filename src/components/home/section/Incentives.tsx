import { TruckIcon } from '@heroicons/react/24/outline';
import { Component } from 'react';

export default function SectionIncentives() {
  const advantages: { icon: any; title: string; subtitle: string }[] = [
    {
      icon: <TruckIcon className="w-16 h-16 mb-6 text-gray-700" />,
      title: 'Nullam quis consectetur massa',
      subtitle:
        'Quisque sollicitudin massa elit. Donec eget magna ut justo mattis lacinia non.',
    },
    {
      icon: <TruckIcon className="w-16 h-16 mb-6 text-gray-700" />,
      title: 'Nullam quis consectetur massa',
      subtitle:
        'Quisque sollicitudin massa elit. Donec eget magna ut justo mattis lacinia non.',
    },
    {
      icon: <TruckIcon className="w-16 h-16 mb-6 text-gray-700" />,
      title: 'Nullam quis consectetur massa',
      subtitle:
        'Quisque sollicitudin massa elit. Donec eget magna ut justo mattis lacinia non.',
    },
  ];
  return (
    <div className="max-w-7xl flex mx-auto px-8">
      <div className="flex flex-col py-36">
        <div className="flex items-center justify-between border-b pb-20">
          <div className="flex flex-col space-y-6 w-6/12">
            <h3 className="text-4xl tracking-tighter text-gray-800 font-bold leading-8">
              Nous construisons notre boutique sur un relationnel client poussé
            </h3>
            <p className="text-gray-500">
              Suspendisse mollis tortor id tempus volutpat. Nunc placerat dolor
              non erat sagittis tempor. Suspendisse porta turpis in mauris
              tincidunt, eget facilisis elit interdum. Quisque sollicitudin
              massa elit, ac sollicitudin enim efficitur at. Nulla facilisi.
              Donec eget magna ut justo mattis lacinia non nec lorem
            </p>
          </div>
          <img
            className="rounded-md max-w-lg"
            src="https://images.pexels.com/photos/8101550/pexels-photo-8101550.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          />
        </div>
        <ul className="flex flex-row space-x-12 justify-between mt-14">
          {advantages.map((advantage, index) => {
            return (
              <li key={index} className="leading-5 w-3/12">
                {advantage.icon}
                <div className="space-y-2">
                  <h4 className="text-gray-800 font-semibold text-sm">
                    {advantage.title}
                  </h4>
                  <p className="text-gray-500 font-normal text-sm">
                    {advantage.subtitle}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
