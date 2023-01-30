import { doc, setDoc } from 'firebase/firestore';
import { SignOut } from 'phosphor-react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import profileImg from '../assets/profileImg.png';
import { auth, db } from '../services/firebase';

export function ChatList() {
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (!user) {
      <Navigate to="/" />;
    }
  });

  useEffect(() => {
    const fetchUser = async () => {
      if (user) {
        await setDoc(doc(db, 'users', user.uid), {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        });
      }
    };

    fetchUser();
  }, [user]);

  return (
    <div>
      {user ? (
        <div className="w-full border-r-2 border-t-2 border-b-2 border-r-input border-t-transparent border-b-transparent rounded-tr-2xl rounded-br-2xl">
          <div className="w-full flex items-center justify-center px-4 border-b-2 border-l-2 border-b-input border-l-transparent rounded-bl-2xl pb-2">
            <div className="flex items-center max-sm:hidden">
              <img
                src={user.photoURL?.toString()}
                alt="Profile Image"
                className="h-12 w-12 rounded-full mr-4"
              />

              <h1 className="font-bold sm:text-sm">{user.displayName}</h1>
            </div>

            <button
              onClick={() => auth.signOut()}
              className="ml-auto max-sm:m-auto flex gap-2"
            >
              <span className="max-sm:hidden">Sair</span>
              <SignOut size={24} />
            </button>
          </div>

          <div className="mr-4">
            <div className="flex mt-4 w-full">
              <div className="bg-input flex w-full p-5 rounded-full">
                <img
                  src={profileImg}
                  alt="Profile Image"
                  className="rounded-full mr-4"
                />

                <div className="truncate">
                  <h3 className="font-bold">Cecilia Sassaki</h3>
                  <p className="text-slate-500 flex items-center">
                    E se a gente fizesse um chat moderno e
                    responsivooooooooooooooooooooo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </div>
  );
}
