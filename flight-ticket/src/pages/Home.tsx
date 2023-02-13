import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as zod from 'zod';

const newTravelFormValidationSchema = zod.object({
  name: zod.string().min(1, 'Informe seu nome'),
  date: zod.string(),
  from: zod.string(),
  destiny: zod.string(),
});

type NewTravelFormData = zod.infer<typeof newTravelFormValidationSchema>;

export function Home() {
  const { register, handleSubmit, reset } = useForm<NewTravelFormData>({
    resolver: zodResolver(newTravelFormValidationSchema),
    defaultValues: {
      name: '',
      from: 'guarulhos',
      destiny: 'guarulhos',
    },
  });

  const navigate = useNavigate();

  function handleCreateNewTravel({
    name,
    date,
    from,
    destiny,
  }: NewTravelFormData) {
    navigate('/ticket', {
      state: { name, date, from, destiny },
    });
    reset();
  }

  return (
    <div className="h-screen w-screen bg-gradient-to-b from-purple-light to-purple-dark font-rubik">
      <form
        onSubmit={handleSubmit(handleCreateNewTravel)}
        className="h-screen flex flex-col items-center justify-center w-80 m-auto"
      >
        <h1 className="text-white font-medium text-xl mb-5">
          Informe os dados da viagem
        </h1>

        <label htmlFor="name" className="mr-auto text-white mb-1">
          Nome
        </label>
        <input
          type="text"
          placeholder="Digite seu nome"
          required
          className="p-4 rounded-lg mb-4 w-80 bg-zinc-800 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-white"
          autoFocus
          {...register('name')}
        />

        <label htmlFor="date" className="mr-auto text-white mb-1">
          Data
        </label>
        <input
          required
          className="p-4 rounded-lg mb-4 w-80 bg-zinc-800 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-white"
          type="date"
          {...register('date')}
        />

        <label htmlFor="from" className="mr-auto text-white mb-1">
          Origem
        </label>
        <select
          placeholder="Origem"
          className="p-4 rounded-lg mb-4 w-80 bg-zinc-800 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-white"
          {...register('from')}
        >
          <option value="São Paulo, BRA - GRU">
            Guarulhos, São Paulo, Brasil
          </option>
          <option value="São Francisco, EUA - SFO">
            San Fracisco, Califórnia, EUA
          </option>
          <option value="Milão, ITA - MXP">Milão, Lombardia, Itália</option>
          <option value="Madrid, ESP - MAD">
            Madrid, Comunidad de Madrid, Espanha
          </option>
          <option value="Montevidéu, URU - MVD">
            Montevidéu, Montevideo, Uruguai
          </option>
        </select>

        <label htmlFor="destiny" className="mr-auto text-white mb-1">
          Destino
        </label>
        <select
          className="p-4 rounded-lg w-80 bg-zinc-800 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-white"
          {...register('destiny')}
        >
          <option value="São Paulo, BRA - GRU">
            Guarulhos, São Paulo, Brasil
          </option>
          <option value="São Francisco, EUA - SFO">
            San Fracisco, Califórnia, EUA
          </option>
          <option value="Milão, ITA - MXP">Milão, Lombardia, Itália</option>
          <option value="Madrid, ESP - MAD">
            Madrid, Comunidad de Madrid, Espanha
          </option>
          <option value="Montevidéu, URU - MVD">
            Montevidéu, Montevideo, Uruguai
          </option>
        </select>

        <button
          type="submit"
          className="mt-6 rounded-lg p-4 w-80 flex items-center justify-center font-medium bg-white hover:bg-gray-300 transition-colors focus:outline-none"
        >
          Agendar viagem
        </button>
      </form>
    </div>
  );
}
