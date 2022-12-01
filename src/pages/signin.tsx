import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Auth, Hub } from 'aws-amplify';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function SignIn() {
  const router = useRouter();
  const [onForm, setOnForm] = useState<{
    username: string;
    email: string;
    password: string;
  }>({
    username: '',
    email: '',
    password: '',
  });

  async function signUp() {
    const { username, password, email } = onForm;
    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
        },
        autoSignIn: {
          // optional - enables auto sign in after user is confirmed
          enabled: true,
        },
      });
      console.log(user);
      listenToAutoSignInEvent();
    } catch (error) {
      console.log('error signing up:', error);
      listenToAutoSignInEvent();
    }
  }

  function listenToAutoSignInEvent() {
    Hub.listen('auth', ({ payload }) => {
      const { event } = payload;
      if (event === 'autoSignIn') {
        const user = payload.data;
        router.push('/');
        // assign user
      } else if (event === 'autoSignIn_failure') {
        // redirect to sign in page
      }
    });
  }

  return (
    <div className="w-full h-screen bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 flex items-center justify-center">
      <div className="max-w-7xl w-full bg-white shadow-2xl relative">
        <h1 className="text-2xl font-bold tracking-tighter absolute top-8 left-12 text-gray-900">
          Brandii.
        </h1>
        <div className="flex flex-row justify-evenly items-center py-12">
          <div className="flex flex-col w-3/12 space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter text-gray-800">
                Creer un compte
              </h1>
              <p className="text-gray-500 font-medium tracking-tight">
                Bénificier des fonctionnalités utilisateurs
              </p>
            </div>
            <form>
              <div className="flex flex-col space-y-8">
                <input
                  className="border-b placeholder:text-gray-500 border-gray-200 appearance-none bg-transparent w-full text-gray-800 font-semibold py-3 leading-tight focus:outline-none"
                  type="text"
                  placeholder="Nom"
                  aria-label="Full name"
                  onChange={(e) =>
                    setOnForm({
                      ...onForm,
                      username: e.target.value,
                    })
                  }
                />
                <input
                  className="border-b placeholder:text-gray-500 border-gray-200 appearance-none bg-transparent w-full text-gray-800 font-semibold py-3 leading-tight focus:outline-none"
                  type="text"
                  placeholder="Adresse mail"
                  aria-label="Email"
                  onChange={(e) =>
                    setOnForm({
                      ...onForm,
                      email: e.target.value,
                    })
                  }
                />
                <input
                  className="border-b placeholder:text-gray-500 border-gray-200 appearance-none bg-transparent w-full text-gray-800 font-semibold py-3 leading-tight focus:outline-none"
                  type="password"
                  placeholder="Mot de passe"
                  aria-label="Password"
                  onChange={(e) =>
                    setOnForm({
                      ...onForm,
                      password: e.target.value,
                    })
                  }
                />
                <div className="space-y-4 w-full">
                  <button
                    className="flex-shrink-0 bg-blue-600 hover:bg-blue-700 text-sm text-white py-3 px-2 rounded w-full"
                    type="button"
                    onClick={() => signUp()}
                  >
                    Je crée mon compte
                  </button>
                  <div className="border-b border-gray-600" />
                  <button
                    className="flex-shrink-0 border border-gray-800 text-gray-800 text-sm py-3 px-2 rounded w-full"
                    type="button"
                  >
                    Je me connecte
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="w-6/12 bg-slate-50 rounded-2xl p-8">
            <Player
              autoplay
              loop
              src="https://assets1.lottiefiles.com/packages/lf20_nc1bp7st.json"
            >
              <Controls
                visible={false}
                buttons={['play', 'repeat', 'frame', 'debug']}
              />
            </Player>
          </div>
        </div>
      </div>
    </div>
  );
}
