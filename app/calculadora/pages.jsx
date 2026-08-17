"use client";
"use client";

import { useState } from "react";
import Header from "../components/header";

export default function Calculadora() {
  const [n1, setN1] = useState("");
  const [n2, setN2] = useState("");
  const [resultado, setResult] = useState(null);

  function calcular(operacao) {
    const num1 = Number(n1);
    const num2 = Number(n2);

    switch (operacao) {
      case "somar":
        setResult(num1 + num2);
        break;
      case "subtrair":
        setResult(num1 - num2);
        break;
      case "multiplicar":
        setResult(num1 * num2);
        break;
      case "dividir":
        if (num2 === 0) {
          setResult("Erro: Div/0");
        } else {
          setResult(num1 / num2);
        }
        break;
      default:
        setResult(null);
    }
  }

  return (
    <div className="page-wrapper pink-theme">
      <Header />

      <main className="calc-container">
        <div className="calc-card">
          {/* Cabeçalho Interno da Calculadora */}
          <div className="calc-header-inner">
            <div className="calc-dots">
              <span className="dot dot-1"></span>
              <span className="dot dot-2"></span>
              <span className="dot dot-3"></span>
            </div>
            <h2 className="calc-title">Pink Math Pro</h2>
          </div>

          {/* Visor de Resultado */}
          <div className="calc-display">
            <span className="display-label">Resultado</span>
            <span className="display-value">
              {resultado !== null ? resultado : "0"}
            </span>
          </div>

          {/* Formulário / Inputs */}
          <div className="calc-form">
            <div className="input-group">
              <label htmlFor="n1">Primeiro Número</label>
              <div className="input-field-wrapper">
                <input
                  id="n1"
                  type="number"
                  value={n1}
                  placeholder="0"
                  onChange={(e) => setN1(e.target.value)}
                />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="n2">Segundo Número</label>
              <div className="input-field-wrapper">
                <input
                  id="n2"
                  type="number"
                  value={n2}
                  placeholder="0"
                  onChange={(e) => setN2(e.target.value)}
                />
              </div>
            </div>

            {/* Grade de Botões de Operação */}
            <div className="calc-actions-grid">
              <button className="calc-btn-op op-somar" onClick={() => calcular("somar")} title="Somar">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </button>

              <button className="calc-btn-op op-subtrair" onClick={() => calcular("subtrair")} title="Subtrair">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14" />
                </svg>
              </button>

              <button className="calc-btn-op op-multiplicar" onClick={() => calcular("multiplicar")} title="Multiplicar">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              <button className="calc-btn-op op-dividir" onClick={() => calcular("dividir")} title="Dividir">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    {/* Linha central da divisão */}
    <path d="M5 12h14" strokeLinecap="round" />
    {/* Ponto superior */}
    <circle cx="12" cy="6" r="1.5" fill="currentColor" stroke="none" />
    {/* Ponto inferior */}
    <circle cx="12" cy="18" r="1.5" fill="currentColor" stroke="none" />
  </svg>
</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
