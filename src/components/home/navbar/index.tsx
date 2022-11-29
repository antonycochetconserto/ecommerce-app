import { useState } from 'react';
import NavbarMobile from './NavbarMobile';
import NavbarWeb from './NavbarWeb';

const navigation: {
  categories: {
    id: string;
    name: string;
    featured: {
      name: string;
      href: string;
      imageSrc: string;
      imageAlt: string;
    }[];
    sections: {
      id: string;
      name: string;
      items: { name: string; href: string }[];
    }[];
  }[];
  pages: { name: string; href: string }[];
} = {
  categories: [
    {
      id: 'categorie_1',
      name: 'Categorie 1',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt:
            'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Dresses', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
            { name: 'Re-Arranged', href: '#' },
          ],
        },
      ],
    },
    {
      id: 'categorie_2',
      name: 'Categorie 2',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt:
            'Drawstring top with elastic loop closure and textured interior padding.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Full Nelson', href: '#' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'La compagnie', href: '#' },
    { name: 'La boutique', href: '#' },
  ],
};

const classNames = (...classes: string[]): string => {
  return classes.filter(Boolean).join(' ');
};

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <NavbarMobile
        navigation={navigation}
        classNames={classNames}
        open={open}
        setOpen={setOpen}
      />
      {/* Mobile web */}
      <NavbarWeb
        navigation={navigation}
        classNames={classNames}
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
}
