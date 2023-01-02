import { XCircleIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { Dispatch, SetStateAction, useState } from 'react';

interface IPaymentAlert {
  alertMessage: { content: string | undefined; type: string };
  alertShow: boolean;
  setAlertShow: Dispatch<SetStateAction<boolean>>;
}

export default function PaymentAlert({
  alertMessage,
  alertShow,
  setAlertShow,
}: IPaymentAlert) {
  return (
    <>
      {alertShow && (
        <div className="max-w-5xl">
          <div className="bg-red-100 py-4 px-8 rounded-lg absolute max-w-2xl top-6 right-12 z-10 w-full">
            <div className="flex items-center justify-between text-red-800">
              <div className="flex items-center space-x-2">
                <XCircleIcon className="w-4 h-4 text-red-500" />
                <h3 className="font-semibold">Erreur</h3>
              </div>
              <XMarkIcon
                onClick={() => setAlertShow(false)}
                className="w-4 h-4 cursor-pointer"
              />
            </div>
            <p className="text-red-500 ml-6 text-sm font-medium">
              {alertMessage.content}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
