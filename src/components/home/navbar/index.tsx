import { useState } from 'react';
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';
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
  ],
  pages: [
    { name: 'La compagnie', href: '#' },
    { name: 'La boutique', href: '#' },
  ],
};

const classNames = (...classes: string[]): string => {
  return classes.filter(Boolean).join(' ');
};

interface NavbarInterface {
  user: { username: string };
}

export default function Navbar({ user }: NavbarInterface) {
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();
  async function signOut() {
    try {
      await Auth.signOut().then(() => {
        router.pathname === '/' ? router.reload() : router.push('/');
      });
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  return (
    <>
      {/* Mobile menu */}
      <NavbarMobile
        navigation={navigation}
        classNames={classNames}
        open={open}
        setOpen={setOpen}
        user={user}
        signOut={signOut}
      />
      {/* Mobile web */}
      <NavbarWeb
        navigation={navigation}
        classNames={classNames}
        setOpen={setOpen}
        user={user}
        signOut={signOut}
      />
    </>
  );
}
