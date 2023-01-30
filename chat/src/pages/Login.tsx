import { GoogleLogo } from 'phosphor-react';
import { useEffect } from 'react';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import { auth } from '../services/firebase';

export function Login() {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      <Navigate to="/home" />;
    }
  });

  return (
    <div>
      {user ? (
        <Navigate to="/home" />
      ) : (
        <div className="h-screen w-screen flex items-center justify-center bg-background text-white">
          <button
            onClick={() => signInWithGoogle()}
            className="flex items-center gap-4 bg-gradient-to-r from-purple-600 to-green p-4 rounded-lg hover:from-green hover:to-purple-600 text-xl"
          >
            <GoogleLogo />
            Logar com Google
          </button>
        </div>
      )}
    </div>
  );
}
