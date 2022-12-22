import { ArrowRightIcon } from '@heroicons/react/20/solid';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function SectionCategory() {
  const products: { img: string; title: string; subtitle: string }[] = [
    {
      img: 'https://images.pexels.com/photos/8131589/pexels-photo-8131589.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      title: 'Desk and Office',
      subtitle: 'Work from accessoires',
    },
    {
      img: 'https://images.pexels.com/photos/8129909/pexels-photo-8129909.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      title: 'Desk and Office',
      subtitle: 'Work from accessoires',
    },
    {
      img: 'https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      title: 'Desk and Office',
      subtitle: 'Work from accessoires',
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-200px 0px -0px 0px',
  });

  return (
    <div className="bg-gray-50/80">
      <div className="max-w-7xl flex justify-around mx-auto">
        <div
          ref={ref}
          style={{
            opacity: isInView ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
          className="flex flex-col px-8 py-28"
        >
          <h3 className="text-3xl tracking-tighter text-gray-800 font-bold pb-8">
            Article de la collection
          </h3>
          <div className="flex justify-between">
            {products.map((product, index) => {
              index += 0.2;
              return (
                <motion.div
                  style={{
                    transform: isInView ? 'none' : 'translateY(200px)',
                    opacity: isInView ? 1 : 0,
                    transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${index}s`,
                  }}
                  key={index}
                  className="w-4/12 px-8 -ml-8"
                >
                  <img className="rounded-md" src={product.img} />
                  <div className="leading-5 mt-8">
                    <h4 className="text-gray-500 font-normal">
                      {product.title}
                    </h4>
                    <div className="flex items-center space-x-2 hover:last:translate-x-2 transition duration-150">
                      <p className="text-gray-800 font-semibold">
                        {product.subtitle}
                      </p>
                      <ArrowRightIcon className="w-4 h-4 text-gray-900" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
