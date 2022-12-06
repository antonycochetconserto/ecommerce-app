import { useState, Fragment } from 'react';
import { Listbox } from '@headlessui/react';

const people: { id: number; name: string }[] = [
  { id: 0, name: 'Vêtement' },
  { id: 1, name: 'Chaussure' },
  { id: 2, name: 'Pantalon' },
];

export default function ListBoxCategories() {
  return (
    <>
      <h3 className="block text-sm font-medium text-gray-900 -mb-2">
        Choissisez la/les catégorie(s):
      </h3>
      <ul className="flex flex-wrap space-x-2">
        {people.map((elem) => {
          return (
            <li>
              <input
                type="checkbox"
                id={elem.id + elem.name}
                value=""
                className="hidden peer"
              />
              <label
                htmlFor={elem.id + elem.name}
                className="inline-flex text-sm justify-between items-center px-2 py-1 w-full rounded-md border-2 border-gray-900 cursor-pointer peer-checked:border-blue-700 peer-checked:text-blue-700"
              >
                <div className="block">
                  <div className="w-full font-semibold">{elem.name}</div>
                </div>
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
}
