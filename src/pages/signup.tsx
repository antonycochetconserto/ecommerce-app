import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Auth } from 'aws-amplify';

export default function SignUp() {
  return (
    <div className="w-full h-screen bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 flex items-center justify-center">
      <div className="max-w-7xl w-full bg-white shadow-2xl">
        <div className="flex flex-row justify-evenly items-center py-16">
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
                />
                <input
                  className="border-b placeholder:text-gray-500 border-gray-200 appearance-none bg-transparent w-full text-gray-800 font-semibold py-3 leading-tight focus:outline-none"
                  type="text"
                  placeholder="Adresse mail"
                  aria-label="Email"
                />
                <input
                  className="border-b placeholder:text-gray-500 border-gray-200 appearance-none bg-transparent w-full text-gray-800 font-semibold py-3 leading-tight focus:outline-none"
                  type="password"
                  placeholder="Mot de passe"
                  aria-label="Password"
                />
                <div className="space-y-4 w-full">
                  <button
                    className="flex-shrink-0 bg-blue-600 hover:bg-gray-900 text-sm text-white py-3 px-2 rounded w-full"
                    type="button"
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
