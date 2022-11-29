import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Auth } from 'aws-amplify';

export default function SignUp() {
  return (
    <div className="w-full h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto bg-white shadow-2xl">
        <div className="flex flex-row justify-evenly items-center">
          <div className="flex flex-col space-y-12 w-3/12">
            <h1 className="text-4xl font-bold tracking-tighter text-center">
              Creer un compte
            </h1>
            <form>
              <div className="flex flex-col space-y-8">
                <input
                  className="border-b border-gray-400 appearance-none bg-transparent w-full text-gray-800 font-semibold py-4 leading-tight focus:outline-none"
                  type="text"
                  placeholder="Nom d'utilisateur"
                  aria-label="Full name"
                />
                <input
                  className="border-b border-gray-400 appearance-none bg-transparent w-full text-gray-800 font-semibold py-4 leading-tight focus:outline-none"
                  type="password"
                  placeholder="Mot de passe"
                  aria-label="Password"
                />
                <button
                  className="flex-shrink-0 bg-gray-800 hover:bg-gray-900 text-sm text-white py-3 px-2 rounded"
                  type="button"
                >
                  Je crée mon compte
                </button>
              </div>
            </form>
          </div>
          <div className="w-6/12 bg-blue-600 rounded-2xl">
            <Player
              autoplay
              loop
              src="https://assets9.lottiefiles.com/packages/lf20_rycdh53q.json"
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
