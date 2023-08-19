import getRandomHexColor from 'helpers/getColor';
import styled from 'styled-components';

export const Container = styled.section`
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  max-width: 500px;

  background-color: rgb(220, 220, 220);
  box-shadow: 9px 9px 14px -6px rgba(105, 103, 105, 1);
  border-radius: 4px;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  font-size: 20px;
  padding: 20px;
`;

export const Stats = styled.ul`
  display: flex;
  padding: 10px;
  gap: 2px;
  margin: 0;
  border-radius: 4px;
  justify-content: center;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 14px;
  border-radius: 4px;
  color: black;
  background-color: ${getRandomHexColor};
`;

export const Label = styled.span`
  font-size: 14px;
`;
export const Quantity = styled.span`
  font-weight: 600;
`;
