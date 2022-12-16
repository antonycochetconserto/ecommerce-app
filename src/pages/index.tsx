import { useContext } from 'react';
import Header from '../components/home/section/header';
import Navbar from '../components/home/navbar';
import SectionCategory from '../components/home/section/Category';
import UserContext from '../context/UserContext';

export default function Home() {
  const user = useContext(UserContext);
  return (
    <>
      <div className="space-y-28">
        <Navbar user={user} />
        <Header />
        <SectionCategory />
      </div>
    </>
  );
}
