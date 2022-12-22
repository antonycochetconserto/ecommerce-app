import { useEffect, useRef, useState } from 'react';
import { useInView, motion } from 'framer-motion';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';

export default function SectionIncentives() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px 0px -0px 0px',
  });

  return (
    <div className="max-w-7xl flex mx-auto px-8">
      <div className="flex flex-col py-36">
        <motion.div
          ref={ref}
          className="flex items-center justify-between border-b pb-20"
        >
          <motion.div
            style={{
              transform: isInView ? 'none' : 'translateY(200px)',
              opacity: isInView ? 1 : 0,
              transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
            }}
            className="flex flex-col space-y-6 w-6/12"
          >
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
          </motion.div>
          <motion.img
            style={{
              transform: isInView ? 'none' : 'translateX(200px)',
              opacity: isInView ? 1 : 0,
              transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
            }}
            className="rounded-md max-w-lg"
            src="https://images.pexels.com/photos/8101550/pexels-photo-8101550.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          />
        </motion.div>
        <div className="flex flex-col text-slate-900 text-lg py-12">
          <h3 className="font-semibold text-2xl tracking-tighter">
            What people saying ?
          </h3>
          <ul className="flex flex-row justify-between space-x-20 mt-12">
            <li className="w-4/12 text-slate-600">
              <ChatBubbleLeftRightIcon className="w-8 h-8 mb-8 text-slate-400" />
              <p className="font-normal mb-2 text-xl">
                Mauris id augue sed lacus lacinia tempus placerat id eros. Cras
                ligula lacus. Lacus lacinia tempus placerat id!
              </p>
              <p className="text-slate-800 font-bold tracking-tight">
                Antony Cochet
              </p>
            </li>
            <li className="w-4/12 text-slate-600">
              <ChatBubbleLeftRightIcon className="w-8 h-8 mb-8 text-slate-400" />
              <p className="font-normal mb-2 text-xl">
                Mauris id augue sed lacus lacinia tempus placerat id eros. Cras
                ligula lacus. Lacus lacinia tempus placerat id!
              </p>
              <p className="text-slate-800 font-bold tracking-tight">
                Antony Cochet
              </p>
            </li>
            <li className="w-4/12 text-slate-600">
              <ChatBubbleLeftRightIcon className="w-8 h-8 mb-8 text-slate-400" />
              <p className="font-normal mb-2 text-xl">
                Mauris id augue sed lacus lacinia tempus placerat id eros. Cras
                ligula lacus. Lacus lacinia tempus placerat id!
              </p>
              <p className="text-slate-800 font-bold tracking-tight">
                Antony Cochet
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
