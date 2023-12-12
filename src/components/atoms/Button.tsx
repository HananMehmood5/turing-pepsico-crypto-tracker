import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 40px;
  padding: 8px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.primary[900]};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
