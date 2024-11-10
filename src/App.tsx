import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import { Header } from "./components";
import { GlobalStyle, theme } from "./styles";

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Outlet />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
