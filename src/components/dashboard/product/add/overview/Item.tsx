import * as React from 'react';
import { useMotionValue, Reorder } from 'framer-motion';
import { XCircleIcon } from '@heroicons/react/20/solid';

interface IItem {
  item: {
    icon: JSX.Element;
    type: string;
  };
}

export const Item = ({ item }: IItem) => {
  const y = useMotionValue(0);

  return (
    <Reorder.Item
      className="bg-white py-4 px-8 rounded-md flex items-center cursor-move justify-between"
      value={item}
      id={item.type}
      style={{ y }}
    >
      <div className="space-x-2 flex items-center">
        {item.icon}
        <span className="font-semibold cursor-pointer hover:text-indigo-600">
          {item.type}
        </span>
      </div>
      <XCircleIcon className="w-5 h-5 text-red-500" />
    </Reorder.Item>
  );
};
