import { API, graphqlOperation } from 'aws-amplify';
import { createProduct } from '../../../graphql/mutations';
import { TProduct } from '../../../ts/types/product/tproduct';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { listBrands, listCategories } from '../../../graphql/queries';
import { TCategory } from '../../../ts/types/category/tcategory';

import DashboardFormInput from '../../common/form/Input/Input';
import DashboardFormTextArea from '../../common/form/Textarea';
import DashboardFormFile from '../../common/form/Input/InputFile';
import DashboardFormCheckboxHelperText from '../../common/form/Checkbox/HelperText';
import DashboardHomeReactSelect from '../../common/form/Select/ReactSelect';
import { TBrand } from '../../../ts/types/brand/tbrand';

export default function AddProduct() {
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
    <>
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-12">
        <div className="relative sm:rounded-lg w-full">
          <div className="flex flex-row justify-between pb-8">
            <h3 className="text-3xl tracking-tighter font-bold text-slate-800">
              Ajout d'un produit
            </h3>
          </div>
        </div>
        <form
          onSubmit={onSubmit}
          className="flex flex-row w-full justify-between bg-white px-8 py-6"
        >
          <div className="flex flex-col space-y-4 w-6/12">
            <DashboardFormInput
              register={register}
              errors={errors}
              labelTitle={'Titre'}
              value={'title'}
              placeholder={'Titre du produit'}
              isRequired={false}
              type={'text'}
            />
            <DashboardFormInput
              register={register}
              errors={errors}
              labelTitle={'Sous titre'}
              value={'subTitle'}
              placeholder={'Sous-titre du produit'}
              isRequired={false}
              type={'text'}
            />
            <DashboardFormTextArea
              register={register}
              errors={errors}
              labelTitle={'Description'}
              value={'fullDescription'}
              placeholder={'Description du produit'}
              isRequired={false}
            />
            <DashboardHomeReactSelect
              register={register}
              control={control}
              labelTitle={'Choix de la marque'}
              value={'productBrandId'}
              placeholder={'Example&Co'}
              data={brands}
            />
            <div className="flex flex-row justify-between space-x-8">
              <div className="flex flex-col w-6/12">
                <DashboardFormInput
                  register={register}
                  errors={errors}
                  labelTitle={'Taille'}
                  value={'size'}
                  placeholder={'La taille du produit'}
                  isRequired={false}
                  type={'number'}
                />
              </div>
              <div className="flex flex-col w-6/12">
                <DashboardFormInput
                  register={register}
                  errors={errors}
                  labelTitle={'Poids'}
                  value={'weight'}
                  placeholder={'Le poids du produit'}
                  isRequired={false}
                  type={'number'}
                />
              </div>
            </div>
            <div className="flex flex-row justify-between space-x-8">
              <div className="flex flex-col w-8/12">
                <DashboardFormInput
                  register={register}
                  errors={errors}
                  labelTitle={'Prix'}
                  value={'price'}
                  placeholder={'Le prix du produit'}
                  isRequired={false}
                  type={'number'}
                />
              </div>
              <div className="flex flex-col w-4/12">
                <DashboardFormInput
                  register={register}
                  errors={errors}
                  labelTitle={'Quantité'}
                  value={'quantity'}
                  placeholder={'La quantité du produit'}
                  isRequired={false}
                  type={'number'}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-4 w-4/12">
            <DashboardHomeReactSelect
              register={register}
              control={control}
              labelTitle={'Choix de la catégorie'}
              value={'productCategoryId'}
              placeholder={'Example&Co'}
              data={categories}
            />
            <div className="flex items-center justify-center w-full">
              <div className="flex flex-col w-full">
                <DashboardFormFile
                  register={register}
                  errors={errors}
                  labelTitle={'Image du produit'}
                  value={'image'}
                  isRequired={false}
                />
              </div>
            </div>
            <div className="flex items-center pl-4 rounded border border-gray-200 bg-gray-50">
              <div className="flex px-2 py-4">
                <DashboardFormCheckboxHelperText
                  register={register}
                  errors={errors}
                  labelTitle={'Disponibilité du produit'}
                  textDescription={
                    'Permet de mentionner la disponibilité du produit'
                  }
                  value={'isAvailable'}
                />
              </div>
            </div>
            <div className="flex flex-row justify-between space-x-8">
              <div className="flex flex-col w-4/12">
                <DashboardFormInput
                  register={register}
                  errors={errors}
                  labelTitle={'Stock'}
                  value={'stock'}
                  placeholder={'5 produits'}
                  isRequired={false}
                  type={'number'}
                />
              </div>
              <div className="flex flex-col w-8/12">
                <DashboardFormInput
                  register={register}
                  errors={errors}
                  labelTitle={'Composition'}
                  value={'composition'}
                  placeholder={'La composition du produit'}
                  isRequired={false}
                  type={'text'}
                />
              </div>
            </div>
            <input
              type="submit"
              value="J'ajoute le produit"
              className="bg-blue-500 px-2 py-3 text-white rounded font-medium hover:bg-blue-600 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </>
  );
}
