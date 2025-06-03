import { createContext, useContext, useEffect, useState } from 'react';

// Criação do contexto
const BetContext = createContext();

// Hook para usar o contexto facilmente
export const useBet = () => useContext(BetContext);

// Provider
export const BetProvider = ({ children }) => {
  // Carregamento inicial do localStorage (se houver)
  const [saldoInicial, setSaldoInicial] = useState(() => {
    return Number(localStorage.getItem('saldoInicial')) || 0;
  });

  const [saldoAtual, setSaldoAtual] = useState(() => {
    return Number(localStorage.getItem('saldoAtual')) || 0;
  });

  const [valorGiro, setValorGiro] = useState(() => {
    return Number(localStorage.getItem('valorGiro')) || 0;
  });

  const [historico, setHistorico] = useState(() => {
    const data = localStorage.getItem('historico');
    return data ? JSON.parse(data) : [];
  });

  // Atualiza o localStorage
  useEffect(() => {
    localStorage.setItem('saldoInicial', saldoInicial);
    localStorage.setItem('saldoAtual', saldoAtual);
    localStorage.setItem('valorGiro', valorGiro);
    localStorage.setItem('historico', JSON.stringify(historico));
  }, [saldoInicial, saldoAtual, valorGiro, historico]);

  // Registrar um giro (perda)
  const registrarGiro = () => {
    if (saldoAtual >= valorGiro) {
      setSaldoAtual((prev) => prev - valorGiro);
      adicionarHistorico('giro', -valorGiro);
    }
  };

  // Registrar um ganho
  const registrarGanho = (valor) => {
    setSaldoAtual((prev) => prev + valor);
    adicionarHistorico('ganho', valor);
  };

  // Adicionar entrada no histórico
  const adicionarHistorico = (tipo, valor) => {
    const novaEntrada = {
      id: Date.now(),
      data: new Date().toLocaleString(),
      tipo,
      valor,
    };
    setHistorico((prev) => [novaEntrada, ...prev]);
  };

  // Resetar tudo
  const resetarDados = () => {
    setSaldoInicial(0);
    setSaldoAtual(0);
    setValorGiro(0);
    setHistorico([]);
    localStorage.clear();
  };

  return (
    <BetContext.Provider
      value={{
        saldoInicial,
        saldoAtual,
        valorGiro,
        historico,
        setSaldoInicial,
        setSaldoAtual,
        setValorGiro,
        registrarGiro,
        registrarGanho,
        resetarDados,
      }}
    >
      {children}
    </BetContext.Provider>
  );
};
