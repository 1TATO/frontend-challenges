import { AirplaneTilt } from 'phosphor-react';
import './styles/global.css';

function App() {
  return (
    <div className="h-screen w-screen bg-gradient-to-b from-purple-light to-purple-dark font-rubik">
      <div className="h-screen flex items-center justify-center flex-col">
        <span className="text-white font-medium text-xl mb-5">
          Cartão de embarque
        </span>

        <div className="bg-white h-48 w-80 text-black py-6 px-8 rounded-xl border-b-2 border-dashed border-gray-400">
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-gray-800">Voo</p>
              <p className="font-medium">RS995</p>
            </div>

            <div className="flex flex-col items-end">
              <p className="text-sm text-gray-800">Data</p>
              <p className="font-medium">23/05/2023</p>
            </div>
          </div>

          <div className="flex mt-6 justify-between items-center">
            <div>
              <p className="text-sm text-gray-800">São Paulo, Brasil</p>
              <p className="font-medium text-4xl">GRU</p>
              <p>17:00</p>
            </div>

            <AirplaneTilt size={22} weight="fill" />

            <div className="flex flex-col items-end">
              <p className="text-sm text-gray-800">São Francisco, EUA</p>
              <p className="font-medium text-4xl">SFO</p>
              <p>04:48</p>
            </div>
          </div>
        </div>

        <div className="bg-white h-20 w-80 text-black py-6 px-8 rounded-xl border-b-2 border-dashed border-gray-400">
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-gray-800">Passageiro</p>
              <p className="font-medium">Rodrigo Terron</p>
            </div>

            <div className="flex flex-col items-end">
              <p className="text-sm text-gray-800">Assento</p>
              <p className="font-medium">28A</p>
            </div>
          </div>
        </div>

        <div className="bg-white h-72 w-80 text-black py-6 px-8 rounded-xl">
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
                <p className="font-medium">2</p>
              </div>

              <div>
                <p className="text-sm text-gray-800">Portão</p>
                <p className="font-medium">15</p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="h-40 w-40 bg-black mb-2"></div>

              <span className="text-sm text-gray-600">
                Grupo de embarque: 3
              </span>
            </div>
          </div>

          <p>
            <span className="font-medium">Atenção:</span> o portão fecha 16:45
          </p>
        </div>

        <span className="text-slate-400 text-sm max-w-[270px] mt-5">
          Qualquer problema procure o balcão de atendimento da sua companhia
          aérea
        </span>
      </div>
    </div>
  );
}

export default App;
