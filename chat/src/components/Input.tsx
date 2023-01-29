import { PaperPlaneRight } from 'phosphor-react';

export function Input() {
  return (
    <form className="mt-auto">
      <div className="flex flex-1 justify-between rounded-full bg-input px-6 py-5">
        <input
          type="text"
          placeholder="Digite sua mensagem"
          className="w-full bg-transparent outline-none "
        />

        <button type="submit">
          <PaperPlaneRight size={24} weight={'fill'} />
        </button>
      </div>
    </form>
  );
}
