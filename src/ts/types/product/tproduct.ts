export type TProduct = {
  title: string;
  subTitle: string;
  price: number;
  fullDescription: string;
  size: string;
  weight: number;
  quantity: number;
  //image: FileList;
  isAvailable: boolean;
  reference: string;
  stock: number;
  composition: string;
  productCategoryId: string;
  productBrandId: string;
};

export const productInitialValues = {
  title: '',
  subTitle: '',
  price: 0,
  fullDescription: '',
  size: '',
  weight: 0,
  quantity: 0,
  //image: '',
  isAvailable: false,
  reference: '',
  stock: 0,
  composition: '',
  productCategoryId: '',
  productBrandId: '',
};
