import { useState } from 'react';
import Message from './Message';
import CounterButton from './CounterButton';

export default function App() {
  // Criando o estado do contador
  const [count, setCount] = useState(0);

  // Função para aumentar o valor
  const aumentar = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Praticando Props e State</h1>
      
      {/* Passando o valor atual para o componente Message */}
      <Message texto={`O valor atual é: ${count}`} />
      
      {/* Passando o nome do botão e a função de clique para o CounterButton */}
      <CounterButton label="Aumentar Contador" aoClicar={aumentar} />
    </div>
  );
}
