import { X } from 'phosphor-react';
import profileImg from '../assets/profileImg.png';

export function Header() {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex ">
        <img
          src={profileImg}
          alt="Profile Image"
          className="rounded-full mr-4"
        />

        <div>
          <h1 className="font-bold text-textwhite">Cecilia Sassaki</h1>
          <span className="text-online flex items-center gap-1 before:w-2 before:h-2 before:rounded-full before:bg-online">
            Online
          </span>
        </div>
      </div>

      <X size={20} />
    </div>
  );
}
