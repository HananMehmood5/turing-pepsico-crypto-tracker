import styled from "styled-components";
import Link from "next/link";

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 300px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary[100]};
  padding: 32px 24px;
`;

export const NavItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.primary[900]};
  }
`;

export const DropDownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.p`
  font-size: 16px;
  margin: 0;
`;
