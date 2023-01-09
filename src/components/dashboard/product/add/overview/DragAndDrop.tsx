import * as React from 'react';
import { useState } from 'react';
import { Reorder } from 'framer-motion';
import { Item } from './Item';
import { ChevronUpDownIcon, EyeDropperIcon } from '@heroicons/react/20/solid';

const initialItems = [
  { type: 'Couleur', icon: <EyeDropperIcon className="w-4 h-4" /> },
  { type: 'Taille', icon: <ChevronUpDownIcon className="w-4 h-4" /> },
];

export default function App() {
  const [items, setItems] = useState(initialItems);

  return (
    <Reorder.Group
      axis="y"
      className="space-y-4"
      onReorder={setItems}
      values={items}
    >
      {items.map((item) => (
        <Item key={item.type} item={item} />
      ))}
    </Reorder.Group>
  );
}
