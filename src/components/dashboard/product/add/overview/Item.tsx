import * as React from 'react';
import { useMotionValue, Reorder, useDragControls } from 'framer-motion';
import { XCircleIcon } from '@heroicons/react/20/solid';
import { Bars4Icon } from '@heroicons/react/24/solid';

interface IItem {
  item: {
    icon: JSX.Element;
    type: string;
  };
}

export const Item = ({ item }: IItem) => {
  const y = useMotionValue(0);
  const controls = useDragControls();

  return (
    <Reorder.Item
      className="bg-white py-4 px-8 rounded-md flex items-center justify-between"
      dragListener={false}
      dragControls={controls}
      value={item}
      id={item.type}
      style={{ y }}
    >
      <div className="space-x-2 flex items-center">
        <Bars4Icon
          className="reorder-handle w-4 h-4 text-slate-400 cursor-grab mr-6"
          onPointerDown={(e) => controls.start(e)}
        />
        {item.icon}
        <span className="font-semibold cursor-pointer hover:text-indigo-600 select-none">
          {item.type}
        </span>
      </div>
      <div className="space-x-3 flex items-center">
        <XCircleIcon className="w-4 h-4 text-red-500 cursor-pointer" />
      </div>
    </Reorder.Item>
  );
};
