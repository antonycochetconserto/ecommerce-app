/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
      id
      title
      subTitle
      price
      quickDescription
      fullDescription
      size
      weight
      quantity
      isAvailable
      imageBrand
      reference
      stock
      composition
      category {
        id
        title
        description
        products {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      categoryProductsId
      productCategoryId
    }
  }
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
      id
      title
      subTitle
      price
      quickDescription
      fullDescription
      size
      weight
      quantity
      isAvailable
      imageBrand
      reference
      stock
      composition
      category {
        id
        title
        description
        products {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      categoryProductsId
      productCategoryId
    }
  }
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
      id
      title
      subTitle
      price
      quickDescription
      fullDescription
      size
      weight
      quantity
      isAvailable
      imageBrand
      reference
      stock
      composition
      category {
        id
        title
        description
        products {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      categoryProductsId
      productCategoryId
    }
  }
`;
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      title
      description
      products {
        items {
          id
          title
          subTitle
          price
          quickDescription
          fullDescription
          size
          weight
          quantity
          isAvailable
          imageBrand
          reference
          stock
          composition
          createdAt
          updatedAt
          categoryProductsId
          productCategoryId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      title
      description
      products {
        items {
          id
          title
          subTitle
          price
          quickDescription
          fullDescription
          size
          weight
          quantity
          isAvailable
          imageBrand
          reference
          stock
          composition
          createdAt
          updatedAt
          categoryProductsId
          productCategoryId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      title
      description
      products {
        items {
          id
          title
          subTitle
          price
          quickDescription
          fullDescription
          size
          weight
          quantity
          isAvailable
          imageBrand
          reference
          stock
          composition
          createdAt
          updatedAt
          categoryProductsId
          productCategoryId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
