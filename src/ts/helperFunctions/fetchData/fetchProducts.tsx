import { API } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { listProducts } from '../../../graphql/queries';
import { TProduct } from '../../types/product/tproduct';

export async function fetchProducts() {
  const [products, setProducts] = useState<TProduct[]>([]);

  const getProducts = async () => {
    const apiData: any = await API.graphql({ query: listProducts });
    setProducts(apiData.data.listProducts.items);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return { products, setProducts };
}
