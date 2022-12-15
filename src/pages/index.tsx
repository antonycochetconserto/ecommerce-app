import { Auth } from 'aws-amplify';
import { useEffect, useState } from 'react';
import Header from '../components/home/header';
import Navbar from '../components/home/navbar';
import SectionCategory from '../components/home/section/Category';

export default function Home() {
  const [user, setUser] = useState<{ username: string }>({ username: '' });

  const getUser = () => {
    Auth.currentAuthenticatedUser({
      bypassCache: false, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    })
      .then((userAuthent) => {
        setUser({ ...user, username: userAuthent.getUsername() });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Navbar user={user} />
      <div className="space-y-28">
        <Header />
        <SectionCategory />
      </div>
    </>
  );
}
