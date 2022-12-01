import { Auth } from 'aws-amplify';
import { useState } from 'react';

interface SignupInterface {
  setSignUpSuccess: any;
  setUsername: any;
}

export default function SignUpForm({
  setSignUpSuccess,
  setUsername,
}: SignupInterface) {
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
      setSignUpSuccess(true);
      setUsername(user.getUsername());
    } catch (error) {
      console.log('error signing up:', error);
    }
  }
  return (
    <>
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
    </>
  );
}
