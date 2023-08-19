import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 300px;
  text-align: center;
  margin: 0 auto;
  border-radius: 4px;
  border: transparent;
  background-color: rgb(220, 220, 220);
  box-shadow: 9px 9px 14px -6px rgba(105, 103, 105, 1);
  padding: 10px;
  margin-bottom: 20px;
`;

export const UserInfo = styled.div`
  width: 100%;
  text-align: center;
`;

export const Avatar = styled.img`
  display: block;
  margin: 0 auto;
  width: 80px;
  border-radius: 50%;
  border: 1px solid grey;
  background-color: white;
`;

export const Name = styled.p`
  margin-bottom: 10px;
  font-weight: 700;
`;
export const Tag = styled.p`
  margin-bottom: 10px;
`;
export const Location = styled.p`
  margin-bottom: 10px;
`;

export const Stats = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 0;
  height: 50px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  min-width: 80px;
  padding: 7px 0;
`;

export const Label = styled.span`
  font-size: 12px;
`;
export const Quantity = styled.span`
  font-weight: 600;
`;
