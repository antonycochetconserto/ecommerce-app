import Label from '../Label/label';

interface IDashboardFormMultipleCheckbox {
  register: any;
  labelTitle: string;
  value: string;
}

const people: { id: number; name: string }[] = [
  { id: 0, name: 'Vêtement' },
  { id: 1, name: 'Chaussure' },
  { id: 2, name: 'Pantalon' },
];

export default function DashboardFormMultipleCheckbox({
  register,
  labelTitle,
  value,
}: IDashboardFormMultipleCheckbox) {
  return (
    <>
      <Label isRequired={false} labelTitle={labelTitle} />
      <ul className="flex flex-wrap space-x-2">
        {people.map((elem) => {
          return (
            <li key={elem.id} className="text-gray-400">
              <input
                type="checkbox"
                id={elem.id + elem.name}
                value={elem.name}
                className="hidden peer"
                onChange={(e) => console.log(e.target.value)}
              />
              <label
                htmlFor={elem.id + elem.name}
                className="inline-flex text-sm justify-between items-center px-2 py-1 w-full rounded-md border border-gray-400 cursor-pointer peer-checked:border-blue-700 peer-checked:text-blue-700"
              >
                <div className="block">
                  <div className="w-full">{elem.name}</div>
                </div>
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
}
