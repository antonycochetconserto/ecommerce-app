import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { useState } from 'react';
import ConfirmationCode from '../components/home/signup/ConfirmationCode';
import SignUpForm from '../components/home/signup/SignUpForm';

export default function SignUp() {
  const [signUpSuccess, setSignUpSuccess] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');

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
                {!signUpSuccess ? 'Creer un compte' : 'Confirmer le compte'}
              </h1>
              <p className="text-gray-500 font-medium tracking-tight">
                Bénificier des fonctionnalités utilisateurs
              </p>
            </div>
            <form>
              <div className="flex flex-col space-y-8">
                {!signUpSuccess ? (
                  <SignUpForm
                    setSignUpSuccess={setSignUpSuccess}
                    setUsername={setUsername}
                  />
                ) : (
                  <ConfirmationCode username={username} />
                )}
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
