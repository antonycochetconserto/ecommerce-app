import Form from '../../components/home/checkout/Form';
import Informations from '../../components/home/checkout/Informations';

export default function checkout() {
  return (
    <div className="max-w-7xl mx-auto px-8 mb-16">
      <div className="flex justify-center">
        <Form />
        <Informations />
      </div>
    </div>
  );
}
