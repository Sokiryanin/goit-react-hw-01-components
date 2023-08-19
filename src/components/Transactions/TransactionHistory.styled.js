import styled from 'styled-components';

export const TransactionList = styled.table`
  margin-top: 30px;
  width: 400px;

  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;

  background-color: rgb(234, 234, 241);
  box-shadow: 9px 9px 14px -6px rgba(105, 103, 105, 1);
  border-radius: 4px;

  border-collapse: collapse;
  table-layout: fixed;
`;

export const Row = styled.tr`
  padding: 20px;
  text-align: center;
  font-size: 20px;
  border: 1px solid white;
  border-radius: 4px;
`;

export const Cell = styled.td`
  padding: 10px;
  width: inherit;
  font-weight: 700;
  font-size: 15px;
  text-align: center;
  border-radius: 4px;
`;

export const TableHead = styled.tr`
  padding: 20px;
  text-align: center;
  border-radius: 4px;
  background-color: grey;
  border: 1px solid white;

  font-weight: 800;
  font-size: 20px;
`;
