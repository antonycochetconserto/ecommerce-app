import { Auth } from 'aws-amplify';
import { useState } from 'react';

interface ISendCodePassword {
  setUsername: any;
  setForgotPasswordSuccess: any;
}

export default function SendCodePassword({
  setUsername,
  setForgotPasswordSuccess,
}: ISendCodePassword) {
  const [onForm, setOnForm] = useState<{
    username: string;
  }>({ username: '' });
  // Send confirmation code to user's email
  async function sendCodeToChangePassword() {
    const { username } = onForm;
    Auth.forgotPassword(username)
      .then((data) => {
        console.log(data);
        setUsername(username);
        setForgotPasswordSuccess(true);
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      <input
        className="border-b placeholder:text-gray-500 border-gray-200 appearance-none bg-transparent w-full text-gray-800 font-semibold py-3 leading-tight focus:outline-none"
        type="text"
        placeholder="Nom d'utilisateur"
        aria-label="NomUtilisateur"
        onChange={(e) =>
          setOnForm({
            ...onForm,
            username: e.target.value,
          })
        }
      />
      <div className="space-y-4 w-full">
        <button
          className="flex-shrink-0 bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 text-sm text-white py-3 px-2 rounded w-full"
          type="button"
          onClick={() => sendCodeToChangePassword()}
        >
          Je demande mon code de confirmation
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
