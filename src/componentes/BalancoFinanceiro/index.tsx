import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts";
import { Cartao, CartaoCabecalho, CartaoCorpo } from "../Cartao";
import styled from "styled-components";
import UseGastosPorCategoria from "../../hooks/UseGastosPorCategoria";

export const AreaChart = styled.div`
  padding: var(--padding-xs);
`;

const BalancoFinanceiro = () => {
  const gastosPorCategoria = UseGastosPorCategoria();
  const data = Object.entries(gastosPorCategoria).map(
    ([categoria, gastos]) => ({
      categoria,
      gastos,
    })
  );
  return (
    <Cartao>
      <CartaoCabecalho>Gastos por categoria</CartaoCabecalho>
      <CartaoCorpo>
        <AreaChart>
          <BarChart width={730} height={250} data={data}>
            <XAxis dataKey="categoria" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="gastos" fill="#f87828" />
          </BarChart>
        </AreaChart>
      </CartaoCorpo>
    </Cartao>
  );
};
export default BalancoFinanceiro;
