import styled from "styled-components";

export const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary[900]};
`;

export const Logo = () => <LogoStyled>CrypTrack</LogoStyled>;
