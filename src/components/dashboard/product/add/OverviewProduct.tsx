import { API, graphqlOperation } from 'aws-amplify';
import { createProduct } from '../../../../graphql/mutations';
import { TProduct } from '../../../../ts/types/product/tproduct';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { listBrands, listCategories } from '../../../../graphql/queries';
import { TCategory } from '../../../../ts/types/category/tcategory';

import DashboardFormInput from '../../../common/form/Input/Input';
import DashboardFormTextArea from '../../../common/form/Textarea';
import DashboardFormFile from '../../../common/form/Input/InputFile';
import DashboardFormCheckboxHelperText from '../../../common/form/Checkbox/HelperText';
import DashboardHomeReactSelect from '../../../common/form/Select/ReactSelect';
import { TBrand } from '../../../../ts/types/brand/tbrand';
import { CloudArrowUpIcon } from '@heroicons/react/24/outline';
import {
  CameraIcon,
  InformationCircleIcon,
  PencilIcon,
  PlusCircleIcon,
  RocketLaunchIcon,
} from '@heroicons/react/20/solid';

export default function ProductOverview() {
  const [categories, setCategories] = useState<TCategory[]>([]);
  const [brands, setBrands] = useState<TBrand[]>([]);
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<TProduct>();
  const onSubmit = handleSubmit((data) => addProduct(data));

  useEffect(() => {
    fetchCategories();
    fetchBrands();
  }, []);

  async function fetchCategories() {
    const apiData: any = await API.graphql({ query: listCategories });
    setCategories(apiData.data.listCategories.items);
  }

  async function fetchBrands() {
    const apiData: any = await API.graphql({ query: listBrands });
    setBrands(apiData.data.listBrands.items);
  }

  const addProduct = async (product: TProduct) => {
    try {
      if (!product.title) return;
      await API.graphql(graphqlOperation(createProduct, { input: product }));
      reset();
    } catch (err) {
      console.log('error creating product:', err);
    }
  };

  return (
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-6">
      <div className="flex flex-row items-center pb-8 w-full justify-between">
        <div className="flex flex-row items-center space-x-2 w-5/12">
          <h3 className="text-2xl tracking-tighter font-bold text-slate-800">
            Ajout d'un produit
          </h3>
          <InformationCircleIcon className="w-5 h-5 text-slate-500" />
        </div>
        <div className="w-6/12 flex flex-row items-center space-x-2">
          <ol className="flex items-center w-full max-w-md">
            <li className="flex w-full items-center text-blue-600 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-600 after:border-4 after:inline-block">
              <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full lg:h-10 lg:w-10 shrink-0">
                <CameraIcon className="w-4 h-4 text-white lg:w-5 lg:h-5" />
              </div>
            </li>
            <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-4 after:inline-block">
              <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full lg:h-10 lg:w-10  shrink-0">
                <PencilIcon className="w-4 h-4 text-white lg:w-5 lg:h-5" />
              </div>
            </li>
            <li className="flex items-center w-full">
              <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full lg:h-10 lg:w-10  shrink-0">
                <RocketLaunchIcon className="w-4 h-4 text-white lg:w-5 lg:h-5" />
              </div>
            </li>
          </ol>
          <button className="rounded-md bg-gray-200 text-white px-4 py-2">
            Valider le produit
          </button>
        </div>
      </div>
      <div className="flex flex-row w-full justify-between">
        <div className="flex flex-col w-5/12">
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-96 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-100 "
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <CloudArrowUpIcon className="w-20 h-20 text-gray-400 mb-6" />
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
          <div className="flex flex-row justify-between space-x-12 mt-8">
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-36 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-100 "
              >
                <div className="flex flex-col items-center justify-center">
                  <CloudArrowUpIcon className="w-10 h-10 text-gray-400" />
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-36 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-100 "
              >
                <div className="flex flex-col items-center justify-center">
                  <CloudArrowUpIcon className="w-10 h-10 text-gray-400" />
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-36 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-100 "
              >
                <div className="flex flex-col items-center justify-center">
                  <CloudArrowUpIcon className="w-10 h-10 text-gray-400" />
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-6/12">
          <div className="flex flex-col space-y-6">
            <div className="relative w-6/12">
              <input
                type="text"
                id="title"
                min={0}
                className="block p-4 w-full font-semibold text-gray-900 bg-gray-100 rounded-md appearance-none focus:outline-none peer"
                placeholder=" "
              />
              <label
                htmlFor="title"
                className="absolute rounded-md text-sm text-gray-600 duration-300 transform -translate-y-4 bg-white top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-90 peer-focus:bg-white font-semibold peer-focus:-translate-y-4 left-2"
              >
                Titre
              </label>
            </div>
            <div className="flex flex-row space-x-6">
              <div className="relative w-5/12">
                <input
                  type="number"
                  id="title"
                  min={0}
                  className="block p-4 w-full font-semibold text-gray-900 bg-gray-100 rounded-md appearance-none focus:outline-none peer"
                  placeholder=" "
                />
                <label
                  htmlFor="title"
                  className="absolute rounded-md text-sm text-gray-600 duration-300 transform -translate-y-4 bg-white top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-90 peer-focus:bg-white font-semibold peer-focus:-translate-y-4 left-2"
                >
                  Prix €
                </label>
              </div>
              <div className="relative w-3/12">
                <input
                  type="number"
                  id="title"
                  min={0}
                  className="block p-4 w-full font-semibold text-gray-900 bg-gray-100 rounded-md appearance-none focus:outline-none peer"
                  placeholder=" "
                />
                <label
                  htmlFor="title"
                  className="absolute rounded-md text-sm text-gray-600 duration-300 transform -translate-y-4 bg-white top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-90 peer-focus:bg-white font-semibold peer-focus:-translate-y-4 left-2"
                >
                  Stock
                </label>
              </div>
            </div>
            <div className="relative w-full">
              <textarea
                rows={4}
                id="description"
                className="block w-full p-4 font-semibold text-gray-900 bg-gray-100 rounded-md appearance-none focus:outline-none peer"
                placeholder=" "
              ></textarea>
              <label
                htmlFor="description"
                className="absolute rounded-md text-sm text-gray-600 duration-300 transform -translate-y-4 bg-white top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-9 peer-placeholder-shown:top-12 peer-focus:top-2 peer-focus:scale-90 font-semibold peer-focus:-translate-y-4 left-2"
              >
                Description
              </label>
            </div>
            <div className="flex flex-col border-2 border-gray-200 border-dashed rounded-md w-full px-4 pb-4 relative space-y-4">
              <div className="absolute flex flex-row items-center bg-white rounded-md top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 px-5 py-6 justify-center shadow-xl cursor-pointer">
                <PlusCircleIcon className="w-8 h-8 text-blue-600 mr-2 absolute -top-4 -right-6" />
                <h3 className="font-semibold tracking-tight text-slate-700 text-sm">
                  Ajoutez des champs personnalisés
                </h3>
              </div>
              <div className="bg-gray-100 rounded-md w-full h-16 animate-pulse"></div>
              <div className="flex flex-row justify-between space-x-2">
                <div className="bg-gray-100 rounded-md w-7/12 h-16 animate-pulse"></div>
                <div className="bg-gray-100 rounded-md w-5/12 h-16 animate-pulse"></div>
              </div>
              <div className="bg-gray-100 rounded-md w-full h-36 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
