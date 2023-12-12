import styled from "styled-components";

type Props = {
  $width?: number;
};

export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 40px;
  padding: 8px 16px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.primary[900]};
  color: #fff;
  border: none;
  border-radius: 4px;
  width: ${({ $width }) => $width && `${$width}px`};
  cursor: pointer;
`;
