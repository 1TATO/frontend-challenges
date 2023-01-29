import profileImg from '../assets/profileImg.png';

export function ChatList() {
  return (
    <div className="w-full border-r-2 border-t-2 border-b-2 border-r-white border-t-transparent border-b-transparent rounded-tr-2xl rounded-br-2xl">
      <div className="w-full flex items-center justify-center border-b-2 border-l-2 border-b-white border-l-transparent rounded-bl-2xl pb-2 max-sm:hidden">
        <img
          src={profileImg}
          alt="Profile Image"
          className="rounded-full mr-4"
        />

        <h1 className="font-bold sm:text-sm">Cecilia Sassaki</h1>
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
  );
}
