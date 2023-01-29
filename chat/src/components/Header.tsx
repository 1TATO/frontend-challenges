import profileImg from '../assets/profileImg.png';

export function Header() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-1">
        <img
          src={profileImg}
          alt="Profile Image"
          className="rounded-full mr-4"
        />

        <div>
          <h2 className="font-bold">Cecilia Sassaki</h2>
          <span className="text-online flex items-center gap-1 before:w-2 before:h-2 before:rounded-full before:bg-online">
            Online
          </span>
        </div>
      </div>
    </div>
  );
}
