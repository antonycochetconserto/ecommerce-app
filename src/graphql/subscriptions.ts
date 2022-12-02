/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
    onCreateProduct(filter: $filter) {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
    onUpdateProduct(filter: $filter) {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
    onDeleteProduct(filter: $filter) {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onCreateCategory(filter: $filter) {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onUpdateCategory(filter: $filter) {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onDeleteCategory(filter: $filter) {
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
