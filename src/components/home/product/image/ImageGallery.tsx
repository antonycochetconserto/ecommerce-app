interface IImageGallery {
  product: { images: { src: string; alt: string }[] };
}

export default function ImageGallery({ product }: IImageGallery) {
  return (
    <div className="flex flex-col w-6/12 mt-8">
      <div>
        <img
          src={product.images[0].src}
          alt={product.images[0].alt}
          style={{ height: '500px' }}
          className="w-full object-cover rounded-md"
        />
      </div>
      <div className="flex flex-row justify-evenly space-x-8 mt-8">
        <div>
          <img
            className="rounded-md outline-blue-500 outline outline-offset-2 outline-2 cursor-pointer"
            src={product.images[3].src}
            alt={product.images[3].alt}
          />
        </div>
        <div>
          <img
            className="rounded-md cursor-pointer"
            src={product.images[3].src}
            alt={product.images[3].alt}
          />
        </div>
        <div>
          <img
            className="rounded-md cursor-pointer"
            src={product.images[3].src}
            alt={product.images[3].alt}
          />
        </div>
      </div>
    </div>
  );
}
