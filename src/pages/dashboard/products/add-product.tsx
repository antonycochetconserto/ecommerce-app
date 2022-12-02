import Navbar from '../../../components/dashboard/navbar';
import AddProduct from '../../../components/dashboard/product/AddProduct';

export default function addproduct() {
  return (
    <div className="h-screen bg-slate-50">
      <Navbar />
      <AddProduct />
    </div>
  );
}
