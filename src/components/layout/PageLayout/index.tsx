import { ReactNode } from "react";
import Sidebar from "components/layout/Sidebar";
import * as S from "./styles";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import { GlobalStyles } from "styles/GlobalStyles";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <S.Container>
        <Sidebar />
        <S.Content>{children}</S.Content>
      </S.Container>
    </ThemeProvider>
  );
};

export default PageLayout;
