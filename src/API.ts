/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProductInput = {
  id?: string | null,
  title: string,
  subTitle?: string | null,
  price: number,
  quickDescription?: string | null,
  fullDescription?: string | null,
  size?: string | null,
  weight?: number | null,
  quantity?: number | null,
  isAvailable?: boolean | null,
  imageBrand?: string | null,
  reference?: string | null,
  stock?: number | null,
  composition?: string | null,
  categoryProductsId?: string | null,
  productCategoryId?: string | null,
};

export type ModelProductConditionInput = {
  title?: ModelStringInput | null,
  subTitle?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  quickDescription?: ModelStringInput | null,
  fullDescription?: ModelStringInput | null,
  size?: ModelStringInput | null,
  weight?: ModelFloatInput | null,
  quantity?: ModelIntInput | null,
  isAvailable?: ModelBooleanInput | null,
  imageBrand?: ModelStringInput | null,
  reference?: ModelStringInput | null,
  stock?: ModelIntInput | null,
  composition?: ModelStringInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
  categoryProductsId?: ModelIDInput | null,
  productCategoryId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Product = {
  __typename: "Product",
  id: string,
  title: string,
  subTitle?: string | null,
  price: number,
  quickDescription?: string | null,
  fullDescription?: string | null,
  size?: string | null,
  weight?: number | null,
  quantity?: number | null,
  isAvailable?: boolean | null,
  imageBrand?: string | null,
  reference?: string | null,
  stock?: number | null,
  composition?: string | null,
  category?: Category | null,
  createdAt: string,
  updatedAt: string,
  categoryProductsId?: string | null,
  productCategoryId?: string | null,
};

export type Category = {
  __typename: "Category",
  id: string,
  title: string,
  description?: string | null,
  products?: ModelProductConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items:  Array<Product | null >,
  nextToken?: string | null,
};

export type UpdateProductInput = {
  id: string,
  title?: string | null,
  subTitle?: string | null,
  price?: number | null,
  quickDescription?: string | null,
  fullDescription?: string | null,
  size?: string | null,
  weight?: number | null,
  quantity?: number | null,
  isAvailable?: boolean | null,
  imageBrand?: string | null,
  reference?: string | null,
  stock?: number | null,
  composition?: string | null,
  categoryProductsId?: string | null,
  productCategoryId?: string | null,
};

export type DeleteProductInput = {
  id: string,
};

export type CreateCategoryInput = {
  id?: string | null,
  title: string,
  description?: string | null,
};

export type ModelCategoryConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryInput = {
  id: string,
  title?: string | null,
  description?: string | null,
};

export type DeleteCategoryInput = {
  id: string,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  subTitle?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  quickDescription?: ModelStringInput | null,
  fullDescription?: ModelStringInput | null,
  size?: ModelStringInput | null,
  weight?: ModelFloatInput | null,
  quantity?: ModelIntInput | null,
  isAvailable?: ModelBooleanInput | null,
  imageBrand?: ModelStringInput | null,
  reference?: ModelStringInput | null,
  stock?: ModelIntInput | null,
  composition?: ModelStringInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
  categoryProductsId?: ModelIDInput | null,
  productCategoryId?: ModelIDInput | null,
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection",
  items:  Array<Category | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionProductFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  subTitle?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  quickDescription?: ModelSubscriptionStringInput | null,
  fullDescription?: ModelSubscriptionStringInput | null,
  size?: ModelSubscriptionStringInput | null,
  weight?: ModelSubscriptionFloatInput | null,
  quantity?: ModelSubscriptionIntInput | null,
  isAvailable?: ModelSubscriptionBooleanInput | null,
  imageBrand?: ModelSubscriptionStringInput | null,
  reference?: ModelSubscriptionStringInput | null,
  stock?: ModelSubscriptionIntInput | null,
  composition?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProductFilterInput | null > | null,
  or?: Array< ModelSubscriptionProductFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionCategoryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    subTitle?: string | null,
    price: number,
    quickDescription?: string | null,
    fullDescription?: string | null,
    size?: string | null,
    weight?: number | null,
    quantity?: number | null,
    isAvailable?: boolean | null,
    imageBrand?: string | null,
    reference?: string | null,
    stock?: number | null,
    composition?: string | null,
    category?:  {
      __typename: "Category",
      id: string,
      title: string,
      description?: string | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    categoryProductsId?: string | null,
    productCategoryId?: string | null,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    subTitle?: string | null,
    price: number,
    quickDescription?: string | null,
    fullDescription?: string | null,
    size?: string | null,
    weight?: number | null,
    quantity?: number | null,
    isAvailable?: boolean | null,
    imageBrand?: string | null,
    reference?: string | null,
    stock?: number | null,
    composition?: string | null,
    category?:  {
      __typename: "Category",
      id: string,
      title: string,
      description?: string | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    categoryProductsId?: string | null,
    productCategoryId?: string | null,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    subTitle?: string | null,
    price: number,
    quickDescription?: string | null,
    fullDescription?: string | null,
    size?: string | null,
    weight?: number | null,
    quantity?: number | null,
    isAvailable?: boolean | null,
    imageBrand?: string | null,
    reference?: string | null,
    stock?: number | null,
    composition?: string | null,
    category?:  {
      __typename: "Category",
      id: string,
      title: string,
      description?: string | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    categoryProductsId?: string | null,
    productCategoryId?: string | null,
  } | null,
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    description?: string | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        title: string,
        subTitle?: string | null,
        price: number,
        quickDescription?: string | null,
        fullDescription?: string | null,
        size?: string | null,
        weight?: number | null,
        quantity?: number | null,
        isAvailable?: boolean | null,
        imageBrand?: string | null,
        reference?: string | null,
        stock?: number | null,
        composition?: string | null,
        createdAt: string,
        updatedAt: string,
        categoryProductsId?: string | null,
        productCategoryId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryMutation = {
  updateCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    description?: string | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        title: string,
        subTitle?: string | null,
        price: number,
        quickDescription?: string | null,
        fullDescription?: string | null,
        size?: string | null,
        weight?: number | null,
        quantity?: number | null,
        isAvailable?: boolean | null,
        imageBrand?: string | null,
        reference?: string | null,
        stock?: number | null,
        composition?: string | null,
        createdAt: string,
        updatedAt: string,
        categoryProductsId?: string | null,
        productCategoryId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type DeleteCategoryMutation = {
  deleteCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    description?: string | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        title: string,
        subTitle?: string | null,
        price: number,
        quickDescription?: string | null,
        fullDescription?: string | null,
        size?: string | null,
        weight?: number | null,
        quantity?: number | null,
        isAvailable?: boolean | null,
        imageBrand?: string | null,
        reference?: string | null,
        stock?: number | null,
        composition?: string | null,
        createdAt: string,
        updatedAt: string,
        categoryProductsId?: string | null,
        productCategoryId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    subTitle?: string | null,
    price: number,
    quickDescription?: string | null,
    fullDescription?: string | null,
    size?: string | null,
    weight?: number | null,
    quantity?: number | null,
    isAvailable?: boolean | null,
    imageBrand?: string | null,
    reference?: string | null,
    stock?: number | null,
    composition?: string | null,
    category?:  {
      __typename: "Category",
      id: string,
      title: string,
      description?: string | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    categoryProductsId?: string | null,
    productCategoryId?: string | null,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      title: string,
      subTitle?: string | null,
      price: number,
      quickDescription?: string | null,
      fullDescription?: string | null,
      size?: string | null,
      weight?: number | null,
      quantity?: number | null,
      isAvailable?: boolean | null,
      imageBrand?: string | null,
      reference?: string | null,
      stock?: number | null,
      composition?: string | null,
      category?:  {
        __typename: "Category",
        id: string,
        title: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      categoryProductsId?: string | null,
      productCategoryId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    description?: string | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        title: string,
        subTitle?: string | null,
        price: number,
        quickDescription?: string | null,
        fullDescription?: string | null,
        size?: string | null,
        weight?: number | null,
        quantity?: number | null,
        isAvailable?: boolean | null,
        imageBrand?: string | null,
        reference?: string | null,
        stock?: number | null,
        composition?: string | null,
        createdAt: string,
        updatedAt: string,
        categoryProductsId?: string | null,
        productCategoryId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategoriesQuery = {
  listCategories?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      title: string,
      description?: string | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    subTitle?: string | null,
    price: number,
    quickDescription?: string | null,
    fullDescription?: string | null,
    size?: string | null,
    weight?: number | null,
    quantity?: number | null,
    isAvailable?: boolean | null,
    imageBrand?: string | null,
    reference?: string | null,
    stock?: number | null,
    composition?: string | null,
    category?:  {
      __typename: "Category",
      id: string,
      title: string,
      description?: string | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    categoryProductsId?: string | null,
    productCategoryId?: string | null,
  } | null,
};

export type OnUpdateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    subTitle?: string | null,
    price: number,
    quickDescription?: string | null,
    fullDescription?: string | null,
    size?: string | null,
    weight?: number | null,
    quantity?: number | null,
    isAvailable?: boolean | null,
    imageBrand?: string | null,
    reference?: string | null,
    stock?: number | null,
    composition?: string | null,
    category?:  {
      __typename: "Category",
      id: string,
      title: string,
      description?: string | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    categoryProductsId?: string | null,
    productCategoryId?: string | null,
  } | null,
};

export type OnDeleteProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    id: string,
    title: string,
    subTitle?: string | null,
    price: number,
    quickDescription?: string | null,
    fullDescription?: string | null,
    size?: string | null,
    weight?: number | null,
    quantity?: number | null,
    isAvailable?: boolean | null,
    imageBrand?: string | null,
    reference?: string | null,
    stock?: number | null,
    composition?: string | null,
    category?:  {
      __typename: "Category",
      id: string,
      title: string,
      description?: string | null,
      products?:  {
        __typename: "ModelProductConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    categoryProductsId?: string | null,
    productCategoryId?: string | null,
  } | null,
};

export type OnCreateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    description?: string | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        title: string,
        subTitle?: string | null,
        price: number,
        quickDescription?: string | null,
        fullDescription?: string | null,
        size?: string | null,
        weight?: number | null,
        quantity?: number | null,
        isAvailable?: boolean | null,
        imageBrand?: string | null,
        reference?: string | null,
        stock?: number | null,
        composition?: string | null,
        createdAt: string,
        updatedAt: string,
        categoryProductsId?: string | null,
        productCategoryId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    description?: string | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        title: string,
        subTitle?: string | null,
        price: number,
        quickDescription?: string | null,
        fullDescription?: string | null,
        size?: string | null,
        weight?: number | null,
        quantity?: number | null,
        isAvailable?: boolean | null,
        imageBrand?: string | null,
        reference?: string | null,
        stock?: number | null,
        composition?: string | null,
        createdAt: string,
        updatedAt: string,
        categoryProductsId?: string | null,
        productCategoryId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    description?: string | null,
    products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        title: string,
        subTitle?: string | null,
        price: number,
        quickDescription?: string | null,
        fullDescription?: string | null,
        size?: string | null,
        weight?: number | null,
        quantity?: number | null,
        isAvailable?: boolean | null,
        imageBrand?: string | null,
        reference?: string | null,
        stock?: number | null,
        composition?: string | null,
        createdAt: string,
        updatedAt: string,
        categoryProductsId?: string | null,
        productCategoryId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
