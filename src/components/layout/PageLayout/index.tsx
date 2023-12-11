import { ReactNode } from "react";
import Sidebar from "components/layout/Sidebar";
import { Container, Content } from "./styles";
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
      <Container>
        <Sidebar />
        <Content>{children}</Content>
      </Container>
    </ThemeProvider>
  );
};

export default PageLayout;
