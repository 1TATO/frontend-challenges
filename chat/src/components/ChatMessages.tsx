import clsx from 'clsx';

const messages = [
  {
    id: new Date(),
    text: 'Tive uma ideia incrível para um projeto! 😍',
    sender: 'Cecilia',
    time: '11:30',
  },
  {
    id: new Date(),
    text: 'Sério? Me conta mais.',
    sender: 'Você',
    time: '11:32',
  },
  {
    id: new Date(),
    text: 'E se a gente fizesse um chat moderno e responsivo em apenas uma semana?',
    sender: 'Cecilia',
    time: '11:34',
  },
  {
    id: new Date(),
    text: '#boraCodar! 🚀',
    sender: 'Você',
    time: '11:36',
  },
];

export function ChatMessages() {
  return (
    <div className="my-4">
      <span className="flex justify-center text-xs">Hoje 11:30</span>

      <div className="mt-8">
        {messages.map((message) => {
          return (
            <div
              key={`${message.id.toString()}-${message.text}`}
              className={clsx('mt-8 flex flex-col', {
                'items-start': message.sender !== 'Você',
                'items-end': message.sender === 'Você',
              })}
            >
              <span className="text-sm">{`${message.sender} - ${message.time}`}</span>
              <div
                className={clsx('p-3 max-w-max mt-3 rounded-lg', {
                  'bg-purple-600': message.sender !== 'Você',
                  'bg-green': message.sender === 'Você',
                  'rounded-tl-none': message.sender !== 'Você',
                  'rounded-br-none': message.sender === 'Você',
                })}
              >
                {message.text}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
