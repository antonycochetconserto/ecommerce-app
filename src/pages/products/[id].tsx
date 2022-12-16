import { useContext } from 'react';
import Navbar from '../../components/home/navbar';
import ProductOverview from '../../components/home/product/ProductOverview';
import UserContext from '../../context/UserContext';

export default function product() {
  const user = useContext(UserContext);

  return (
    <>
      <Navbar user={user} />
      <ProductOverview />
    </>
  );
}
