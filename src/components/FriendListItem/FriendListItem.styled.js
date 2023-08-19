import getRandomHexColor from 'helpers/getColor';
import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  text-align: center;

  padding: 5px;
  margin: 0 auto;

  border-radius: 4px;
  border: transparent;
  background-color: ${getRandomHexColor};
`;

export const Avatar = styled.img`
  width: 80px;
  border-radius: 50%;
  border: 1px solid grey;
  margin-right: 10px;
  background-color: rgb(220, 220, 220);
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 30px;
`;

export const Status = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 20px;
  margin-left: 20px;
  background-color: ${props => {
    return props.$isOnline ? 'green' : 'red';
  }};
`;
