import { ChevronLeftIcon } from '@heroicons/react/20/solid';
import { useForm } from 'react-hook-form';
import DashboardFormInput from '../../common/form/Input/Input';

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = handleSubmit((data: any) => console.log(data));
  return (
    <div className="w-7/12">
      <div className="flex flex-col mx-auto px-20">
        <h3 className="font-bold text-4xl text-slate-900 py-8">Brandii.</h3>
        <form onSubmit={onSubmit}>
          <div className="flex flex-col">
            <div className="flex flex-col">
              <button className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md">
                Vous avez déjà un compte ?
              </button>
              <div className="relative flex py-8 items-center">
                <div className="flex-grow border-t border-gray-400"></div>
                <span className="flex-shrink mx-4 text-gray-800 font-semibold">
                  Ou
                </span>
                <div className="flex-grow border-t border-gray-400"></div>
              </div>
            </div>
            <h4 className="text-xl font-semibold mb-6">
              Information de livraison
            </h4>
            <div className="flex flex-col space-y-4 border-b pb-8">
              <div className="flex flex-row justify-between space-x-4">
                <div className="flex flex-col w-6/12">
                  <DashboardFormInput
                    register={register}
                    errors={errors}
                    labelTitle={'Nom'}
                    value={'name'}
                    placeholder={'Votre nom ...'}
                    isRequired={false}
                    type={'text'}
                  />
                </div>
                <div className="flex flex-col w-6/12">
                  <DashboardFormInput
                    register={register}
                    errors={errors}
                    labelTitle={'Prénom'}
                    value={'firstname'}
                    placeholder={'Votre prénom ...'}
                    isRequired={false}
                    type={'text'}
                  />
                </div>
              </div>
              <DashboardFormInput
                register={register}
                errors={errors}
                labelTitle={'Adresse mail'}
                value={'mail'}
                placeholder={'Votre adresse mail'}
                isRequired={false}
                type={'text'}
              />
              <DashboardFormInput
                register={register}
                errors={errors}
                labelTitle={'Adresse'}
                value={'adress'}
                placeholder={'Adresse'}
                isRequired={false}
                type={'text'}
              />
              <div className="flex flex-row justify-between space-x-8">
                <div className="flex flex-col w-6/12">
                  <DashboardFormInput
                    register={register}
                    errors={errors}
                    labelTitle={'Code postal'}
                    value={'zip'}
                    placeholder={'Votre code postal'}
                    isRequired={false}
                    type={'text'}
                  />
                </div>
                <div className="flex flex-col w-6/12">
                  <DashboardFormInput
                    register={register}
                    errors={errors}
                    labelTitle={'Ville'}
                    value={'city'}
                    placeholder={'Votre ville'}
                    isRequired={false}
                    type={'text'}
                  />
                </div>
              </div>
              <DashboardFormInput
                register={register}
                errors={errors}
                labelTitle={'Numéro de téléphone'}
                value={'phone'}
                placeholder={'Téléphone'}
                isRequired={false}
                type={'text'}
              />
            </div>
            <div className="flex flex-row justify-between items-center pt-6">
              <p className="flex items-center text-sm">
                <span>
                  <ChevronLeftIcon className="w-5 h-5 mr-1" />
                </span>
                Retour à la boutique
              </p>
              <button className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md">
                Continuer vers le paiement
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
