export default function SectionCategory() {
  const products: { img: string; title: string; subtitle: string }[] = [
    {
      img: 'https://images.pexels.com/photos/8131589/pexels-photo-8131589.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      title: 'Desk and Office',
      subtitle: 'Work from accessoires',
    },
    {
      img: 'https://images.pexels.com/photos/8129909/pexels-photo-8129909.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      title: 'Desk and Office',
      subtitle: 'Work from accessoires',
    },
    {
      img: 'https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      title: 'Desk and Office',
      subtitle: 'Work from accessoires',
    },
  ];

  return (
    <div className="bg-gray-50/80">
      <div className="max-w-7xl flex justify-around mx-auto">
        <div className="flex flex-col px-8 py-28">
          <h3 className="text-2xl tracking-tighter text-gray-900 font-bold pb-8">
            Article de la collection
          </h3>
          <div className="flex justify-between">
            {products.map((product, index) => {
              return (
                <div key={index} className="w-4/12 px-8 -ml-8">
                  <img className="rounded-md" src={product.img} />
                  <div className="leading-5 mt-8">
                    <h4 className="text-gray-500 font-normal">
                      {product.title}
                    </h4>
                    <p className="text-gray-800 font-semibold">
                      {product.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
