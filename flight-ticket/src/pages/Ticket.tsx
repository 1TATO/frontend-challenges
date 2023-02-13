import { AirplaneTilt } from 'phosphor-react';
import QRCode from 'react-qr-code';
import { useLocation, useNavigate } from 'react-router-dom';

import '../styles/global.css';

export function Ticket() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const date = state.date.split('-');
  const day = date[2];
  const month = date[1];
  const year = date[0];

  const formattedDate = `${day}/${month}/${year}`;
  const fromLocation = state.from.split('-');
  const destinyLocation = state.destiny.split('-');

  async function handleGoToHomepage() {
    navigate('/');
  }

  return (
    <div className="h-screen w-screen bg-gradient-to-b from-purple-light to-purple-dark font-rubik">
      <div className="h-screen flex items-center justify-center flex-col">
        <span className="text-white font-medium text-xl mb-5">
          Cartão de embarque
        </span>

        <div className="bg-white h-48 w-80 text-black py-6 px-6 rounded-xl border-b-2 border-dashed border-gray-400">
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-gray-800">Voo</p>
              <p className="font-medium">RS995</p>
            </div>

            <div className="flex flex-col items-end">
              <p className="text-sm text-gray-800">Data</p>
              <p className="font-medium">{formattedDate}</p>
            </div>
          </div>

          <div className="flex mt-6 justify-between items-center">
            <div>
              <p className="text-sm text-gray-800">{fromLocation[0].trim()}</p>
              <p className="font-medium text-4xl">{fromLocation[1].trim()}</p>
              <p>17:00</p>
            </div>

            <AirplaneTilt size={22} weight="fill" />

            <div className="flex flex-col items-end">
              <p className="text-sm text-gray-800">
                {destinyLocation[0].trim()}
              </p>
              <p className="font-medium text-4xl">
                {destinyLocation[1].trim()}
              </p>
              <p>04:48</p>
            </div>
          </div>
        </div>

        <div className="bg-white h-20 w-80 text-black py-6 px-6 rounded-xl border-b-2 border-dashed border-gray-400">
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-gray-800">Passageiro</p>
              <p className="font-medium">{state.name}</p>
            </div>

            <div className="flex flex-col items-end">
              <p className="text-sm text-gray-800">Assento</p>
              <p className="font-medium">28A</p>
            </div>
          </div>
        </div>

        <div className="bg-white h-72 w-80 text-black py-6 px-6 rounded-xl">
          <div className="flex justify-between mb-6">
            <div>
              <div className="mb-4">
                <p className="text-sm text-gray-800">Embarque</p>
                <p className="font-medium bg-purple-700 text-white px-2 py-1 rounded-lg max-w-[54px]">
                  16:15
                </p>
              </div>

              <div className="mb-4">
                <p className="text-sm text-gray-800">Terminal</p>
                <p className="font-medium">
                  {Math.floor(Math.random() * (20 - 1) + 1)}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-800">Portão</p>
                <p className="font-medium">
                  {Math.floor(Math.random() * (40 - 1) + 1)}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <QRCode
                className="max-h-36 max-w-36 mb-2"
                value="https://github.com/1TATO/frontend-challenges/tree/master/flight-ticket"
              />

              <span className="text-sm text-gray-600">
                Grupo de embarque: {Math.floor(Math.random() * (10 - 1) + 1)}
              </span>
            </div>
          </div>

          <p className="ml-5">
            <span className="font-medium">Atenção:</span> o portão fecha 16:45
          </p>
        </div>

        <span className="text-slate-400 text-sm max-w-[270px] mt-5">
          Qualquer problema procure o balcão de atendimento da sua companhia
          aérea
        </span>

        <button
          type="submit"
          className="mt-6 rounded-lg p-4 w-80 flex items-center justify-center font-medium bg-white hover:bg-gray-300 transition-colors focus:outline-none"
          onClick={handleGoToHomepage}
        >
          Voltar para o início
        </button>
      </div>
    </div>
  );
}
